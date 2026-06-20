const cols = [
  {
    title: "محصولات",
    links: ["عطر اصل", "عطر نُوا", "عطر رُز", "نمونه‌ها", "بسته‌های هدیه"],
  },
  {
    title: "برند",
    links: ["داستان ما", "هویت بصری", "پایداری", "اخبار", "همکاری"],
  },
  {
    title: "پشتیبانی",
    links: ["تماس با ما", "سوالات متداول", "ارسال و بازگشت", "رهگیری سفارش", "حریم خصوصی"],
  },
];

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <a href="#top" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center sharp-panel bg-gradient-to-br from-[#efe7ff] via-[#8d4dff] to-[#2e1065]">
                <span className="font-display text-xl font-bold text-white">A</span>
              </span>
              <span className="font-display text-2xl text-[#f6f1ff]">Amīr<span className="text-gold-400">.</span></span>
            </a>
            <p className="mt-4 max-w-sm text-sm text-[#bfb2dd] leading-relaxed">
              امیر؛ ما بهترین عطر را میدهیم. تجربه‌ای پرمیوم از رایحه‌های اصیل،
              ماندگار و طراحی‌شده برای کسانی که جزئیات اهمیت دارند.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {[
                { label: "Instagram", path: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" },
                { label: "Twitter", path: "M22 5.8c-.7.3-1.5.5-2.4.6.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1A4.1 4.1 0 0 0 12 9.1c0 .3 0 .6.1.9A11.6 11.6 0 0 1 3.4 5c-.4.6-.6 1.3-.6 2.1 0 1.4.7 2.7 1.8 3.4-.7 0-1.3-.2-1.8-.5v.1c0 2 1.4 3.6 3.3 4-.3.1-.7.1-1.1.1-.3 0-.5 0-.8-.1.5 1.6 2 2.8 3.8 2.8A8.2 8.2 0 0 1 2 19.5 11.6 11.6 0 0 0 8.3 21c7.5 0 11.6-6.2 11.6-11.6v-.5c.8-.6 1.5-1.3 2.1-2.1z" },
                { label: "TikTok", path: "M16 3v3.2a4.6 4.6 0 0 0 4.6 4.6V14a7.8 7.8 0 0 1-4.6-1.5V16a6 6 0 1 1-6-6h1v3.2h-1A2.8 2.8 0 1 0 12.8 16V3H16z" },
                { label: "YouTube", path: "M21.6 7.2a2.5 2.5 0 0 0-1.7-1.7C18.3 5 12 5 12 5s-6.3 0-7.9.5A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.7 1.7C5.7 19 12 19 12 19s6.3 0 7.9-.5a2.5 2.5 0 0 0 1.7-1.7A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5 3-5 3z" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center sharp-panel glass border border-white/10 text-[#d8cfee] hover:text-gold-300 hover:border-gold-400/40 transition"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map((c) => (
            <div key={c.title} className="lg:col-span-2">
              <h4 className="font-display text-lg text-[#f6f1ff]">{c.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-[#bfb2dd] hover:text-gold-300 transition">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-lg text-[#f6f1ff]">تماس</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-[#bfb2dd]">
              <li>تهران، خیابان ولیعصر، پلاک ۲۲۰</li>
              <li dir="ltr" className="text-right">+۹۸ ۲۱ ۸۸۰۰ ۰۰۰۰</li>
              <li>hello@amir-perfume.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#8f82ac]">
            © ۱۴۰۴ امیر. تمامی حقوق محفوظ است.
          </p>
          <div className="flex items-center gap-5 text-xs text-[#8f82ac]">
            <a href="#" className="hover:text-gold-300 transition">حریم خصوصی</a>
            <a href="#" className="hover:text-gold-300 transition">شرایط استفاده</a>
            <a href="#" className="hover:text-gold-300 transition"> کوکی‌ها</a>
          </div>
        </div>
      </div>
    </footer>
  );
}