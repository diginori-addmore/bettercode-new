import Image from 'next/image';

export default function MainBanner() {
    return (
        <div className="mt-20 mb-20 w-full max-w-6xl overflow-hidden">
            <div className="flex justify-center px-4">
                <div className="relative w-full max-w-4xl h-80 sm:h-96 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden bg-white dark:bg-gray-800 flex items-center justify-center">
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