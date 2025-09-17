import Image from 'next/image';


export default function FeatureSection() {
    return (
        <div className="bg-yellow-50 dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-1">
                
            {/* 왼쪽 이미지 영역 */}
            <div className="w-full md:w-2/3 flex justify-center">
            <div className="w-36 sm:w-40 md:w-48 aspect-[9/20] bg-gray-300 rounded-xl relative">
                <Image 
                src="/interview.png"
                alt="리뷰화면"
                fill
                className="object-cover rounded-lg"
                />
            </div>
            </div>

                {/* 오른쪽 텍스트 영역 */}
                <div className="w-full md:w-5/7 flex flex-col justify-center text-left md:pl-0">

                    {/* 쉼표 이미지 (글씨 위) */}
                    <Image 
                        src="/icon_quotes.svg"
                        alt="쉼표"
                        width={40}
                        height={40}
                        className="mb-7"
                    />

                    <h2 className="text-lg sm:text-lg font-extrabold text-gray-900 dark:text-white mb-4">
                        미니프로그램 제작 과정 중 생기는 궁금함이나 어려움을<br />
                        실시간 CS 문의를 통해 해결합니다.<br />
                        덕분에 기술적인 문제에 대한 걱정 없이 든든한 마음으로 잘 사용 중입니다.
                    </h2>

                    <p className="text-base text-gray-600 dark:text-gray-300">
                        현재 보세구 방식으로 판매, 통관을 진행하고 있는 고객사 <br />
                        <span className="font-extrabold text-gray-600 dark:text-white">
                            머스트마스크 CEO, vini
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}