export default function ThankYou() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          ありがとうございます
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          お問い合わせを受け付けました。<br />
          担当者より連絡させていただきます。
        </p>
        <a
          href="/"
          className="inline-block bg-primary text-white px-8 py-3 rounded-md font-bold hover:bg-primary/90 transition-colors"
        >
          トップページに戻る
        </a>
      </div>
    </main>
  );
}
