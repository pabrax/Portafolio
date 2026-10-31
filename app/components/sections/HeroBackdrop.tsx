import { HeroOrbLoader } from "./HeroOrbLoader";

/**
 * Decorative hero shapes. Server component: scroll-linked drift is pure CSS
 * (animation-timeline), so it ships zero JS and is static where unsupported or
 * under prefers-reduced-motion.
 */
export function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="drift-down transition-colors duration-700 lg:data-[orb=ready]:bg-transparent absolute -right-16 top-16 h-48 w-48 rounded-full bg-primary sm:-right-20 sm:top-14 sm:h-64 sm:w-64 lg:right-[6%] lg:top-28 lg:h-[34rem] lg:w-[34rem]">
        <HeroOrbLoader />
      </div>
      <div className="drift-up absolute right-[22%] top-[30rem] hidden h-56 w-56 rounded-full border-[18px] border-cobalt lg:block" />
      <div className="absolute right-[12%] top-24 hidden h-6 w-6 rounded-full bg-lemon lg:block" />
    </div>
  );
}
