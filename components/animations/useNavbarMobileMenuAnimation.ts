import { useEffect, type RefObject } from "react";
import { gsap } from "gsap";

export function useNavbarMobileMenuAnimation(
  mobileMenuRef: RefObject<HTMLDivElement | null>,
  mobileOpen: boolean,
) {
  useEffect(() => {
    const menu = mobileMenuRef.current;
    if (!menu) return;

    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(
        menu,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
      );
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuRef, mobileOpen]);
}

