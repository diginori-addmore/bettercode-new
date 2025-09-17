"use client";

import { useState } from "react";
import Image from "next/image";
import Hero from "./components/Hero";
import Mainfunction from "./components/Mainfunction";
import AlternatingContentSection from "./components/AlternatingContentSection";
import About from "./components/About";
import OperatingScreens from "./components/OperatingScreens";
import Clientreview from "./components/Clientreview";
import Clients from "./components/Clients";

const navItems = [
  { label: '위챗 미니프로그램 쇼핑몰', href: '#wechat-mall' },
  { label: '중국 마케팅 사례', href: '#marketing-cases' },
  { label: 'Insight', href: '/Insight' },
  { label: 'BetterPoS', href: '/BetterPos' },
];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const contentData = [
    {
      id: 1,
      title: "클라우드 기반의\n월간/연간 단위 구독형 서비스",
      description: "프로그램 설치 및 운영이 필요 없습니다.\n쇼핑몰 미니 프로그램 개선 사항을 추가 비용없이 지속적으로 업그레이드를 받을 수 있습니다.\n월간/연간 구독형 서비스로, 초기 비용부담은 줄이고 지속적으로 개선된 서비스를 이용할 수 있습니다.",
      imageUrl: "/images/placeholder-1.jpg",
      imageAlt: "첫 번째 이미지",
    },
    {
      id: 2,
      title: "한국법인이 직접 운영 가능,\n한국에 있는 계좌로 판매대금을 직접 받을 수 있습니다",
      description: "한국 사업자 등록증으로 미니프로그램을 직접 개설 및 운영이 가능합니다.\n따라서 별도의 중국법인회사를 설립 할 필요가 없습니다.\n소비자가 지불한 판매 대금은 한국 지불 대항사(PG)사를 거쳐 고객사 계좌로 입금이 됩니다.",
      imageUrl: "/images/placeholder-2.jpg",
      imageAlt: "두 번째 이미지",
    },
    {
      id: 3,
      title: "한국, 중국 상황을 모두 이해하는\n한국의 서비스 운영/개발팀",
      description: "2016년부터 북경에 수년간 커머스 시스템을 개발, 운영한 경험이 있는 한국 개발자가 서비스를 개발/운영하고 있습니다.\n한국 개발팀이 자체 개발한 위챗 미니프로그램과 웹 관리도구를 제공합니다.\n신속한 신규 기능 추가 대응 및 긴급 상황에서도 빠른 대응이 가능합니다.",
      imageUrl: "/images/placeholder-3.jpg",
      imageAlt: "세 번째 이미지",
    },
    {
      id: 4,
      title: "콰징 통관 서비스 제공",
      description: "보세구 사용 기반 통관(1210), 역직구 기반 통관(9610) 등의 콰징 통관을 지원합니다.\n중국 해관에 정식 등록된 베터코드 중국 법인이 통관 신고를 지원해 드립니다.\n콰징 통관에 대해서는 별도로 문의해 주세요.",
      imageUrl: "/images/placeholder-4.jpg",
      imageAlt: "네 번째 이미지",
    },
  ];

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
            </ul>
          </div>
        )}
      </nav>

      {/* 페이지 콘텐츠 */}
      <Hero />
      <Mainfunction />
      <AlternatingContentSection data={contentData} />
      <About />
      <Clientreview />
      <Clients />
      <OperatingScreens />

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
      </div>
    </>
  );
}
