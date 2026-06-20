const plans = [
  {
    name: "Discovery",
    fa: "دیشکوری",
    price: "۸۹۰٫۰۰۰",
    period: "تومان / شیشه ۵۰ml",
    desc: "برای آشنایی با دنیای امیر، انتخابی شیک و اقتصادی.",
    features: [
      "عطر EDP در حجم ۵۰ میلی‌لیتر",
      "بسته‌بندی استاندارد شیشه‌ای",
      "ارسال رایگان در سراسر کشور",
      "هدیه نمونه ۲ میلی‌لیتری",
    ],
    cta: "شروع کنید",
    featured: false,
  },
  {
    name: "Signature",
    fa: "امضا",
    price: "۱٫۲۹۰٫۰۰۰",
    period: "تومان / شیشه ۱۰۰ml",
    desc: "محبوب‌ترین انتخاب با ماندگاری، اصالت و طراحی کامل.",
    features: [
      "عطر EDP در حجم ۱۰۰ میلی‌لیتر",
      "جعبه چرمی با فویل بنفش متالیک",
      "ارسال رایگان و سریع ۲۴ ساعته",
      "نمونه ۲ × ۲ میلی‌لیتری",
      "کارت تشکر دست‌نویس",
      "ضمانت ۳۰ روزه بازگشت وجه",
    ],
    cta: "خرید امضا",
    featured: true,
  },
  {
    name: "Atelier",
    fa: "آتلیه",
    price: "۲٫۹۹۰٫۰۰۰",
    period: "تومان / مجموعه ۳ عددی",
    desc: "تجربه کامل امیر با سه رایحه، یک جعبه و یک افسانه.",
    features: [
      "مجموعه کامل ۳ عطری (اصل، نُوا، رُز)",
      "جعبه چرمی اختصاصی با حکاکی نام",
      "ارسال ویژه با بیمه کامل",
      "دسترسی زودهنگام به عطرهای آینده",
      "ضمانت تخفیف دائمی برای خریدهای بعدی",
    ],
    cta: "تجربه آتلیه",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(141,77,255,0.18),transparent_60%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="reveal text-xs sm:text-sm uppercase tracking-[0.3em] text-gold-400">قیمت‌ها</p>
          <h2 className="reveal mt-4 font-display text-3xl sm:text-5xl leading-tight" data-delay="80">
            <span className="text-[#f6f1ff]">یک انتخاب </span>
            <span className="gold-text">مناسب شما</span>
          </h2>
          <p className="reveal mt-4 text-[#d8cfee]" data-delay="160">
            بدون هزینه پنهان. ضمانت بازگشت وجه. ارسال رایگان به سراسر کشور.
          </p>
        </div>

        <div className="reveal stagger mt-12 sm:mt-16 grid gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-3" data-delay="200">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`relative sharp-panel-lg p-7 sm:p-8 flex flex-col card-lift ${
                p.featured
                  ? "glass-strong gold-border bg-gradient-to-b from-[#211239]/80 to-[#070512]/85 lg:-translate-y-4 shadow-[0_30px_80px_-20px_rgba(141,77,255,0.48)]"
                  : "glass"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 right-6 inline-flex items-center gap-1.5 sharp-panel bg-gradient-to-r from-gold-400 to-gold-600 px-3 py-1 text-[11px] font-semibold text-white shadow-lg">
                  پیشنهاد ویژه
                </div>
              )}
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-2xl text-[#f6f1ff]">{p.name}</h3>
                <span className="text-xs text-[#bfb2dd]">{p.fa}</span>
              </div>
              <p className="mt-2 text-sm text-[#d8cfee] min-h-[40px]">{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-4xl sm:text-5xl gold-text tabular">{p.price}</span>
              </div>
              <span className="text-xs text-[#bfb2dd]">{p.period}</span>

              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-[#efe7ff]">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center sharp-panel bg-gold-500/15 text-gold-300">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`mt-8 ${p.featured ? "btn-primary" : "btn-ghost"} w-full`}
              >
                {p.cta}
              </a>
            </article>
          ))}
        </div>

        <p className="reveal mt-8 text-center text-xs text-[#bfb2dd]" data-delay="300">
          پرداخت امن | ضمانت بازگشت ۳۰ روزه | پشتیبانی ۲۴/۷
        </p>
      </div>
    </section>
  );
}