// Shared GSAP entry for page scripts. Syncs ScrollTrigger with Lenis.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const lenis = (window as any).__lenis;
if (lenis) lenis.on('scroll', ScrollTrigger.update);
export const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
export { gsap, ScrollTrigger };
