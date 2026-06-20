const reviews = [
  {
    name: "آرمیتا رضایی",
    role: "طراح داخلی، تهران",
    quote:
      "امیر اصل عطری است که از صبح تا شب همراهم بوده. کیفیت شیشه، بوی رایحه و حتی جعبه‌اش بی‌نقصه.",
    rating: 5,
    initials: "آ",
  },
  {
    name: "Daniel Carter",
    role: "Creative Director, Dubai",
    quote:
      "I've tested hundreds of fragrances. Amīr stands out: sophisticated, lasting, and unmistakably premium.",
    rating: 5,
    initials: "D",
  },
  {
    name: "مهدی کاویانی",
    role: "کارآفرین، اصفهان",
    quote:
      "به عنوان هدیه برای مشتری‌های ویژه‌ام استفاده می‌کنم. واکنش همیشه یکسان و فاخر است. واقعاً بهترین انتخاب.",
    rating: 5,
    initials: "م",
  },
  {
    name: "Sara Lindqvist",
    role: "Editor, Stockholm",
    quote:
      "The packaging alone tells you this is different. The scent? Pure poetry. Amīr is now part of my signature.",
    rating: 5,
    initials: "S",
  },
  {
    name: "نگار محمدی",
    role: "هنرمند، مشهد",
    quote:
      "عطر رُز امیر برای مراسم‌های رسمی عالی است. ماندگاریش فوق‌العاده‌ست و همه می‌پرسن چه عطری زدی!",
    rating: 5,
    initials: "ن",
  },
  {
    name: "Khalid Al-Mansoori",
    role: "Collector, Abu Dhabi",
    quote:
      "Rare to find a brand that pairs craft with consistency. Amīr does it beautifully, bottle after bottle.",
    rating: 5,
    initials: "K",
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5 text-gold-400" aria-label={`${n} از ۵ ستاره`}>
      {[...Array(n)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l2.9 6.9L22 10l-5.5 4.7L18 22l-6-3.6L6 22l1.5-7.3L2 10l7.1-1.1L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="reveal text-xs sm:text-sm uppercase tracking-[0.3em] text-gold-400">نظرات مشتریان</p>
          <h2 className="reveal mt-4 font-display text-3xl sm:text-5xl leading-tight" data-delay="80">
            <span className="text-[#f6f1ff]">صدای </span>
            <span className="gold-text">مشتریان امیر</span>
          </h2>
          <p className="reveal mt-4 text-[#d8cfee]" data-delay="160">
            بیش از ۱۲۰ هزار مشتری در سراسر ایران و منطقه، امیر را انتخاب کرده‌اند.
          </p>
        </div>

        <div className="reveal stagger mt-12 sm:mt-16 grid gap-5 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" data-delay="200">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="card-lift glass sharp-panel p-6 sm:p-7 flex flex-col"
            >
              <svg width="28" height="22" viewBox="0 0 28 22" className="text-gold-400/60" fill="currentColor" aria-hidden="true">
                <path d="M0 22V12C0 5.4 4.6 0 11 0v4c-3.6 0-6 2.6-6 6h6v12H0zm17 0V12c0-6.6 4.6-12 11-12v4c-3.6 0-6 2.6-6 6h6v12h-11z" />
              </svg>
              <blockquote className="mt-4 text-[#efe7ff] leading-relaxed text-sm sm:text-base flex-1">
                {r.quote}
              </blockquote>
              <div className="mt-5 flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="h-10 w-10 sharp-panel bg-gradient-to-br from-gold-300 via-gold-500 to-gold-600 flex items-center justify-center font-display text-lg text-white">
                  {r.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-[#f6f1ff] truncate">{r.name}</div>
                  <div className="text-xs text-[#bfb2dd] truncate">{r.role}</div>
                </div>
                <Stars n={r.rating} />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}