import Image from 'next/image';

export default function ServiceHighlights() {
  return (
    <section id="marketing-cases" className="py-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          </h2>
          <div className="relative inline-block">
            <Image
              src="/wechat.png"
              alt="WeChat Miniprogram"
              width={1200}
              height={360}
              className="mix-blend-multiply dark:mix-blend-screen"
            />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          서비스 특징
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">클라우드 기반 구독 모델</h3>
            <p className="text-gray-600 dark:text-gray-300">안정적이고 확장 가능한 서비스</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">한국 은행 계좌 연동</h3>
            <p className="text-gray-600 dark:text-gray-300">편리한 정산 시스템</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">한국 개발팀</h3>
            <p className="text-gray-600 dark:text-gray-300">빠른 소통과 지원</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">통관 대행 서비스</h3>
            <p className="text-gray-600 dark:text-gray-300">원스톱 물류 솔루션</p>
          </div>
        </div>
      </div>
    </section>
  );
}