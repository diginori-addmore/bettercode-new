"use client";

import { useState } from "react";
import Image from "next/image";

const navItems = [
  { label: '위챗 미니프로그램 쇼핑몰', href: '/' },
  { label: '중국 마케팅 사례', href: '#marketing-cases' },
  { label: 'Insight', href: '/Insight' },
  { label: 'BetterPoS', href: '/BetterPos' },
];

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* 상단 고정 네비게이션 바 */}
      <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md z-20">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          {/* 로고 */}
          <button
            onClick={scrollToTop}
            aria-label="맨 위로 이동"
            className="p-0 focus:outline-none"
          >
            <Image
              src="/Bettercode.png"
              alt="BetterCode Logo"
              width={40}
              height={10}
              priority
            />
          </button>

          {/* PC 메뉴: md 이상에서만 보임 */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* 모바일 메뉴 버튼: md 미만에서만 보임 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="메뉴 열기/닫기"
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* 모바일 메뉴: md 미만에서만 렌더링 */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
            <ul className="flex flex-col items-center gap-4 py-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
