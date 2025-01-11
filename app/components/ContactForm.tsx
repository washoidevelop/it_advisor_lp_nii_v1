'use client';

import { useState, useEffect } from "react";
import { toast } from "sonner";

interface FormData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  message: string;
  service: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    message: "",
    service: "it_advisor_lp_nii_v1", // デフォルト値を設定
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  // フォームの入力状態をチェック
  useEffect(() => {
    const isValid = Object.entries(formData).every(([key, value]) => {
      if (key === 'service' || key === 'message') return true; // serviceとmessageは必須ではない
      return value.trim() !== '';
    });
    setIsFormValid(isValid);
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // GASに送信するデータを準備
    const submitData = {
      companyName: formData.companyName,
      contactName: formData.contactName,
      email: formData.email,
      phone: `'${formData.phone}`,
      message: formData.message,
      service: formData.service
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwdYmcPtI7NsTfGH1amn3MQ5yfVbIBn-j39WllkM5WzVT6zepH7X1FB6KBJw8dpVjsSLQ/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain",
          },
          body: JSON.stringify(submitData),
        }
      );

      {
        toast.success("資料のダウンロードを開始します");
        
        setFormData({
          companyName: "",
          contactName: "",
          email: "",
          phone: "",
          message: "",
          service: "it_advisor_lp_nii_v1",
        });

        // PDFを新しいタブで開く
        window.open('/Washoi_DXdocument.pdf', '_blank');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("ダウンロードに失敗しました。時間をおいて再度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-[600px] mx-auto px-4">
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label htmlFor="companyName" className="block text-sm md:text-base font-bold text-gray-700 mb-1">
            会社名 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="companyName"
            required
            placeholder="株式会社XXX"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="contactName" className="block text-sm md:text-base font-bold text-gray-700 mb-1">
            ご担当者様 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="contactName"
            required
            placeholder="山田太郎"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            value={formData.contactName}
            onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm md:text-base font-bold text-gray-700 mb-1">
            メールアドレス <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="example@example.com"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm md:text-base font-bold text-gray-700 mb-1">
            電話番号 <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            required
            pattern="[0-9\-\(\)]*"
            placeholder="08012345678"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm md:text-base font-bold text-gray-700 mb-1">
            ご質問、ご要望
          </label>
          <textarea
            id="message"
            placeholder="ご自由にどうぞ"
            rows={4}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting || !isFormValid}
          className={`w-full px-6 py-3 text-white rounded-md transition-colors font-bold ${
            isFormValid ? 'bg-primary hover:bg-primary/90' : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          {isSubmitting ? "ダウンロード中..." : "ダウンロード"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
