export default function HeroTitle() {
    return (
        <>
            {/* 상단 중앙 큰 텍스트 */}
            <h1 className="text-2xl md:text-5xl font-extrabold text-black dark:text-white text-center pt-20 mt-4 mb-4 leading-tight">
                중국 소비자를 위한<br /> 분양형 미니프로그램 쇼핑몰
            </h1>

            {/* 그 밑 작은 텍스트 */}
            <p className="text-sm md:text-lg text-gray-800 dark:text-white text-center max-w-2xl mb-10">
                손쉽게 위챗 미니프로그램 기반 쇼핑몰 개설 및 판매까지 <br />원스톱으로 자유를 제공하는 플랫폼을 경험하세요.
            </p>
        </>
    );
}