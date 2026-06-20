export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 flex items-center">
      {/* Full-bleed perfume visual plane: product first, faceted, purple, sharp. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_30%,rgba(141,77,255,0.38),transparent_44%),radial-gradient(ellipse_at_20%_74%,rgba(232,121,249,0.15),transparent_42%),linear-gradient(115deg,#04030a_0%,#090616_46%,#12072b_100%)]" />
        <div className="absolute inset-y-0 left-0 w-[68vw] min-w-[520px] opacity-90">
          <svg viewBox="0 0 820 900" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="heroBottle" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#efe7ff" stopOpacity="0.92" />
                <stop offset="28%" stopColor="#c9a7ff" stopOpacity="0.86" />
                <stop offset="62%" stopColor="#8d4dff" stopOpacity="0.72" />
                <stop offset="100%" stopColor="#2e1065" stopOpacity="0.96" />
              </linearGradient>
              <linearGradient id="heroInk" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1c1232" />
                <stop offset="100%" stopColor="#05030a" />
              </linearGradient>
              <linearGradient id="heroFacet" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.32" />
                <stop offset="40%" stopColor="#c9a7ff" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#5a19d6" stopOpacity="0.04" />
              </linearGradient>
              <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="42" stdDeviation="34" floodColor="#000" floodOpacity="0.58" />
                <feDropShadow dx="0" dy="0" stdDeviation="24" floodColor="#8d4dff" floodOpacity="0.34" />
              </filter>
            </defs>

            <path d="M0 0h820v900H0z" fill="transparent" />
            <polygon points="60,110 350,0 280,900 0,900" fill="url(#heroFacet)" opacity="0.34" />
            <polygon points="420,0 820,0 620,900 260,900" fill="url(#heroFacet)" opacity="0.22" />
            <polygon points="710,90 820,0 820,900 610,900" fill="#8d4dff" opacity="0.08" />
            <path d="M78 650 760 120" stroke="#c9a7ff" strokeOpacity="0.22" strokeWidth="1" />
            <path d="M118 770 715 340" stroke="#efe7ff" strokeOpacity="0.10" strokeWidth="1" />

            <g filter="url(#softShadow)" className="animate-float-slow">
              <rect x="396" y="120" width="92" height="96" rx="4" fill="url(#heroInk)" />
              <rect x="382" y="210" width="120" height="18" rx="2" fill="#080512" />
              <rect x="420" y="228" width="44" height="48" fill="rgba(239,231,255,0.14)" stroke="rgba(239,231,255,0.26)" />
              <path d="M292 312 Q292 276 328 276 H556 Q592 276 592 312 V720 Q592 810 502 810 H382 Q292 810 292 720 Z" fill="url(#heroBottle)" />
              <path d="M292 312 Q292 276 328 276 H556 Q592 276 592 312 V720 Q592 810 502 810 H382 Q292 810 292 720 Z" fill="rgba(255,255,255,0.10)" stroke="rgba(239,231,255,0.34)" strokeWidth="2" />
              <path d="M340 334 Q326 510 354 730" stroke="rgba(255,255,255,0.55)" strokeWidth="10" fill="none" strokeLinecap="square" opacity="0.72" />
              <path d="M518 320 Q552 516 520 724" stroke="rgba(12,8,28,0.35)" strokeWidth="14" fill="none" strokeLinecap="square" />
              <path d="M356 520 H528 V646 H356 Z" fill="rgba(5,3,10,0.72)" stroke="rgba(201,167,255,0.62)" strokeWidth="1.5" />
              <text x="442" y="570" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="42" fill="#efe7ff" fontWeight="600">Amīr</text>
              <path d="M380 590h124" stroke="#c9a7ff" strokeOpacity="0.72" strokeWidth="1" />
              <text x="442" y="620" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="15" fill="#c9a7ff" letterSpacing="5">PARFUM</text>
            </g>
          </svg>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#04030a] to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full">
        <div className="max-w-3xl text-center lg:text-right">
          <p className="reveal text-xs sm:text-sm uppercase tracking-[0.34em] text-gold-300">
            عطرسازی لوکس، دقیق و ماندگار
          </p>

          <h1 className="reveal mt-5 font-display leading-[0.92] tracking-tight" data-delay="80">
            <span className="block text-7xl sm:text-8xl lg:text-[10rem] gold-text">امیر</span>
            <span className="mt-5 block text-3xl sm:text-5xl lg:text-6xl text-[#f6f1ff]">
              ما بهترین عطر را میدهیم.
            </span>
          </h1>

          <p className="reveal mt-7 max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-[#d8cfee] leading-relaxed" data-delay="180">
            رایحه‌های بنفش، تاریک و اشرافی امیر برای لحظه‌هایی ساخته شده‌اند که باید
            بی‌کلام دیده شوید. شیشه‌های تراش‌خورده، پخش بوی دقیق و اصالت تضمینی.
          </p>

          <div className="reveal mt-9 flex flex-wrap items-center justify-center lg:justify-start gap-3" data-delay="260">
            <a href="#pricing" className="btn-primary">
              خرید مجموعه لوکس
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </a>
            <a href="#showcase" className="btn-ghost">
              دیدن رایحه‌ها
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}