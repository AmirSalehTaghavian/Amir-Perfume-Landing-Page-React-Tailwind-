const products = [
  {
    id: "noir",
    name: "عطر امیر نوآر",
    sub: "Amīr Noir - Extrait",
    notes: ["بنفشه", "عود سیاه", "چرم نرم"],
    price: "۱٫۶۹۰٫۰۰۰",
    badge: "امضای لوکس",
    bg: "linear-gradient(135deg, rgba(239,231,255,0.24), rgba(141,77,255,0.28) 42%, rgba(15,8,35,0.92))",
    stops: ["#efe7ff", "#8d4dff", "#2e1065"],
  },
  {
    id: "velvet",
    name: "عطر امیر وِلوِت",
    sub: "Amīr Velvet - EDP",
    notes: ["رز تیره", "زعفران", "مشک سفید"],
    price: "۱٫۴۹۰٫۰۰۰",
    badge: "جدید",
    bg: "linear-gradient(135deg, rgba(232,121,249,0.26), rgba(88,28,135,0.30) 45%, rgba(7,5,18,0.94))",
    stops: ["#f0abfc", "#a855f7", "#3b0764"],
  },
  {
    id: "royal",
    name: "عطر امیر رویال",
    sub: "Amīr Royal - Oud",
    notes: ["عنبر", "عود لائوس", "کهربا"],
    price: "۱٫۸۹۰٫۰۰۰",
    badge: "نسخه محدود",
    bg: "linear-gradient(135deg, rgba(199,210,254,0.22), rgba(91,33,182,0.34) 46%, rgba(5,3,10,0.96))",
    stops: ["#ddd6fe", "#7c3aed", "#1e1b4b"],
  },
];

function Bottle({ id, stops }: { id: string; stops: string[] }) {
  return (
    <svg viewBox="0 0 200 270" className="h-full w-auto drop-shadow-[0_28px_34px_rgba(0,0,0,0.62)]" aria-hidden="true">
      <defs>
        <linearGradient id={`bottle-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={stops[0]} />
          <stop offset="48%" stopColor={stops[1]} />
          <stop offset="100%" stopColor={stops[2]} />
        </linearGradient>
        <linearGradient id={`shine-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.54" />
          <stop offset="45%" stopColor="white" stopOpacity="0.10" />
          <stop offset="100%" stopColor="black" stopOpacity="0.35" />
        </linearGradient>
      </defs>
      <rect x="80" y="8" width="40" height="38" rx="2" fill="#080512" />
      <rect x="74" y="44" width="52" height="10" rx="1" fill="#120b24" />
      <rect x="90" y="54" width="20" height="18" fill="rgba(239,231,255,0.15)" stroke="rgba(239,231,255,0.24)" />
      <path d="M50 86 Q50 72 68 72 H132 Q150 72 150 86 V226 Q150 258 118 258 H82 Q50 258 50 226 Z" fill={`url(#bottle-${id})`} />
      <path d="M50 86 Q50 72 68 72 H132 Q150 72 150 86 V226 Q150 258 118 258 H82 Q50 258 50 226 Z" fill={`url(#shine-${id})`} opacity="0.5" stroke="rgba(239,231,255,0.30)" />
      <path d="M66 98 Q60 158 75 224" stroke="rgba(255,255,255,0.48)" strokeWidth="5" fill="none" strokeLinecap="square" />
      <path d="M74 158 H126 V212 H74 Z" fill="rgba(5,3,10,0.72)" stroke="rgba(201,167,255,0.48)" />
      <text x="100" y="184" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="18" fill="#efe7ff" fontWeight="600">Amīr</text>
      <path d="M84 194h32" stroke="#c9a7ff" strokeOpacity="0.65" strokeWidth="0.7" />
      <text x="100" y="207" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="7" fill="#c9a7ff" letterSpacing="2">PARFUM</text>
    </svg>
  );
}

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-20 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[520px] w-[820px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(141,77,255,0.18),transparent_60%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-xl knife-line pb-5">
            <p className="reveal text-xs sm:text-sm uppercase tracking-[0.3em] text-gold-400">محصولات</p>
            <h2 className="reveal mt-4 font-display text-3xl sm:text-5xl leading-tight" data-delay="80">
              <span className="text-[#f6f1ff]">سه رایحه </span>
              <span className="gold-text">تراش‌خورده امیر</span>
            </h2>
          </div>
          <p className="reveal max-w-md text-[#d8cfee]" data-delay="120">
            هر شیشه مثل یک سنگ قیمتی طراحی شده است: لبه‌های تیز، عمق بنفش و رایحه‌ای
            که با فاصله استاندارد، لوکس و بی‌صدا اثر می‌گذارد.
          </p>
        </div>

        <div className="reveal stagger mt-12 grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" data-delay="180">
          {products.map((p) => (
            <article
              key={p.id}
              className="card-lift group relative glass-strong gold-border sharp-panel-lg luxury-sheen p-6 sm:p-7 overflow-hidden"
            >
              <div className="absolute inset-0 -z-0 opacity-80 group-hover:opacity-100 transition-opacity duration-700" style={{ background: p.bg }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/18 to-white/[0.03]" />

              <div className="relative inline-flex items-center gap-2 sharp-panel glass px-3 py-1 text-[11px] text-[#efe7ff]">
                <span className="h-1.5 w-5 bg-gradient-to-l from-gold-300 to-gold-600" />
                {p.badge}
              </div>

              <div className="relative mt-6 h-56 sm:h-64 flex items-center justify-center transition-transform duration-700 group-hover:scale-105 group-hover:-skew-y-1">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.20),transparent_60%)]" />
                <div className="relative h-full">
                  <Bottle id={p.id} stops={p.stops} />
                </div>
              </div>

              <div className="relative mt-5">
                <h3 className="font-display text-2xl text-[#f6f1ff]">{p.name}</h3>
                <p className="text-xs text-[#bfb2dd] mt-0.5">{p.sub}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.notes.map((n) => (
                    <span key={n} className="text-[11px] px-2.5 py-1 sharp-panel bg-white/5 border border-white/10 text-[#efe7ff]">
                      {n}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[11px] text-[#bfb2dd]">قیمت</div>
                    <div className="font-display text-xl gold-text tabular">تومان {p.price}</div>
                  </div>
                  <button type="button" className="btn-ghost text-sm">
                    افزودن
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}