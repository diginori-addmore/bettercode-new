import Image from "next/image";

// 데이터 구조를 이미지, 제목, 설명을 포함하는 객체 배열로 변경
const clients = [
  {
    src: "/clients/client_1.png",
    title: "诗贝柯直邮",
    description: "셀픽중국",
  },
  {
    src: "/clients/client_2.png",
    title: "诗贝柯",
    description: "셀픽코리아",
  },
  {
    src: "/clients/client_3.png",
    title: "MUSTMASK",
    description: "셀픽중국",
  },
  {
    src: "/clients/client_4.png",
    title: "购物情节",
    description: "쇼핑스토리",
  },
  {
    src: "/clients/client_5.png",
    title: "二元海淘",
    description: "\n얼위안 하이타오",
  },
  {
    src: "/clients/client_6.png",
    title: "株式会社伊安\n药妆护肤",
    description: "더이안",
  },
  {
    src: "/clients/client_7.png",
    title: "可纳店KONA\nMALL",
    description: "더코나",
  },
  {
    src: "/clients/client_8.png",
    title: "ZAKSIMLAB",
    description: "\n작심랩",
  },
];

export default function Clients() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold mb-12">고객사</h2>

        {/* 4x2 그리드를 만들기 위해 두 개의 행으로 나눔 */}
        <div className="space-y-8">
          {/* 첫 번째 행 (아이템 4개) */}
          <div className="flex justify-center items-start">
            {clients.slice(0, 4).map((client, index) => (
              <div
                key={client.title}
                className={`flex flex-col mx-3 md:mx-8 items-center w-40 ${index > 0 ? "-ml-1" : "" // 첫 아이템 제외하고 왼쪽으로 겹치기
                  }`}
              >
                <Image
                  src={client.src}
                  alt={client.title}
                  width={140}
                  height={140}
                  className="object-contain"
                />
                <h3 className="whitespace-pre-line font-bold mt-4 text-sm md:text-xl text-gray-800">{client.title}</h3>
                <p className="text-xs md:text-sm mt-2 text-black">{client.description}</p>
              </div>
            ))}
          </div>

          {/* 두 번째 행 (아이템 4개) */}
          <div className="flex justify-center items-start">
            {clients.slice(4, 8).map((client, index) => (
              <div
                key={client.title}
                className={`flex flex-col mx-3 md:mx-8 items-center w-40 ${index > 0 ? "-ml-1" : ""
                  }`}
              >
                <Image
                  src={client.src}
                  alt={client.title}
                  width={140}
                  height={140}
                  className="object-contain"
                />
                <h3 className="whitespace-pre-line font-bold mt-4 text-sm md:text-xl text-gray-800 whitespace">{client.title}</h3>
                <p className="whitespace-pre-line text-xs md:text-sm mt-2 text-black">{client.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* 하단 부가 설명 */}
        <p className="mt-16 text-gray-400 text-sm md:text-lg">
          *위챗으로 스캔하거나 모바일 브라우저에서<br className="md:hidden" />큐알이미지를 클릭하세요.
        </p>
      </div>
    </section>
  );
}