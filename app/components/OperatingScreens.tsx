"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function OperatingScreens() {
  const [activeScreen, setActiveScreen] = useState('miniprogram');

  return (
    <section id="operating-screens" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            실제 운영 화면
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            미니프로그램과 관리자 화면을 확인해보세요
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveScreen('miniprogram')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all ${
              activeScreen === 'miniprogram'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
            }`}
          >
            미니프로그램 화면
          </button>
          <button
            onClick={() => setActiveScreen('admin')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all ${
              activeScreen === 'admin'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
            }`}
          >
            관리자 화면
          </button>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl h-96 bg-white dark:bg-gray-700 rounded-xl shadow-xl overflow-hidden">
            {activeScreen === 'miniprogram' ? (
              <div className="w-full h-full flex items-center justify-center p-8">
                {/* TODO: 실제 미니프로그램 스크린샷 이미지로 교체 */}
                <div className="text-center">
                  <div className="w-48 h-80 bg-gray-200 dark:bg-gray-600 rounded-3xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400">미니프로그램 이미지</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">위챗 미니프로그램 실제 화면</p>
                </div>
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center p-8">
                {/* TODO: 실제 관리자 화면 스크린샷 이미지로 교체 */}
                <div className="text-center">
                  <div className="w-full h-64 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400">관리자 화면 이미지</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mt-4">웹 관리자 화면</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}