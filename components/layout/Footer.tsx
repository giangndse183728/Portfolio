"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail, ArrowUpRight, Facebook, Instagram, ArrowRight } from "lucide-react";
import NeuButton from "../ui/NeuButton";
import { useTheme } from "@/components/ThemeProvider";

const socialLinks = [
  {
    href: "https://www.facebook.com/nguyen.giang.76784",
    label: "Facebook",
    icon: Facebook,
  },
  {
    href: "https://www.instagram.com/im_dnilb",
    label: "Instagram",
    icon: Instagram,
  },
  {
    href: "https://github.com/giangndse183728",
    label: "GitHub",
    icon: Github,
  },
];

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/about-us", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const { theme } = useTheme();
  return (
    <footer
      className="relative w-full py-12"
      style={{
        background: "var(--neu-bg)",
        boxShadow: "inset 0 4px 16px var(--neu-shadow-dark), inset 0 1px 0 var(--neu-shadow-light)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Top section */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-[2fr_1fr_1fr]">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div
                className="flex h-9 w-9 items-center justify-center overflow-hidden"
              >
                <Image
                  src="/images/dnilb.png"
                  alt="DNILB logo"
                  width={36}
                  height={36}
                  className={`h-9 w-9 object-contain ${theme === "dark" ? "invert" : ""}`}
                />
              </div>
              <span className="primary-font text-2xl font-bold tracking-widest text-foreground">
                DNILB
              </span>
            </div>
            <p className="secondary-font max-w-[350px] text-sm leading-relaxed text-neu-body">
              Crafting thoughtful digital experiences that blend clean interfaces,
              intuitive interactions, and performance-focused code.
            </p>
            <div className="flex items-center gap-4 pt-1">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full text-neu-body transition-all duration-200 hover:text-foreground"
                  style={{
                    background: "var(--neu-bg)",
                    boxShadow:
                      "3px 3px 6px var(--neu-shadow-dark), -3px -3px 6px var(--neu-shadow-light)",
                  }}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation column */}
          <div className="flex flex-col gap-4">
            <span className="secondary-font text-xs font-semibold uppercase tracking-widest text-neu-body">
              Navigation
            </span>
            <nav className="flex flex-col gap-3">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="secondary-font group flex w-fit items-center gap-1 text-sm font-medium text-neu-body transition-colors duration-200 hover:text-foreground"
                >
                  {label}
                  <ArrowUpRight className="h-3 w-3 -translate-x-0.5 translate-y-0.5 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                </Link>
              ))}
            </nav>
          </div>

          {/* CTA column */}
          <div className="flex flex-col gap-4">
            <span className="secondary-font text-xs font-semibold uppercase tracking-widest text-neu-body">
              Get in touch
            </span>
            <p className="secondary-font text-sm leading-relaxed text-neu-body">
              Have a project in mind? I&apos;d love to hear about it.
            </p>
            <NeuButton
              variant="pill"
              href="/contact"
              className="justify-center gap-2 !py-2 text-xs tracking-[0.15em] uppercase"
            >
              Say Hello
              <ArrowRight className="h-4 w-4" />
            </NeuButton>
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-8 h-px w-full"
          style={{
            background:
              "linear-gradient(to right, transparent, var(--neu-divider) 30%, var(--neu-divider) 70%, transparent)",
          }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <span className="secondary-font text-xs text-neu-body">
            © {new Date().getFullYear()}&nbsp;
            <span className="primary-font font-bold text-foreground">DNILB</span>
            &nbsp;— All rights reserved.
          </span>
          <span className="secondary-font text-xs text-muted">
            Designed &amp; built by Giang Nguyen
          </span>
        </div>
      </div>

      {/* Watermark */}
      <div className="pointer-events-none absolute bottom-8 right-6 translate-x-4 translate-y-4 opacity-[0.03] sm:translate-x-10 sm:translate-y-6 sm:opacity-[0.06]">
        <Image
          src="/images/dnilb.png"
          alt="DNILB watermark"
          width={220}
          height={220}
          className={`select-none ${theme === "dark" ? "invert" : ""}`}
        />
      </div>
    </footer>
  );
}
