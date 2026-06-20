const features = [
  {
    title: "رایحه‌های اصیل",
    desc: "ترکیب دقیق با مواد اولیه درجه یک از گلستان‌های فرانسوی و کمپانی‌های سوئیسی.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v6" /><path d="M5 8c0 4 3 7 7 7s7-3 7-7" /><path d="M5 8h14" /><path d="M9 22h6" /><path d="M12 15v7" />
      </svg>
    ),
  },
  {
    title: "ماندگاری بالا",
    desc: "فرمولاسیون EDP با ماندگاری ۸ تا ۱۲ ساعت روی پوست و پارچه.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: "طراحی مینیمال",
    desc: "شیشه‌های دست‌ساز با درپوش فلزی براق و برچسب‌های تایپوگرافی کلاسیک.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="3" width="12" height="18" rx="2" /><path d="M9 3v2h6V3" /><path d="M9 12h6" />
      </svg>
    ),
  },
  {
    title: "بسته‌بندی لوکس",
    desc: "جعبه‌های چرمی با فویل بنفش متالیک و کارت تشکر دست‌نویس برای هر سفارش.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7l9-4 9 4-9 4-9-4z" /><path d="M3 7v10l9 4 9-4V7" /><path d="M12 11v10" />
      </svg>
    ),
  },
  {
    title: "تست قبل از خرید",
    desc: "نمونه رایگان ۲ میلی‌لیتری همراه اولین خرید تا از تناسب عطر مطمئن شوید.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3h6v4l4 8a3 3 0 0 1-3 4H8a3 3 0 0 1-3-4l4-8V3z" /><path d="M9 3h6" />
      </svg>
    ),
  },
  {
    title: "ضمانت بازگشت",
    desc: "اگر عطر مورد علاقه‌تان نبود، تا ۳۰ روز آن را عودت دهید و پولتان را بگیرید.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 1 0 3-6.7" /><path d="M3 4v5h5" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="reveal text-xs sm:text-sm uppercase tracking-[0.3em] text-gold-400">ویژگی‌ها</p>
          <h2 className="reveal mt-4 font-display text-3xl sm:text-5xl leading-tight" data-delay="80">
            <span className="text-[#f6f1ff]">جزئیاتی که </span>
            <span className="gold-text">فرق ایجاد می‌کنند</span>
          </h2>
          <p className="reveal mt-4 text-[#d8cfee]" data-delay="160">
            از انتخاب مواد اولیه تا طراحی شیشه، هر عنصر با وسواس ساخته شده تا تجربه‌ای
            بی‌نظیر را برای شما خلق کند.
          </p>
        </div>

        <div className="reveal stagger mt-12 sm:mt-16 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" data-delay="200">
          {features.map((f) => (
            <article
              key={f.title}
              className="card-lift glass sharp-panel p-6 sm:p-7 group"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center sharp-panel bg-gradient-to-br from-[#211239] to-[#070512] border border-gold-500/30 text-gold-300 group-hover:scale-110 group-hover:-skew-y-2 transition-transform duration-500">
                <span className="h-6 w-6 block">{f.icon}</span>
              </div>
              <h3 className="mt-5 font-display text-2xl text-[#f6f1ff]">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#d8cfee]">{f.desc}</p>
              <div className="mt-5 h-px bg-gradient-to-l from-transparent via-gold-500/30 to-transparent" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}