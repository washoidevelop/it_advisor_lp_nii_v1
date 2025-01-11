export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <h1 className="text-3xl font-bold mb-8 text-center">プライバシーポリシー</h1>
        <div className="prose max-w-none">
          <h2 className="text-xl font-bold mt-8 mb-4">1. 個人情報の取り扱いについて</h2>
          <p>
            当社は、お客様の個人情報を適切に管理し、以下の目的以外には使用いたしません。
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>お問い合わせに対する回答</li>
            <li>サービスに関する情報提供</li>
            <li>資料のダウンロード提供</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">2. 個人情報の第三者への開示</h2>
          <p>
            当社は、お客様の個人情報を、法令に基づく場合を除き、お客様の同意なしに第三者へ開示することはありません。
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">3. 個人情報の安全管理</h2>
          <p>
            当社は、お客様の個人情報を適切に管理し、漏洩、滅失、毀損等を防止するため、必要な安全管理措置を講じています。
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">4. お問い合わせ窓口</h2>
          <p>
            個人情報の取り扱いに関するお問い合わせは、以下の窓口までご連絡ください。
          </p>
          <p className="mt-4">
            株式会社Washoi<br />
            メール：info@washoi.co.jp<br />
            電話：03-6453-6902
          </p>
        </div>
      </div>
    </div>
  );
}
