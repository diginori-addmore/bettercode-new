// app/page.tsx

"use client";

import { useState } from "react";
import Image from "next/image";

const navItems = [
  { label: '위챗 미니프로그램 쇼핑몰', href: '#wechat-mall' },
  { label: '중국 마케팅 사례', href: '#marketing-cases' },
  { label: 'betterPoS', href: '#better-pos' },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* 1. 상단 고정 네비게이션 바 */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-20">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <button onClick={scrollToTop} aria-label="맨 위로 이동">
            <Image
              src="/Bettercode.jpg"
              alt="BetterCode Logo"
              width={120}
              height={32}
              priority
            />
          </button>
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-gray-700 hover:text-blue-600 font-medium">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="메뉴 열기/닫기">
              {isMenuOpen ? (
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
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <ul className="flex flex-col items-center gap-4 py-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* 2. 페이지 메인 콘텐츠 */}
      <div className="font-sans min-h-screen pt-24 sm:pt-28 flex flex-col bg-white">
        
        {/* 👇 이 <main> 태그와 'grow' 클래스가 핵심입니다. */}
        <main className="grow">
          {/* 여기에 페이지 콘텐츠를 채워 넣으면 됩니다.
            예를 들어, 나중에 <section>들을 이곳에 추가할 수 있습니다.
            지금은 비워두어도 푸터는 아래에 고정됩니다.
          */}
        </main>

        <footer className="w-full flex items-center justify-center bg-gray-900 text-white p-6">
          <p className="text-sm text-gray-400">© 2025 BetterCode. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
}