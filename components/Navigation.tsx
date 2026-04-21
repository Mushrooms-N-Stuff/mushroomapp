"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/mushrooms", label: "Mushrooms" },
  { href: "/health-goals", label: "Health Goals" },
  { href: "/research-library", label: "Research Library" },
  { href: "/guides", label: "Guides" },
  { href: "/stacks", label: "Stacks" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-cream border-b border-forest/[0.08]">
      <nav className="container-editorial flex items-center justify-between h-24 lg:h-32">
        <Link
          href="/"
          className="flex items-center group"
          aria-label="Mushrooms & Stuff — Evidence-based functional mushrooms"
        >
          {/* Full horizontal lockup on larger screens */}
          <Image
            src="/brand/logo.png"
            alt="Mushrooms & Stuff"
            width={1500}
            height={600}
            priority
            className="hidden sm:block w-auto h-20 lg:h-28 transition-transform duration-300 ease-editorial group-hover:-translate-y-[1px]"
          />
          {/* Icon only on mobile */}
          <Image
            src="/brand/icon-mushroom.png"
            alt="Mushrooms & Stuff"
            width={200}
            height={200}
            priority
            className="sm:hidden w-auto h-32 transition-transform duration-300 ease-editorial group-hover:-translate-y-[1px]"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[0.88rem] text-charcoal/80 hover:text-forest transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link href="/newsletter" className="btn-primary !py-2.5 !px-5 !text-[0.82rem]">
            Newsletter
          </Link>
        </div>

        <button
          className="lg:hidden p-2 -mr-2 text-forest"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            {open ? (
              <path d="M5 5l14 14M19 5L5 19" />
            ) : (
              <>
                <path d="M4 8h16" />
                <path d="M4 16h16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-forest/10 bg-cream">
          <ul className="container-editorial py-4 space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2.5 text-[0.95rem] text-charcoal/90"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link href="/newsletter" className="btn-primary w-full" onClick={() => setOpen(false)}>
                Newsletter
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
