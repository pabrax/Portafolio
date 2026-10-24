"use client";

import { useEffect, useRef } from "react";

const VERT = `attribute vec2 p; varying vec2 v; void main(){ v = p; gl_Position = vec4(p, 0.0, 1.0); }`;

// A softly deforming sphere lit by a pointer-driven light. All colors come from CSS tokens.
const FRAG = `
precision highp float;
varying vec2 v;
uniform float t;
uniform vec2 light;
uniform vec3 cBase, cRim, cSpec;

float hash(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float noise(vec3 x){
  vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x), mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x), mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
}

void main(){
  vec2 q = v;
  float r = length(q);
  float ang = atan(q.y, q.x);
  float wob = 0.035 * noise(vec3(cos(ang) * 1.6, sin(ang) * 1.6, t * 0.35));
  float edge = 0.94 + wob;
  float alpha = 1.0 - smoothstep(edge - 0.012, edge + 0.012, r);
  if (alpha <= 0.0) { gl_FragColor = vec4(0.0); return; }

  float z = sqrt(max(0.0, 1.0 - (r / edge) * (r / edge)));
  vec3 n = normalize(vec3(q / edge, z));
  // Surface ripple perturbs the normal.
  vec3 pp = n * 2.2 + vec3(0.0, 0.0, t * 0.25);
  n = normalize(n + 0.18 * vec3(noise(pp) - 0.5, noise(pp + 7.1) - 0.5, noise(pp + 13.7) - 0.5));

  vec3 L = normalize(vec3(light, 0.85));
  float diff = clamp(dot(n, L), 0.0, 1.0);
  float rim = pow(1.0 - clamp(n.z, 0.0, 1.0), 2.4);
  float spec = pow(clamp(dot(reflect(-L, n), vec3(0.0, 0.0, 1.0)), 0.0, 1.0), 28.0);

  vec3 col = cBase * (0.72 + 0.62 * diff);
  col = mix(col, cRim, rim * 0.75);
  col += cSpec * spec * 0.55;
  gl_FragColor = vec4(col * alpha, alpha);
}`;

function cssColor(cls: string): [number, number, number] {
  const el = document.createElement("span");
  el.className = cls;
  el.style.display = "none";
  document.body.appendChild(el);
  const m = getComputedStyle(el).backgroundColor.match(/[\d.]+/g) ?? ["255", "107", "44"];
  el.remove();
  return [Number(m[0]) / 255, Number(m[1]) / 255, Number(m[2]) / 255];
}

/** Decorative WebGL orb drawn over the static hero disc. Never carries content. */
export default function HeroOrb() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: true, antialias: false, powerPreference: "low-power" });
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const sh = gl.createShader(type)!;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      return sh;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const u = (n: string) => gl.getUniformLocation(prog, n);
    const uT = u("t"), uLight = u("light");
    const setColors = () => {
      gl.uniform3fv(u("cBase"), cssColor("bg-primary"));
      gl.uniform3fv(u("cRim"), cssColor("bg-cobalt"));
      gl.uniform3fv(u("cSpec"), cssColor("bg-lemon"));
    };
    setColors();
    const themeObserver = new MutationObserver(setColors);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const target = { x: -0.45, y: 0.55 };
    const cur = { x: -0.45, y: 0.55 };
    const onMove = (e: PointerEvent) => {
      target.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.y = 1 - (e.clientY / window.innerHeight) * 2;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    let visible = true;
    let raf = 0;
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !raf) raf = requestAnimationFrame(frame);
    });
    io.observe(canvas);

    const start = performance.now();
    function frame(now: number) {
      raf = 0;
      if (!visible || document.hidden) return;
      cur.x += (target.x - cur.x) * 0.06;
      cur.y += (target.y - cur.y) * 0.06;
      gl!.clearColor(0, 0, 0, 0);
      gl!.clear(gl!.COLOR_BUFFER_BIT);
      gl!.uniform1f(uT, (now - start) / 1000);
      gl!.uniform2f(uLight, cur.x, cur.y);
      gl!.drawArrays(gl!.TRIANGLES, 0, 3);
      canvas!.dataset.ready = "true";
      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);
    const onVisibility = () => {
      if (!document.hidden && visible && !raf) raf = requestAnimationFrame(frame);
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      themeObserver.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVisibility);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-700 data-[ready=true]:opacity-100" />;
}
