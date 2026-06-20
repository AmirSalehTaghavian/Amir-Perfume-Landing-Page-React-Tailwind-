import { useEffect, useState } from "react";

const links = [
  { href: "#features", label: "ویژگی‌ها" },
  { href: "#showcase", label: "محصولات" },
  { href: "#benefits", label: "فواید" },
  { href: "#testimonials", label: "نظرات" },
  { href: "#pricing", label: "قیمت‌ها" },
  { href: "#faq", label: "سوالات" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          className={`flex items-center justify-between sharp-panel px-4 sm:px-5 h-14 sm:h-16 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]" : "glass"
          }`}
          aria-label="ناوبری اصلی"
        >
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2 group" aria-label="امیر، صفحه اصلی">
            <span className="relative inline-flex h-9 w-9 items-center justify-center sharp-panel bg-gradient-to-br from-[#efe7ff] via-[#8d4dff] to-[#2e1065] shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_10px_24px_-8px_rgba(141,77,255,0.75)]">
              <span className="font-display text-xl font-bold text-white">A</span>
              <span className="absolute -inset-1 sharp-panel bg-gold-400/25 blur-md opacity-0 group-hover:opacity-100 transition" />
            </span>
            <span className="font-display text-2xl tracking-wide text-[#f6f1ff]">
              Amīr<span className="text-gold-400">.</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-3 py-2 text-[#d8cfee] hover:text-gold-300 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden sm:flex items-center gap-2">
            <a href="#pricing" className="btn-primary text-sm">
              خرید عطر
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 sharp-panel glass border border-white/10 text-[#f6f1ff]"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="باز و بسته کردن منو"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {open ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </>
              ) : (
                <>
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
            open ? "max-h-[480px] opacity-100 mt-2" : "max-h-0 opacity-0"
          }`}
        >
          <div className="glass-strong sharp-panel p-3">
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 text-[#efe7ff] hover:bg-white/5 hover:text-gold-300 transition"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a href="#pricing" onClick={() => setOpen(false)} className="btn-primary w-full">
                  خرید عطر
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}