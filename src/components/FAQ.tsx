import { useState } from "react";

const faqs = [
  {
    q: "آیا عطرهای امیر اصل هستند؟",
    a: "بله. تمامی محصولات امیر با مواد اولیه درجه یک از کمپانی‌های معتبر فرانسوی و سوئیسی و under license تهیه می‌شوند و اصالت هر شیشه با QR Code قابل استعلام است.",
  },
  {
    q: "ماندگاری عطرها چقدر است؟",
    a: "عطرهای EDP امیر معمولاً بین ۸ تا ۱۲ ساعت روی پوست و تا ۲۴ ساعت روی پارچه باقی می‌مانند. عواملی مانند نوع پوست و آب‌وهوا روی ماندگاری تأثیر می‌گذارد.",
  },
  {
    q: "آیا ارسال رایگان دارید؟",
    a: "بله. برای تمامی سفارش‌های بالای ۵۰۰ هزار تومان، ارسال رایگان و سریع ۲۴ ساعته به سراسر ایران انجام می‌شود. برای سفارش‌های کمتر نیز هزینه ارسال به‌صورت شفاف در checkout نمایش داده می‌شود.",
  },
  {
    q: "اگر عطر را پسند نداشتم چه کنم؟",
    a: "ضمانت بازگشت ۳۰ روزه امیر این امکان را می‌دهد تا عطر را بدون قید و شرط عودت دهید و کل مبلغ پرداختی به‌صورت کامل به شما بازگردانده شود.",
  },
  {
    q: "آیا امکان سفارش نمونه قبل از خرید وجود دارد؟",
    a: "بله. با هر خرید از پلن «امضا» و «آتلیه»، دو نمونه ۲ میلی‌لیتری رایگان دریافت می‌کنید. همچنین می‌توانید فقط نمونه‌ها را به‌صورت جداگانه سفارش دهید.",
  },
  {
    q: "روش‌های پرداخت چگونه است؟",
    a: "پرداخت از طریق درگاه‌های معتبر بانکی، کارت به کارت و فروش در محل (برای تهران و کرج) امکان‌پذیر است. تمام تراکنش‌ها با SSL ۲۵۶ بیتی رمزنگاری می‌شوند.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <p className="reveal text-xs sm:text-sm uppercase tracking-[0.3em] text-gold-400">سوالات متداول</p>
          <h2 className="reveal mt-4 font-display text-3xl sm:text-5xl leading-tight" data-delay="80">
            <span className="text-[#f6f1ff]">پاسخ </span>
            <span className="gold-text">سوالات شما</span>
          </h2>
        </div>

        <div className="reveal mt-12 space-y-3" data-delay="160">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={f.q}
                className={`glass sharp-panel overflow-hidden transition-all duration-500 ${
                  isOpen ? "border-gold-500/30" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-5 text-right"
                >
                  <span className="font-display text-base sm:text-lg text-[#f6f1ff]">{f.q}</span>
                  <span
                    className={`shrink-0 inline-flex h-9 w-9 items-center justify-center sharp-panel border border-white/10 bg-white/5 text-gold-300 transition-transform duration-500 ${
                      isOpen ? "rotate-45 bg-gold-500/15" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-5 text-sm sm:text-base text-[#d8cfee] leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}