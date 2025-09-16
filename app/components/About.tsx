import Image from 'next/image';

export default function HighlightSection() {
    return (
        <section className="bg-white py-12 md:py-20">
            <div className="max-w-6xl mx-auto px-4">
                {/* 이미지와 텍스트를 감싸는 컨테이너 (상대 위치) */}
                <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">

                    {/* 1. 배경 이미지 */}
                    <Image
                        src="/images/highlight-bg.jpg" // 원하시는 이미지 경로로 변경하세요.
                        alt="배경 이미지"
                        layout="fill"
                        objectFit="cover"
                        className="z-0"
                    />

                    {/* 2. 텍스트 가독성을 위한 어두운 오버레이 */}
                    <div className="absolute inset-0 bg-black/40 z-10" />

                    {/* 3. 텍스트와 버튼을 담는 컨테이너 (절대 위치) */}
                    <div className="absolute inset-0 z-20 flex items-center justify-between text-white p-8 sm:p-12 md:p-16">

                        {/* 왼쪽 큰 텍스트 */}
                        <div className="w-1/3 pr-4">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-left leading-2">
                                위챗<br />미니프로그램이<br />무엇인가요?
                            </h2>
                        </div>

                        {/* 오른쪽 작은 텍스트와 버튼 */}
                        <div className="w-2/3 pl-4 flex flex-col items-start text-left">
                            <p className="text-base md:text-md">
                                10억명 이상이 매일 사용하는 중국 메신저 서비스 입니다.<br />
                                별도의 결제수단 연결 필요 없이 사용자는 즉시 구매와 지불을 할 수 있습니다.<br />
                                별도로 앱을 설치하거나 로그인 할 필요 없이 미니프로그램 이름 검색,<br />
                                친구 공유기능 클릭 등의 방법으로 사용자가 이용할 수 있습니다.
                            </p>
                            <button
                                type="button"
                                className="border-1 border-color-black mt-4 px-5 py-2.5 text-black font-semibold rounded-lg text-sm hover:bg-gray-200 transition-colors duration-200"
                            >
                                자세히 알아보기 &gt;
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}