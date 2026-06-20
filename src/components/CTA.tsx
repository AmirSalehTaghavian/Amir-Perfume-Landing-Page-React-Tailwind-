export default function CTA() {
  return (
    <section id="cta" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal relative overflow-hidden sharp-panel-lg glass-strong gold-border p-8 sm:p-14 lg:p-20 text-center">
          {/* Decorative ambience */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(141,77,255,0.36),transparent_60%)] blur-3xl animate-float-slow" />
            <div className="absolute bottom-0 right-0 h-[300px] w-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(232,121,249,0.18),transparent_60%)] blur-3xl animate-float-slower" />
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
                maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
              }}
            />
          </div>

          <div className="relative">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gold-400">آماده‌اید؟</p>
            <h2 className="mt-4 font-display text-4xl sm:text-6xl leading-[1.05]">
              <span className="block text-[#f6f1ff]">اولین پاف را</span>
              <span className="block gold-text">با ما تجربه کنید.</span>
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-[#d8cfee]">
              با خرید امروز، نمونه‌های رایگان دریافت کنید و امضای رایحه‌ای خود را بسازید.
              ارسال رایگان، ضمانت ۳۰ روزه و بسته‌بندی لوکس.
            </p>

            <form
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
              aria-label="ثبت در خبرنامه"
            >
              <label htmlFor="email" className="sr-only">ایمیل شما</label>
              <input
                id="email"
                type="email"
                required
                placeholder="ایمیل شما"
                className="flex-1 sharp-panel bg-white/5 border border-white/10 px-5 py-3 text-sm text-[#f6f1ff] placeholder:text-[#8f82ac] focus:outline-none focus:border-gold-400/60 focus:bg-white/[0.07] transition"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                عضویت در خبرنامه
              </button>
            </form>
            <p className="mt-3 text-xs text-[#bfb2dd]">بدون اسپم. هر هفته یک ایمیل، یک رایحه.</p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-[#bfb2dd]">
              <span className="inline-flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-400" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                ارسال رایگان
              </span>
              <span className="inline-flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-400" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                ضمانت بازگشت ۳۰ روزه
              </span>
              <span className="inline-flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-400" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                اصالت تضمینی
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}