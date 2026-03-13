"use client";

import { Menu, X, Sun, Moon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useRef, useState } from "react";
import { useNavbarMobileMenuAnimation } from "@/components/animations/useNavbarMobileMenuAnimation";
import { useTheme } from "@/components/ThemeProvider";
import NeuButton from "@/components/ui/NeuButton";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() { 
  const pathname = usePathname();
  const isHome = pathname === "/";
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const { theme, toggleTheme } = useTheme();

  useNavbarMobileMenuAnimation(mobileMenuRef, mobileOpen);

  return (
    <>
      <header
        data-hero-navbar
        className={`fixed left-0 right-0 top-0 z-50 p-2 opacity-100 sm:p-4 ${isHome ? "md:opacity-0" : ""}`}
      >
        <div
          className="mx-auto flex w-full max-w-lg items-center justify-between rounded-full px-4 py-2 sm:px-6"
          style={{
            background: "var(--neu-bg)",
            boxShadow:
              "6px 6px 12px var(--neu-shadow-dark), -6px -6px 12px var(--neu-shadow-light)",
          }}
        >
          <Link
            href="/"
            className="flex items-center gap-1 text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
          >
            <Image
              src="/images/dnilb.png"
              alt=""
              width={32}
              height={32}
              className={`h-8 w-8 object-contain sm:h-10 sm:w-10 ${theme === "dark" ? "invert" : ""}`}
            />
            <span className="primary-font text-2xl font-bold">DNILB</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-foreground transition-shadow duration-200"
              >
                {label}
              </Link>
            ))}

            <NeuButton
              variant="pill"
              type="button"
              aria-label="Toggle dark mode"
              onClick={toggleTheme}
              className="h-8 w-8 !px-0 !py-0 text-foreground"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </NeuButton>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              aria-label="Toggle dark mode"
              onClick={toggleTheme}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-foreground transition-shadow duration-200"
              style={{
                boxShadow:
                  "3px 3px 6px var(--neu-shadow-dark), -3px -3px 6px var(--neu-shadow-light)",
              }}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-foreground transition-shadow duration-200"
              style={{
                boxShadow: mobileOpen
                  ? "inset 3px 3px 6px var(--neu-shadow-dark), inset -3px -3px 6px var(--neu-shadow-light)"
                  : "none",
              }}
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 z-40 flex flex-col pt-20 md:hidden"
          style={{
            background: "var(--neu-bg)",
          }}
        >
          <nav className="flex flex-1 flex-col items-center justify-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={closeMobile}
                className="rounded-xl px-8 py-3 text-2xl font-medium text-foreground transition-shadow duration-200"
                style={{
                  background: "var(--neu-bg)",
                  boxShadow:
                    "6px 6px 12px var(--neu-shadow-dark), -6px -6px 12px var(--neu-shadow-light)",
                }}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
