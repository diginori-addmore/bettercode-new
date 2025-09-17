import Image from 'next/image';

interface ContentItem {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
}

interface AlternatingContentSectionProps {
    data: ContentItem[]; // 표시할 콘텐츠 아이템들의 배열
}

export default function AlternatingContentSection({ data }: AlternatingContentSectionProps) {
    return (
        <section className="bg-gray-100 py-16 md:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-4 lg:px-4">
                {data.map((item, index) => (
                    <div
                        key={item.id}
                        className={`flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-20 ${index % 2 === 1 ? 'md:flex-row-reverse' : '' // 홀수 인덱스일 때 좌우 반전
                            } mb-20 md:mb-28 last:mb-0`} // 마지막 요소는 하단 마진 없음
                    >
                        {/* 텍스트 컨테이너 */}
                        <div className="w-full md:w-1/2 text-left">
                            <h2 className="text-2xl whitespace-pre-line sm:text-3xl font-bold text-gray-900 leading-tight mb-4">
                                {item.title}
                            </h2>
                            <p className="text-lg whitespace-pre-line text-gray-700 leading-relaxed">
                                {item.description}
                            </p>
                        </div>

                        {/* 이미지 컨테이너 */}
                        <div className="w-full md:w-1/2">
                            <Image
                                src={item.imageUrl}
                                alt={item.imageAlt}
                                width={550} // 적절한 width/height 값으로 변경하세요
                                height={400} // 이미지 비율에 맞게 조절
                                layout="responsive" // 반응형 이미지
                                objectFit="cover" // 이미지가 컨테이너를 덮도록
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}