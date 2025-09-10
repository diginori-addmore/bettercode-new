// app/page.tsx

"use client"; // window 객체와 onClick 이벤트를 사용하므로 클라이언트 컴포넌트로 전환합니다.

import Image from "next/image";

// 네비게이션 메뉴 항목 데이터
const navItems = [
  { label: '위챗 미니프로그램 쇼핑몰', href: '#wechat-mall' },
  { label: '중국 마케팅 사례', href: '#marketing-cases' },
  { label: 'betterPoS', href: '#better-pos' },
];

export default function Home() {
  // 맨 위로 스크롤하는 함수
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {/* ==================== 1. 상단 고정 네비게이션 바 ==================== */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-20">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          {/* 로고 (클릭 시 최상단으로 이동) */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            aria-label="맨 위로 이동"
          >
            {/* 기존 코드의 로고 이미지를 사용합니다. */}
            <Image
              className="dark:invert"
              src="/Bettercode.jpg" // public 폴더에 Bettercode.jpg 파일이 있어야 합니다.
              alt="BetterCode Logo"
              width={120} // 네비게이션 바에 맞게 크기 조절
              height={32}
              priority
            />
          </button>

          {/* 네비게이션 메뉴 (md 사이즈 이상에서 보임) */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ==================== 2. 페이지 메인 콘텐츠 예정 ==================== */}
      <div className="font-sans min-h-screen pt-24 sm:pt-28">
        <main className="flex flex-col items-center gap-16 sm:gap-20">
        </main>
        <footer className="w-full flex items-center justify-center mt-20 p-8">
          <p className="text-gray-500">© 2025 BetterCode. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
}