"use client";

import { useState } from "react";

interface MarketingTabsProps {
  activeTab: 'xiaohongshu' | 'wechat' | 'weibo';
  onTabChange: (tab: 'xiaohongshu' | 'wechat' | 'weibo') => void;
}

export default function MarketingTabs({ activeTab, onTabChange }: MarketingTabsProps) {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-center mb-8">
        <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
          <button
            onClick={() => onTabChange('xiaohongshu')}
            className={`px-6 py-3 rounded-md font-semibold transition-all ${
              activeTab === 'xiaohongshu'
                ? 'bg-white dark:bg-gray-600 text-blue-600 shadow-md'
                : 'text-gray-600 dark:text-gray-300 hover:text-blue-600'
            }`}
          >
            샤오홍슈
          </button>
          <button
            onClick={() => onTabChange('wechat')}
            className={`px-6 py-3 rounded-md font-semibold transition-all ${
              activeTab === 'wechat'
                ? 'bg-white dark:bg-gray-600 text-blue-600 shadow-md'
                : 'text-gray-600 dark:text-gray-300 hover:text-blue-600'
            }`}
          >
            위챗
          </button>
          <button
            onClick={() => onTabChange('weibo')}
            className={`px-6 py-3 rounded-md font-semibold transition-all ${
              activeTab === 'weibo'
                ? 'bg-white dark:bg-gray-600 text-blue-600 shadow-md'
                : 'text-gray-600 dark:text-gray-300 hover:text-blue-600'
            }`}
          >
            웨이보
          </button>
        </div>
      </div>
    </div>
  );
}