"use client";

// React 훅 및 Next.js 컴포넌트 import
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// 마케팅 페이지 전용 컴포넌트들 import
import VisualSlider from "./components/VisualSlider";
import MarketingTabs from "./components/MarketingTabs";
import MarketingGallery from "./components/MarketingGallery";
import PopupModal from "./components/PopupModal";

// 마케팅 아이템 타입 정의
interface MarketingItem {
  id: string;          // 고유 ID (샤오홍슈 포스트 ID 등)
  title: string;       // 인플루언서/계정 이름
  followers?: string;  // 팔로워 수
  likes?: string;      // 좋아요 수
  comments?: string;   // 댓글 수
  imageUrl: string;    // 썸네일 이미지 경로
  platform: 'xiaohongshu' | 'wechat' | 'weibo'; // 플랫폼 구분
  popupUrl?: string;   // 팝업에서 보여줄 URL (웨이보용)
}

// 샤오홍슈 마케팅 사례 데이터 (중국의 인스타그램)
// TODO: 추후 API나 CMS에서 동적으로 가져올 예정
const xiaohongshuData: MarketingItem[] = [
  {
    id: '5e80707d0000000001004b84',
    title: '中韩情侣老王和宋宋',
    followers: '1.1만',
    likes: '23',
    comments: '1',
    imageUrl: '/assets/img/temp_xiaohongshu01.png',
    platform: 'xiaohongshu'
  },
  {
    id: '5e8494d20000000001005750',
    title: '韩国korea思密达',
    followers: '1623',
    likes: '34',
    comments: '0',
    imageUrl: '/assets/img/temp_xiaohongshu02.png',
    platform: 'xiaohongshu'
  },
  {
    id: '5e833dff000000000100bf8d',
    title: 'Hello Nana',
    followers: '2162',
    likes: '34',
    comments: '5',
    imageUrl: '/assets/img/temp_xiaohongshu03.png',
    platform: 'xiaohongshu'
  },
  {
    id: '5e938219000000000100509e',
    title: '王小美滋滋',
    followers: '3152',
    likes: '9',
    comments: '6',
    imageUrl: '/assets/img/temp_xiaohongshu04.png',
    platform: 'xiaohongshu'
  },
  {
    id: '5e90749a00000000010021a3',
    title: '小宝哒吧啦',
    followers: '1만',
    likes: '29',
    comments: '15',
    imageUrl: '/assets/img/temp_xiaohongshu05.png',
    platform: 'xiaohongshu'
  },
  {
    id: '5eb0614b000000000100482b',
    title: 'Zhang集集',
    followers: '7057',
    likes: '18',
    comments: '9',
    imageUrl: '/assets/img/temp_xiaohongshu06.png',
    platform: 'xiaohongshu'
  },
  {
    id: '5ea173d1000000000100116c',
    title: '温柔可宁儿',
    followers: '1.1만',
    likes: '110',
    comments: '20',
    imageUrl: '/assets/img/temp_xiaohongshu07.png',
    platform: 'xiaohongshu'
  },
  {
    id: '5ea08f820000000001001620',
    title: '昕昕兔',
    followers: '7308',
    likes: '4',
    comments: '1',
    imageUrl: '/assets/img/temp_xiaohongshu08.png',
    platform: 'xiaohongshu'
  },
  {
    id: '5ea2d731000000000100bcf0',
    title: '英子',
    followers: '4820',
    likes: '10',
    comments: '75',
    imageUrl: '/assets/img/temp_xiaohongshu09.png',
    platform: 'xiaohongshu'
  },
  {
    id: '5ea13b19000000000100a61e',
    title: '大橘梓',
    followers: '2262',
    likes: '15',
    comments: '15',
    imageUrl: '/assets/img/temp_xiaohongshu10.png',
    platform: 'xiaohongshu'
  },
  {
    id: '5ea0229500000000010040e9',
    title: '喵小闹233',
    followers: '4547',
    likes: '11',
    comments: '0',
    imageUrl: '/assets/img/temp_xiaohongshu11.png',
    platform: 'xiaohongshu'
  },
  {
    id: '5ea8ede0000000000100ab59',
    title: 'L ♥s1yu',
    followers: '3130',
    likes: '31',
    comments: '10',
    imageUrl: '/assets/img/temp_xiaohongshu12.png',
    platform: 'xiaohongshu'
  },
  {
    id: '5ea15fa00000000001003b52',
    title: '最好的夏晓筱',
    followers: '2745',
    likes: '16',
    comments: '10',
    imageUrl: '/assets/img/temp_xiaohongshu13.png',
    platform: 'xiaohongshu'
  },
  {
    id: '5ea13fb90000000001002a15',
    title: '-你的团子',
    followers: '1.2만',
    likes: '30',
    comments: '31',
    imageUrl: '/assets/img/temp_xiaohongshu14.png',
    platform: 'xiaohongshu'
  },
  {
    id: '5ea583ab000000000100057f',
    title: '宝藏女孩小星星',
    followers: '2329',
    likes: '14',
    comments: '0',
    imageUrl: '/assets/img/temp_xiaohongshu15.png',
    platform: 'xiaohongshu'
  },
  {
    id: '5ea4d4400000000001001fea',
    title: '小颠儿欧尼',
    followers: '1.2만',
    likes: '38',
    comments: '13',
    imageUrl: '/assets/img/temp_xiaohongshu16.png',
    platform: 'xiaohongshu'
  }
];

// 위챗 마케팅 사례 데이터 (중국의 카카오톡)
// TODO: 추후 API나 CMS에서 동적으로 가져올 예정
const wechatData: MarketingItem[] = [
  { id: 'luziasi', title: 'luziasi', imageUrl: '/assets/img/temp_wechet01.png', platform: 'wechat' },
  { id: 'niko', title: 'Niko爱逍遥', imageUrl: '/assets/img/temp_wechet02.png', platform: 'wechat' },
  { id: 'jennie', title: 'jennie', imageUrl: '/assets/img/temp_wechet03.png', platform: 'wechat' },
  { id: 'xuan', title: 'Xuan', imageUrl: '/assets/img/temp_wechet04.png', platform: 'wechat' },
  { id: 'fulixiaonui', title: '&福利小妞', imageUrl: '/assets/img/temp_wechet05.png', platform: 'wechat' },
  { id: 'xiaoxing', title: '小星', imageUrl: '/assets/img/temp_wechet06.png', platform: 'wechat' },
  { id: 'xiaoxiong', title: '小熊', imageUrl: '/assets/img/temp_wechet07.png', platform: 'wechat' },
  { id: 'jiayao', title: '佳瑶爱吃草莓呀', imageUrl: '/assets/img/temp_wechet08.png', platform: 'wechat' },
  { id: 'naipao', title: '奶泡blu', imageUrl: '/assets/img/temp_wechet09.png', platform: 'wechat' },
  { id: 'shuangyanpi', title: '你是双眼皮嘛', imageUrl: '/assets/img/temp_wechet10.png', platform: 'wechat' },
  { id: 'luobotou', title: '萝卜头小v', imageUrl: '/assets/img/temp_wechet11.png', platform: 'wechat' },
  { id: 'xibei', title: '西贝', imageUrl: '/assets/img/temp_wechet12.png', platform: 'wechat' },
  { id: 'xingkong', title: '星空下的誓言', imageUrl: '/assets/img/temp_wechet13.png', platform: 'wechat' },
  { id: 'baopiqi', title: '暴脾气小夏', imageUrl: '/assets/img/temp_wechet14.png', platform: 'wechat' },
  { id: 'herui', title: '禾芮糖唐颖', imageUrl: '/assets/img/temp_wechet15.png', platform: 'wechat' },
  { id: 'dizhonghai', title: '地中海的水不咸', imageUrl: '/assets/img/temp_wechet16.png', platform: 'wechat' }
];

// 웨이보 마케팅 사례 데이터 (중국의 트위터)
// TODO: 추후 API나 CMS에서 동적으로 가져올 예정
const weiboData: MarketingItem[] = [
  { id: '4489362324603307', title: '天生励志的朱', followers: '5473', likes: '9', comments: '5', imageUrl: '/assets/img/temp_weibo01.png', platform: 'weibo', popupUrl: 'https://weibo.cn/status/4489362324603307' },
  { id: '4487885065508492', title: '在韩土地投资', followers: '2925', likes: '7', comments: '0', imageUrl: '/assets/img/temp_weibo02.png', platform: 'weibo', popupUrl: 'https://weibo.cn/status/4487885065508492' },
  { id: '4489267193696040', title: '在韩小白白', followers: '2만', likes: '7', comments: '8', imageUrl: '/assets/img/temp_weibo03.png', platform: 'weibo', popupUrl: 'https://weibo.cn/status/4489267193696040' },
  { id: '4486688124508890', title: 'cherry泡菜酱要转运', followers: '6762', likes: '11', comments: '1', imageUrl: '/assets/img/temp_weibo04.png', platform: 'weibo', popupUrl: 'https://weibo.cn/status/4486688124508890' },
  { id: '4489016160406612', title: '韩国KOREA思密达', followers: '1.2만', likes: '6', comments: '0', imageUrl: '/assets/img/temp_weibo05.png', platform: 'weibo', popupUrl: 'https://weibo.cn/status/4489016160406612' },
  { id: '4488675473412086', title: '桃子酱suzy', followers: '8814', likes: '2', comments: '1', imageUrl: '/assets/img/temp_weibo06.png', platform: 'weibo', popupUrl: 'https://weibo.cn/status/4488675473412086' },
  { id: '4486482226095776', title: 'AEnov', followers: '1만', likes: '5', comments: '9', imageUrl: '/assets/img/temp_weibo07.png', platform: 'weibo', popupUrl: 'https://weibo.cn/status/4486482226095776' },
  { id: '4489266291564530', title: '郑舒文0926', followers: '1.5만', likes: '5', comments: '0', imageUrl: '/assets/img/temp_weibo08.png', platform: 'weibo', popupUrl: 'https://weibo.cn/status/4489266291564530' },
  { id: '4489051161672770', title: '是甜心Ooo', followers: '5만', likes: '0', comments: '0', imageUrl: '/assets/img/temp_weibo09.png', platform: 'weibo', popupUrl: 'https://weibo.cn/status/4489051161672770' }
];

// navItems 정의 (메인 페이지와 동일)
const navItems = [
  { label: '위챗 미니프로그램 쇼핑몰', href: '/' },
  { label: '중국 마케팅 사례', href: '/china-marketing' },
  { label: 'Insight', href: '/Insight' },
  { label: 'betterPoS', href: '/BetterPos' },
];

// 중국 마케팅 사례 페이지 메인 컴포넌트
export default function ChinaMarketing() {
  // 활성 탭 상태 (기본값: 샤오홍슈)
  const [activeTab, setActiveTab] = useState<'xiaohongshu' | 'wechat' | 'weibo'>('xiaohongshu');
  // 팝업 모달 열림/닫힘 상태
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // 팝업에서 보여줄 선택된 아이템
  const [selectedItem, setSelectedItem] = useState<MarketingItem | null>(null);
  // 모바일 메뉴 열림/닫힘 상태
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // 슬라이더 현재 인덱스 (0: 첫번째 이미지, 1: 두번째 이미지)
  const [currentSlide, setCurrentSlide] = useState(0);
  // 드래그 상태
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragX, setDragX] = useState(0);

  // 비주얼 이미지 데이터
  const visualImages = [
    {
      desktop: '/assets/img/img_visual01.png',
      mobile: '/assets/img/img_visual01_m.png',
      alt: '모멘티크 타임커버 쿠션 기획전'
    },
    {
      desktop: '/assets/img/img_visual02.png',
      mobile: '/assets/img/img_visual02_m.png',
      alt: '모멘티크 커버팩트 기획전'
    }
  ];

  // 맨 위로 스크롤 함수
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 자동 슬라이더 기능 (5초마다 이미지 변경)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % visualImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [visualImages.length]);

  // 슬라이드 이동 함수
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // 드래그 시작
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setDragX(0);
  };

  // 드래그 중
  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragX(clientX - startX);
  };

  // 드래그 끝
  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // 드래그 거리가 50px 이상이면 슬라이드 변경
    if (Math.abs(dragX) > 50) {
      if (dragX > 0 && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      } else if (dragX < 0 && currentSlide < visualImages.length - 1) {
        setCurrentSlide(currentSlide + 1);
      }
    }

    setDragX(0);
  };

  // 팝업 열기 함수
  const openPopup = (item: MarketingItem) => {
    setSelectedItem(item);
    setIsPopupOpen(true);
  };

  // 팝업 닫기 함수
  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedItem(null);
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
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`font-medium ${
                    item.href === '/china-marketing'
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
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
                    className={`font-medium ${
                      item.href === '/china-marketing'
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
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

      {/* 페이지 메인 콘텐츠 */}
      <div className="font-sans min-h-screen pt-24 sm:pt-28 flex flex-col bg-white dark:bg-gray-900">
        {/* 메인 히어로 섹션 - 페이지 소개 및 비주얼 */}
        <section className="bg-gray-50 dark:bg-gray-800 py-12">
          <div className="max-w-7xl mx-auto px-6">
            {/* 메인 비주얼 슬라이더 */}
            <VisualSlider
              visualImages={visualImages}
              currentSlide={currentSlide}
              isDragging={isDragging}
              dragX={dragX}
              goToSlide={goToSlide}
              handleDragStart={handleDragStart}
              handleDragMove={handleDragMove}
              handleDragEnd={handleDragEnd}
            />
          </div>
        </section>

        {/* 탭 섹션 - 플랫폼별 마케팅 사례 */}
        <section className="py-12">
          <MarketingTabs activeTab={activeTab} onTabChange={setActiveTab} />
          <MarketingGallery
            activeTab={activeTab}
            xiaohongshuData={xiaohongshuData}
            wechatData={wechatData}
            weiboData={weiboData}
            onItemClick={openPopup}
          />
        </section>

        {/* 하단 푸터 */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center space-y-4">
              <p className="text-sm leading-6">
                (주)베터코드 | 대표이사 : 안영회<br />
                contactus@bettercode.kr | 070-4334-2016<br />
                서울 강남구 테헤란로 123 여삼빌딩 스파크플러스 강남3호점 513호<br />
                사업자 등록번호 : 219-88-00316<br />
                통신판매업신고 : 2021-인천연수구-1063
              </p>

              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.facebook.com/%EB%B2%A0%ED%84%B0%EC%BD%94%EB%93%9C-%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC-1666140583448053"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Facebook 바로가기
                </a>
                <a
                  href="https://www.youtube.com/channel/UC3F-MTwEYd_gasi6HTH1nSQ/featured"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  베터코드TV 바로가기
                </a>
              </div>

              <p className="text-xs text-gray-400">
                Copyright &copy; bettercode All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>

        {/* 마케팅 사례 상세보기 팝업 모달 */}
        <PopupModal
          isOpen={isPopupOpen}
          selectedItem={selectedItem}
          onClose={closePopup}
        />
      </div>
    </>
  );
}