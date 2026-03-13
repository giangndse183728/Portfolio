"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Github,
  Phone,
  MapPin,
  Mail,
  Send,
} from "lucide-react";
import NeuCard from "@/components/ui/NeuCard";
import NeuButton from "@/components/ui/NeuButton";

const socials = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Github, href: "https://github.com", label: "Github" },
];

const contactInfo = [
  { icon: Phone, label: "Phone", value: "0973170332" },
  { icon: MapPin, label: "Address", value: "Ho Chi Minh City, Vietnam" },
  { icon: Mail, label: "Email", value: "nguyendonggiang6.6@gmail.com" },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <main className="min-h-screen px-4 py-24 mt-2 sm:px-6 md:px-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 md:mb-12">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/40">
            Get in touch
          </p>
          <h1 className="primary-font text-5xl font-bold uppercase leading-[0.95] tracking-wide text-foreground">
            Contact Me
          </h1>
        </div>

        {/* Content grid */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-10">
          {/* ── Left: Info pill card ── */}
          <NeuCard
            variant="raised"
            className="flex h-full flex-col items-center px-8 py-10 lg:w-[380px] lg:flex-shrink-0 rounded-4xl"
          >
            {/* Circle avatar */}
            <NeuCard variant="inset" className="!rounded-full p-4 mb-6">
              <NeuCard variant="flat" className="!rounded-full p-2">
                <div className="h-32 w-32 overflow-hidden rounded-full">
                  <Image
                    src="/images/avatar.jpg"
                    alt="Nguyen Dong Giang"
                    width={128}
                    height={128}
                    className="h-full w-full object-cover"
                  />
                </div>
              </NeuCard>
            </NeuCard>

            {/* Name & role */}
            <h2 className="secondary-font text-lg font-bold text-neu-heading">
              Nguyen Dong Giang
            </h2>
            <p className="mt-1 text-xs text-neu-body">
              Frontend &amp; UI/UX Designer
            </p>

            {/* Social icons */}
            <div className="mt-6">
              <NeuCard variant="inset" className="px-5 py-3">
                <div className="flex items-center gap-4">
                  {socials.map(({ icon: Icon, href, label }) => (
                    <NeuButton
                      key={label}
                      variant="pill"
                      href={href}
                      className="h-10 w-10 !px-0 !py-0"
                    >
                      <Icon className="h-4 w-4 text-neu-heading" />
                    </NeuButton>
                  ))}
                </div>
              </NeuCard>
            </div>

            {/* Divider */}
            <div className="my-8 h-px w-full bg-neu-heading/8" />

            {/* Contact details */}
            <div className="flex w-full flex-col gap-5">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <NeuButton
                    variant="pressed"
                    className="h-10 w-10 !px-0 !py-0 flex items-center justify-center shrink-0"
                    type="button"
                  >
                    <Icon className="h-4 w-4 text-neu-heading" />
                  </NeuButton>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-neu-body/60">
                      {label}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-neu-heading break-words">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </NeuCard>

          {/* ── Right: Contact form ── */}
          <NeuCard variant="raised" className="flex-1 h-full p-8 sm:p-10">
            <h3 className="primary-font text-lg font-bold uppercase tracking-wide text-neu-heading">
              Send a Message
            </h3>
            <p className="mt-2 text-sm text-neu-body">
              Have a project in mind or just want to say hello? Fill out the form
              and I&apos;ll get back to you soon.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
              {/* Name & Email row */}
              <div className="flex flex-col gap-6 sm:flex-row">
                <label className="flex flex-1 flex-col gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-neu-body/70">
                    Your Name
                  </span>
                  <div
                    className="rounded-xl px-4 py-3"
                    style={{
                      background: "var(--neu-bg)",
                      boxShadow:
                        "inset 4px 4px 8px var(--neu-shadow-dark), inset -4px -4px 8px var(--neu-shadow-light)",
                    }}
                  >
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full bg-transparent text-sm text-neu-heading placeholder:text-neu-body/40 outline-none"
                    />
                  </div>
                </label>

                <label className="flex flex-1 flex-col gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-neu-body/70">
                    Your Email
                  </span>
                  <div
                    className="rounded-xl px-4 py-3"
                    style={{
                      background: "var(--neu-bg)",
                      boxShadow:
                        "inset 4px 4px 8px var(--neu-shadow-dark), inset -4px -4px 8px var(--neu-shadow-light)",
                    }}
                  >
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full bg-transparent text-sm text-neu-heading placeholder:text-neu-body/40 outline-none"
                    />
                  </div>
                </label>
              </div>

              {/* Subject */}
              <label className="flex flex-col gap-2">
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-neu-body/70">
                  Subject
                </span>
                <div
                  className="rounded-xl px-4 py-3"
                  style={{
                    background: "var(--neu-bg)",
                    boxShadow:
                      "inset 4px 4px 8px var(--neu-shadow-dark), inset -4px -4px 8px var(--neu-shadow-light)",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Project collaboration"
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                    className="w-full bg-transparent text-sm text-neu-heading placeholder:text-neu-body/40 outline-none"
                  />
                </div>
              </label>

              {/* Message */}
              <label className="flex flex-col gap-2">
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-neu-body/70">
                  Message
                </span>
                <div
                  className="rounded-xl px-4 py-3"
                  style={{
                    background: "var(--neu-bg)",
                    boxShadow:
                      "inset 4px 4px 8px var(--neu-shadow-dark), inset -4px -4px 8px var(--neu-shadow-light)",
                  }}
                >
                  <textarea
                    rows={8}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full resize-none bg-transparent text-sm text-neu-heading placeholder:text-neu-body/40 outline-none"
                  />
                </div>
              </label>

              {/* Submit */}
              <div className="flex justify-end">
                <NeuButton
                  variant="pill"
                  type="submit"
                  className="gap-2 !py-3 !px-8 text-xs tracking-[0.15em] uppercase"
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </NeuButton>
              </div>
            </form>
          </NeuCard>
        </div>
      </div>
    </main>
  );
}
