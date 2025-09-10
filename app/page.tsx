import Image from "next/image";

export default function Home() {
  return (
    <div className="relative font-sans min-h-screen p-8 sm:p-20 flex flex-col items-center justify-center">
      {/* 오른쪽 상단 네비게이션 메뉴 */}
      <nav className="absolute top-8 right-8 flex gap-4">
        <a
          href="#shop"
          className="px-4 py-2 text-black"
        >
          위챗 미니프로그램 쇼핑몰
        </a>
        <a
          href="#china-marketing"
          className="px-4 py-2 text-black"
        >
          중국 마케팅 사례
        </a>
        <a
          href="#better-pos"
          className="px-4 py-2 text-black"
        >
          betterPos
        </a>
      </nav>

      {/* 로고 */}
      <main className="flex flex-col gap-[32px] items-center">
        <Image
          className="dark:invert"
          src="/bettercode_logo.png"
          alt="bettercode logo"
          width={150}
          height={38}
          priority
        />
      </main>
    </div>
  );
}
