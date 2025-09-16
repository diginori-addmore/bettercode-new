import Image from 'next/image';

export default function ServiceHighlights() {
  return (
    <section id="marketing-cases" className="py-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          </h2>
          <div className="relative inline-block">
            {/* TODO: /wechat.png 이미지 추후 수정 예정 */}
            <Image
              src="/wechat.png"
              alt="WeChat Miniprogram"
              width={1200}
              height={360}
              className="mix-blend-multiply dark:mix-blend-screen"
            />
          </div>
        </div>
      </div>
    </section>
  );
}