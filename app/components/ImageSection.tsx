'use client';

import Image from "next/image";

export default function ImageSection() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full flex flex-col">
      {/* FV画像 */}
      <div className="relative w-full max-w-[1200px] mx-auto">
        {/* 資料ダウンロードボタン */}
        <div className="absolute top-1 md:top-4 right-6 md:right-12 z-10">
          <button
            onClick={handleScrollToContact}
            className="whitespace-nowrap px-4 md:px-6 py-1.5 md:py-2.5 bg-gradient-to-r from-[#d4b55f] to-[#c99e3a] text-white text-sm md:text-base lg:text-lg font-bold rounded-md shadow-md hover:from-[#c99e3a] hover:to-[#b38d33] hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            資料ダウンロード
          </button>
        </div>
        <Image
          src="/images/FV.png"
          alt="FV"
          width={1200}
          height={1615}
          className="w-full h-auto object-contain"
          sizes="100vw"
        />
      </div>

      {/* 資料請求ボタン */}
      <div className="relative w-full">
        <div className="max-w-[1200px] mx-auto bg-[#dfd7bb] px-4 py-6">
          <button
            onClick={handleScrollToContact}
            className="group flex items-center gap-3 md:gap-4 mx-auto px-5 md:px-8 py-2 md:py-3 bg-gradient-to-r from-[#d4b55f] to-[#c99e3a] text-white text-base md:text-xl lg:text-2xl font-bold rounded-[100px] shadow-xl hover:shadow-2xl hover:scale-[1.02] hover:from-[#c99e3a] hover:to-[#b38d33] transition-all duration-300 relative"
          >
            <div className="bg-white rounded-full p-2 md:p-3 flex items-center justify-center">
              <span className="text-[#c99e3a] text-xs md:text-sm font-bold whitespace-nowrap leading-[1.3]">まずは<br/>無料で</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>資料請求する</span>
              <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* FV2画像 */}
      <div className="relative w-full max-w-[1200px] mx-auto">
        <Image
          src="/images/FV2.png"
          alt="FV2"
          width={1200}
          height={1615}
          className="w-full h-auto object-contain"
          sizes="100vw"
        />
      </div>

      {/* point画像 */}
      <div className="relative w-full max-w-[1200px] mx-auto">
        <Image
          src="/images/point.png"
          alt="point"
          width={1200}
          height={3750}
          className="w-full h-auto object-contain"
          sizes="100vw"
        />
      </div>

      {/* samplecase画像 */}
      <div className="relative w-full max-w-[1200px] mx-auto">
        <Image
          src="/images/samplecase.png"
          alt="samplecase"
          width={1200}
          height={2160}
          className="w-full h-auto object-contain"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
