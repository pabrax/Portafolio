"use client";

import { useEffect, useState, type ComponentType } from "react";

/**
 * Loads the WebGL orb only on wide screens, without reduced-motion preference,
 * after the page is idle. Anywhere else the static CSS disc stays as is.
 * Native dynamic import keeps the orb (and its shader) out of the initial bundle.
 */
export function HeroOrbLoader() {
  const [Orb, setOrb] = useState<ComponentType | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)");
    if (!mq.matches) return;
    let cancelled = false;
    const load = () => {
      import("./HeroOrb")
        .then((mod) => {
          if (!cancelled) setOrb(() => mod.default);
        })
        .catch(() => {});
    };
    // Drop the orb if the viewport narrows or reduced motion is turned on after it loaded.
    const onChange = () => {
      if (!mq.matches) setOrb(null);
    };
    mq.addEventListener("change", onChange);
    // Wait for the page load plus a grace period so shader compile never competes with first paint or input.
    let timer = 0;
    const schedule = () => {
      timer = window.setTimeout(() => (window.requestIdleCallback ? window.requestIdleCallback(load) : load()), 4000);
    };
    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });
    return () => {
      cancelled = true;
      mq.removeEventListener("change", onChange);
      window.removeEventListener("load", schedule);
      window.clearTimeout(timer);
    };
  }, []);

  return Orb ? <Orb /> : null;
}
