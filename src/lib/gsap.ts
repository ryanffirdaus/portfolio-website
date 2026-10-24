"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register once; every motion component imports from here.
gsap.registerPlugin(ScrollTrigger, useGSAP);

export const reducedMotion = "(prefers-reduced-motion: reduce)";
export const fullMotion = "(prefers-reduced-motion: no-preference)";

export { gsap, ScrollTrigger, useGSAP };
