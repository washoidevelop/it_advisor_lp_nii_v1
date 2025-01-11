import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-1 bg-[#dfd7bb] max-w-[1200px] mx-auto">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-xl md:text-3xl font-bold text-center text-gray-900 relative mb-2">
            資料ダウンロード
          </h2>
          <span className="block h-1 bg-primary w-full max-w-lg mx-auto mb-5"></span>
        </div>
        <div>
          <p className="text-base md:text-xl text-gray-700 text-center mb-2 max-w-[800px] mx-auto">
            詳しいDX事例のご紹介資料を<br />
            ぜひ一度ご覧ください。
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
