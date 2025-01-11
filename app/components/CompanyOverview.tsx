export default function CompanyOverview() {
  return (
    <section className="pt-10 pb-10 bg-[#dfd7bb] max-w-[1200px] mx-auto">
      <div className="max-w-[600px] mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-xl md:text-3xl font-bold text-center text-gray-900 relative mb-2">
            会社概要
          </h2>
          <span className="block h-1 bg-primary w-full max-w-lg mx-auto"></span>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <tbody>
              <tr className="border-b">
                <th className="text-sm md:text-base py-2 px-4 bg-gray-50 w-1/4 font-bold text-gray-700">会社名</th>
                <td className="text-sm md:text-base py-4 px-6">株式会社Washoi</td>
              </tr>
              <tr className="border-b">
                <th className="text-sm md:text-base py-2 px-4 bg-gray-50 w-1/4 font-bold text-gray-700">代表者名</th>
                <td className="text-sm md:text-base py-4 px-6">柴田修</td>
              </tr>
              <tr className="border-b">
                <th className="text-sm md:text-base py-2 px-4 bg-gray-50 w-1/4 font-bold text-gray-700">メール</th>
                <td className="text-sm md:text-base py-4 px-6">info@washoi.co.jp</td>
              </tr>
              <tr className="border-b">
                <th className="text-sm md:text-base py-2 px-4 bg-gray-50 w-1/4 font-bold text-gray-700">電話番号</th>
                <td className="text-sm md:text-base py-4 px-6">03-6453-6902</td>
              </tr>
              <tr>
                <th className="text-sm md:text-base py-2 px-4 bg-gray-50 w-1/4 font-bold text-gray-700">所在地</th>
                <td className="text-sm md:text-base py-4 px-6">
                  〒150-0001<br />
                  東京都渋谷区神宮前2-33-8<br /><br />
                  〒220-0012<br />
                  神奈川県横浜市西区みなとみらい3-7-1-8F
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
