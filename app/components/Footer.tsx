import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#103946] text-white py-8 max-w-[1200px] mx-auto">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="flex flex-col items-center justify-center space-y-4">
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link 
                  href="/privacy-policy"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </nav>
          <div className="text-gray-300 text-sm">
            © {new Date().getFullYear()} 株式会社Washoi All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
