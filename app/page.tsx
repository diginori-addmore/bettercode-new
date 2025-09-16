"use client";

import { useState } from "react";
import Image from "next/image";
import Hero from "./components/Hero";
import Mainfunction from "./components/Mainfunction";

const navItems = [
  { label: '위챗 미니프로그램 쇼핑몰', href: '#wechat-mall' },
  { label: '중국 마케팅 사례', href: '#marketing-cases' },
  { label: 'Insight', href: '#Insight'},
  { label: 'betterPoS', href: '#better-pos' },
];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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

          {/* PC 메뉴 */}
          <ul className="md:flex items-center gap-8">
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

          {/* 모바일 메뉴 버튼 */}
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

        {/* 모바일 메뉴 */}
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
              <li>
                <button
                  onClick={() => { setIsPopupOpen(true); setIsMobileMenuOpen(false); }}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                >
                  Popup 보기
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <Hero />
      <Mainfunction />

      {/* 페이지 메인 콘텐츠 */}
      <div className="font-sans min-h-screen pt-24 sm:pt-28 flex flex-col bg-white dark:bg-gray-900">
        <main className="flex-1">
          {/* 페이지 콘텐츠 영역 */}
        </main>

        {/* footer 영역 */}
        <footer className="w-full bg-gray-900 text-white p-8">
          <div className="max-w-7xl mx-auto text-center space-y-4">
            <p className="text-sm leading-6">
              (주)베터코드<br />
              contactus@bettercode.kr &nbsp; ⦁ &nbsp; 070-4334-2016<br />
              서울시 강남구 강남대로 364 미왕빌딩 패스트파이브 강남 2호점 16층 1611호
            </p>

            <a
              href="https://www.facebook.com/%EB%B2%A0%ED%84%B0%EC%BD%94%EB%93%9C-%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC-1666140583448053"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Facebook 바로가기
            </a>

            <p className="text-xs text-gray-400">
              Copyright &copy; BetterCode All Rights Reserved.
            </p>
          </div>
        </footer>

        {/* Popup iframe */}
        {isPopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
              <div className="flex justify-end p-2">
                <button
                  className="text-gray-700 dark:text-gray-300 hover:text-red-500"
                  onClick={() => setIsPopupOpen(false)}
                >
                  닫기
                </button>
              </div>
              <div className="p-4">
                <iframe
                  src="https://www.xiaohongshu.com/discovery/item/5e8494d20000000001005750?apptime=1585747249&appuid=595667a350c4b40153cb9370&xhsshare=CopyLink"
                  className="w-full h-96 border-0"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
