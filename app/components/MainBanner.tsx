import Image from 'next/image';

export default function MainBanner() {
    return (
        <div className="mt-2 md:mt-20 mb-2 md:mb-20 w-full max-w-6xl overflow-hidden">
            <div className="flex justify-center px-4">
                <div className="relative w-full max-w-4xl h-60 md:h-80 rounded-2xl shadow-xl flex items-center justify-center">
                    <Image
                        src="/main_banner.png"
                        alt="Main Banner"
                        fill
                        style={{ objectFit: 'contain' }}
                        className="p-2"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}