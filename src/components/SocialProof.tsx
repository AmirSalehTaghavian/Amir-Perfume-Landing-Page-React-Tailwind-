const logos = [
  "Vogue", "GQ", "Harper's", "Esquire", "WALLPAPER*", "MONOCLE", "FORBES", "GQ IRAN",
];

export default function SocialProof() {
  return (
    <section aria-label="پوشش رسانه‌ای" className="py-12 sm:py-16 border-y border-white/5 bg-black/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="reveal text-center text-xs sm:text-sm uppercase tracking-[0.3em] text-[#bfb2dd]">
          در رسانه‌های معتبر جهانی و منطقه‌ای
        </p>

        <div className="reveal mt-8 overflow-hidden" data-delay="120">
          <div className="marquee-track">
            {[...logos, ...logos].map((name, i) => (
              <div
                key={i}
                className="shrink-0 flex items-center justify-center min-w-[140px] sm:min-w-[180px] h-12 sm:h-14 px-6 sharp-panel border border-white/5 bg-white/[0.02]"
              >
                <span className="font-display text-lg sm:text-xl text-[#d8cfee] tracking-wider">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto" data-delay="200">
          {[
            { k: "۴.۹", v: "از ۵، رضایت مشتریان" },
            { k: "+۲۰۰", v: "بوتیک معتبر در سراسر کشور" },
            { k: "۱۵+", v: "سال تجربه در صنعت عطر" },
            { k: "۲۴h", v: "ارسال سریع و رایگان" },
          ].map((s) => (
            <div key={s.v} className="text-center">
              <div className="font-display text-3xl sm:text-4xl gold-text">{s.k}</div>
              <div className="mt-1 text-xs sm:text-sm text-[#bfb2dd]">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}