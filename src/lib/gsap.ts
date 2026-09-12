/**
 * Central GSAP setup. Import { gsap, ScrollTrigger } from here so the
 * plugin is only registered once, in one place.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Shared easing + timing so every animation feels like one system. */
export const EASE = 'power3.out';
export const DURATION = 0.8;

export { gsap, ScrollTrigger, useGSAP };
