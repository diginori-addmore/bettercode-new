import Image from 'next/image';

// 박스에 들어갈 데이터 (아이콘/이미지 경로, 제목, 설명)
const featureBoxes = [
    {
        icon: '/Mainfunction/function_icon1.svg',
        title: '상품관리',
        description: '카테고리, 브랜드별 상품등록 가능 상품 단위별로 조합한 세트상품 제작 가능',
    },
    {
        icon: '/Mainfunction/function_icon2.svg',
        title: '위챗지불',
        description: '중국 소비자에게 친숙한 위챗 지불을 한국 계좌로 받을 수 있는 PG연동',
    },
    {
        icon: '/Mainfunction/function_icon3.svg',
        title: '손쉬운 상점 디자인',
        description: '웹 관리화면에서 쉽게 메인페이지 및 이벤트 페이지 생성 및 디자인',
    },
];

export default function FeatureSection() {
    return (
        // 전체 페이지 컨테이너: 흰 배경, 다크 모드 시 어두운 배경
        // py-20: 상하 패딩으로 네비게이션바 등과 여백 확보
        <div className="bg-white dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-20">
            <div className="max-w-7xl mx-auto text-center">

                <h2 className="text-xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                    중국 소비자 판매를 위한<br className="md:hidden" />기본 쇼핑몰 기능 제공
                </h2>


                <p className="text-sm md:text-xl text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto">
                    상점 디자인, 상품관리, 주문관리, 쿠폰기능, 지불결제 등<br />쇼핑몰에 필요한 기능을 갖춘 웹 관리도구를 제공합니다.
                </p>
                <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 dark:text-white mb-4">
                    핵심기능
                </h2>

                {/* 가로로 나열된 박스 3개 컨테이너 */}
                {/* gap-8: 박스들 간의 간격, lg:flex-nowrap: lg 이상에서 줄바꿈 없이 나열 */}
                {/* flex-wrap: 작은 화면에서 박스가 넘치면 다음 줄로 이동 */}
                <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8">
                    {featureBoxes.map((box, index) => (
                        // 개별 박스
                        <div
                            key={index}
                            className="w-full lg:w-1/3 p-8 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-start text-left hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* 아이콘/이미지 */}
                            <div className="mb-6">
                                <Image
                                    src={box.icon}
                                    alt={box.title}
                                    width={64} // 아이콘/이미지 크기
                                    height={64}
                                    className="object-contain"
                                />
                            </div>

                            {/* 좌측 정렬 제목 */}
                            <h3 className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                {box.title}
                            </h3>

                            {/* 좌측 정렬 설명 */}
                            <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                                {box.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}