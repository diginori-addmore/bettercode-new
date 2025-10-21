"use client";

import { useRouter } from 'next/navigation';

export default function ContactButton() {
    const router = useRouter();
    
    const handleContactClick = () => {
        router.push('/contact');
    };

    return (
        <button
            onClick={handleContactClick}
            className="px-20 py-4 bg-blue-600 text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-500 transition-all duration-300"
        >
            문의하기
        </button>
    );
}