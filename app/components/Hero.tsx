"use client";

import Image from 'next/image';
import { useState } from 'react';

// 예시 이미지들 (실제 이미지 경로로 변경해주세요!)
const phoneImages = [
    '/phone-mockup-1.png',
    '/phone-mockup-2.png',
    '/phone-mockup-3.png',
    '/phone-mockup-4.png',
    '/phone-mockup-5.png',
];

export default function HomePageContent() {
    // 문의하기 버튼 클릭 시의 동작을 처리할 수 있습니다. (예: 팝업 열기, 페이지 이동 등)
    const handleContactClick = () => {
        alert('문의하기 버튼이 클릭되었습니다!');
        // 실제로는 여기에 문의 폼을 열거나, 특정 문의 페이지로 이동하는 로직을 추가합니다.
    };

    return (
        <div className="min-h-screen bg-blue-100 dark:bg-gray-900 flex flex-col items-center justify-center p-4">
            {/* 상단 중앙 큰 텍스트 */}
            <h1 className="text-3xl md:text-5xl font-extrabold text-black dark:text-white text-center pt-20 mt-4 mb-4 leading-tight">
                중국 소비자를 위한<br /> 분양형 미니프로그램 쇼핑몰
            </h1>

            {/* 그 밑 작은 텍스트 */}
            <p className="text-lg md:text-lg text-gray-800 dark:text-white text-center max-w-2xl mb-10">
                손쉽게 위챗 미니프로그램 기반 쇼핑몰 개설 및 판매까지 <br />원스톱으로 자유를 제공하는 플랫폼을 경험하세요.
            </p>

            {/* 문의하기 버튼 */}
            <button
                onClick={handleContactClick}
                className="px-20 py-4 bg-blue-600 text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-500 transition-all duration-300"
            >
                문의하기
            </button>

            {/* 가로로 나열된 휴대폰 이미지 5개 */}
            <div className="mt-20 mb-20 w-full max-w-6xl overflow-hidden">
                <div className="flex justify-center md:justify-around flex-wrap gap-8 px-4">
                    {phoneImages.map((src, index) => (
                        <div
                            key={index}
                            className="relative w-40 h-80 sm:w-48 sm:h-96 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden bg-white dark:bg-gray-800 flex items-center justify-center" // 이미지의 테두리 및 배경색
                        >
                            <Image
                                src={src}
                                alt={`Phone Mockup ${index + 1}`}
                                fill // 부모 div 크기에 맞게 채움
                                style={{ objectFit: 'contain' }} // 이미지가 잘리지 않고 div 안에 포함되도록
                                className="p-2" // 이미지와 테두리 사이에 약간의 여백
                                priority={index < 3} // 처음 3개 이미지는 로딩 우선순위를 높임
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}