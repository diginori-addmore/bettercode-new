"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function OperatingScreens() {
  const [activeScreen, setActiveScreen] = useState('miniprogram');

  return (
    <section id="operating-screens" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            실제 운영 화면
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            미니프로그램과 관리자 화면을 확인해보세요
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-1 md:mb-8">
          <button
            onClick={() => setActiveScreen('miniprogram')}
            className={`px-6 py-2 rounded-3xl font-semibold transition-all ${activeScreen === 'miniprogram'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
          >
            미니프로그램 화면
          </button>
          <button
            onClick={() => setActiveScreen('admin')}
            className={`px-6 py-2 rounded-3xl font-semibold transition-all ${activeScreen === 'admin'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
          >
            관리자 화면
          </button>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl h-60 md:h-96">
            {activeScreen === 'miniprogram' ? (
              <Image
                src="/mini_app_image.png"
                alt="위챗 미니프로그램 실제 화면"
                fill
                style={{ objectFit: 'contain' }}
              />
            ) : (
              <Image
                src="/admin_image.png"
                alt="웹 관리자 화면"
                fill
                style={{ objectFit: 'contain' }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}