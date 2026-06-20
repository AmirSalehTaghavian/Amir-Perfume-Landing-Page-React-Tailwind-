const benefits = [
  {
    title: "ثبات احساسی",
    desc: "رایحه‌ای که با شما نفس می‌کشد، از صبح تا شب، از جلسه تا سفر.",
    pct: 92,
  },
  {
    title: "جذابیت اجتماعی",
    desc: "اثری ماندگار که در ذهن اطرافیان نقش می‌بندد و شما را متمایز می‌کند.",
    pct: 88,
  },
  {
    title: "اعتماد به نفس",
    desc: "حسی که با پخش اولین پاف از شیشه ایجاد می‌شود، بی‌قید و شرط.",
    pct: 95,
  },
  {
    title: "هدیه بی‌نظیر",
    desc: "بسته‌بندی امیر، خودش یک پیام احترام به کسی است که دوست داری.",
    pct: 84,
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-5">
            <p className="reveal text-xs sm:text-sm uppercase tracking-[0.3em] text-gold-400">فواید</p>
            <h2 className="reveal mt-4 font-display text-3xl sm:text-5xl leading-tight" data-delay="80">
              <span className="text-[#f6f1ff]">بیش از یک عطر،</span>
              <br />
              <span className="gold-text">یک احساس.</span>
            </h2>
            <p className="reveal mt-5 text-[#d8cfee] leading-relaxed" data-delay="160">
              ما باور داریم عطر، پادشاهی بی‌کلام احساسات است. امیر طراحی شده تا در
              لحظات مهم زندگی، همراهی‌تان کند و امضای شخصی‌تان را بسازد.
            </p>

            <div className="reveal mt-8 grid grid-cols-2 gap-4" data-delay="240">
              {[
                { k: "۸h+", v: "ماندگاری متوسط" },
                { k: "۳ پاف", v: "پخش بوی استاندارد" },
                { k: "pH ۵٫۵", v: "سازگار با پوست" },
                { k: "Vegan", v: "بدون تست حیوانی" },
              ].map((s) => (
                <div key={s.v} className="glass sharp-panel p-4">
                  <div className="font-display text-2xl gold-text tabular">{s.k}</div>
                  <div className="mt-1 text-xs text-[#bfb2dd]">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: bars */}
          <div className="lg:col-span-7">
            <div className="reveal stagger glass-strong gold-border sharp-panel-lg p-6 sm:p-8" data-delay="120">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl text-[#f6f1ff]">نتیجه‌ای که مشتریان گزارش می‌دهند</h3>
                <span className="text-xs text-[#bfb2dd]">بر اساس ۲۴۸۰ نظرسنجی</span>
              </div>
              <div className="mt-6 space-y-5">
                {benefits.map((b, i) => (
                  <div key={b.title}>
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm text-[#efe7ff]">{b.title}</span>
                      <span className="font-display text-sm gold-text tabular">{b.pct}٪</span>
                    </div>
                    <div className="mt-2 h-2 bg-white/5 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-l from-gold-300 via-gold-500 to-gold-600 transition-[width] duration-[1400ms] ease-out"
                        style={{
                          width: `${b.pct}%`,
                          transitionDelay: `${i * 120}ms`,
                        }}
                      />
                    </div>
                    <p className="mt-1.5 text-xs text-[#bfb2dd]">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}