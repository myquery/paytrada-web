"use client";

import { useEffect } from "react";

/** Progressive enhancements: content and native navigation also work without JS. */
export default function SiteInteractions() {
  useEffect(() => {
    const menu = document.querySelector<HTMLDetailsElement>(".mobile-menu");
    const closeMenu = () => { if (menu) menu.open = false; };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menu?.open) {
        closeMenu();
        menu.querySelector("summary")?.focus();
      }
    };
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      if (event.target.closest(".mobile-menu a") || !menu?.contains(event.target)) closeMenu();
    };
    const desktop = window.matchMedia("(min-width: 901px)");
    const onResize = () => { if (desktop.matches) closeMenu(); };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    desktop.addEventListener("change", onResize);

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    const revealElements = document.querySelectorAll<HTMLElement>(".section-pad > div:not(.closing-orbit):not(.closing-stamp)");
    if (!reducedMotion.matches && "IntersectionObserver" in window) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer?.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08 });
      revealElements.forEach((element) => {
        // Keep tall content visible; it may never meet an intersection threshold.
        if (element.getBoundingClientRect().height < window.innerHeight * 1.5) {
          element.classList.add("reveal-ready");
          observer?.observe(element);
        }
      });
    }
    const onMotionChange = () => {
      if (reducedMotion.matches) {
        observer?.disconnect();
        revealElements.forEach((element) => element.classList.add("is-revealed"));
      }
    };
    reducedMotion.addEventListener("change", onMotionChange);
    return () => {
      observer?.disconnect();
      revealElements.forEach((element) => element.classList.remove("reveal-ready", "is-revealed"));
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
      desktop.removeEventListener("change", onResize);
      reducedMotion.removeEventListener("change", onMotionChange);
    };
  }, []);
  return null;
}
