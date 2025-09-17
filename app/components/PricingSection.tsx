import Image from 'next/image';
import CheckIcon from './CheckIcon';
import XIcon from './XIcon';

export default function PricingSection() {
    return (
        <section
            className="py-16 md:py-24 text-white"
            style={{
                // 배경 그라데이션 (원하시는 색상으로 변경하세요)
                background: 'linear-gradient(to bottom right, #ffffff, #e1e5f1, #c58fbd)', // 예시: 보라색 계열 그라데이션
            }}
        >
            <div className="max-w-6xl mx-auto px-4 text-center">
                {/* 중앙 상단 제목 */}
                <h2 className="text-2xl md:text-4xl font-extrabold text-black mb-12">
                    상점 개설 절차
                </h2>

                {/* 커다란 사진 (중앙 배치) */}
                <div className="mb-20">
                    <Image
                        src="/process.svg" // 실제 이미지 경로로 변경하세요
                        alt="상점 개설 절차"
                        width={1000} // 이미지의 실제 또는 원하는 너비
                        height={400} // 이미지의 실제 또는 원하는 높이
                        layout="responsive" // 반응형으로 너비에 맞게 조절
                        objectFit="contain" // 이미지가 잘리지 않도록
                        className="mx-auto rounded-lg shadow-xl" // 중앙 정렬 및 그림자, 둥근 모서리
                    />
                </div>

                {/* 요금제 제목 */}
                <h3 className="text-xl md:text-4xl font-lg text-black mb-3 md:mb-16">
                    요금제
                </h3>

                {/* 두 개의 요금제 박스 (좌우 배치) */}
                <div className="flex flex-col lg:flex-row justify-center gap-8 mb-20">
                    {/* 첫 번째 요금제 박스 */}
                    <div className="bg-white/50 backdrop-blur-sm rounded-lg shadow-xl p-8 flex flex-col items-center w-full lg:w-1/2 max-w-lg">
                        <p className="text-sm md:text-lg font-extrabold text-gray-800 mb-2">쇼핑몰 서비스</p>
                        <h4 className="text-2xl md:text-4xl font-extrabold text-blue-600 mb-4">월 8만원</h4>
                        <p className="text-xs md:text-sm text-gray-600 mb-3">/ 1년 계약 시 50%<br />할인</p>

                        <hr className="border-gray-400/50 w-full mb-5" />

                        <div className="flex flex-col px-8 items-start w-full">
                            <div className="flex items-center mb-4">
                                <CheckIcon className="text-blue-500 mr-3" />
                                <p className="text-black text-sm text-left">위챗 미니프로그램 기반 쇼핑몰</p>
                            </div>
                            <div className="flex items-center mb-4">
                                <CheckIcon className="text-blue-500 mr-3" />
                                <p className="text-black text-sm text-left">PC 웹 쇼핑몰</p>
                            </div>
                            <div className="flex items-center mb-4">
                                <CheckIcon className="text-blue-500 mr-3" />
                                <p className="text-black text-sm text-left">제품 등록 및 주문 등 관리를 위한 웹 기반 관리도구</p>
                            </div>
                            <div className="flex items-center mb-4">
                                <CheckIcon className="text-blue-500 mr-3" />
                                <p className="text-black text-sm text-left">한국 내 위챗 지불을 지원하는 3개 PG사와 지불 연동</p>
                            </div>
                            <div className="flex items-center mb-4">
                                <XIcon className="text-gray-500 mr-3" />
                                <p className="text-gray-400 text-sm text-left">기본 패키지에는 콰징 통관 미제공</p>
                            </div>
                        </div>
                    </div>

                    {/* 두 번째 요금제 박스 */}
                    <div className="bg-white/50 backdrop-blur-sm rounded-lg shadow-xl p-8 flex flex-col items-center w-full lg:w-1/2 max-w-lg">
                        <p className="text-sm md:text-lg font-extrabold text-gray-800 mb-2">지원 서비스</p>
                        <h4 className="text-2xl md:text-4xl font-extrabold text-blue-600 mb-4">50만원</h4>
                        <p className="text-xs md:text-sm text-gray-600 mb-8">/ 일회성 </p>

                        <hr className="border-gray-400/50 w-full mb-5" />

                        <div className="flex flex-col items-start w-full">
                            <div className="flex items-center mb-4">
                                <CheckIcon className="text-blue-500 mr-3" />
                                <p className="text-black text-sm text-left">위챗 미니프로그램 계정 개설 대행</p>
                            </div>
                            <div className="flex items-center mb-4">
                                <CheckIcon className="text-blue-500 mr-3" />
                                <p className="text-black text-sm text-left">초기 상품 정보 업로드 (1회)</p>
                            </div>
                            <div className="flex items-center mb-4">
                                <CheckIcon className="text-blue-500 mr-3" />
                                <p className="text-black text-sm text-left">초기 미니프로그램 메인 페이지 디자인 (1회)</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 하단 CTA 영역 */}
                <p className="text-2xl md:text-5xl font-semibold text-black mb-6">
                    중국 소비자를 위한<br />분양형 미니프로그램 쇼핑몰
                </p>
                <p className="text-base text-sm md:text-lg text-gray-500 mb-8">
                    손쉽게 위챗 미니프로그램 기반 쇼핑몰 개설 및 판매까지<br />원스톱으로 자유를 제공하는 플랫폼을 경험하세요.
                </p>
                <button
                    type="button"
                    className="px-24 py-4 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200"
                >
                    문의하기
                </button>
            </div>
        </section>
    );
}