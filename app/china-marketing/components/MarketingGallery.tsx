"use client";

import { useState } from "react";
import Image from "next/image";

interface MarketingItem {
  id: string;
  title: string;
  followers?: string;
  likes?: string;
  comments?: string;
  imageUrl: string;
  platform: 'xiaohongshu' | 'wechat' | 'weibo';
  popupUrl?: string;
}

interface MarketingGalleryProps {
  activeTab: 'xiaohongshu' | 'wechat' | 'weibo';
  xiaohongshuData: MarketingItem[];
  wechatData: MarketingItem[];
  weiboData: MarketingItem[];
  onItemClick: (item: MarketingItem) => void;
}

export default function MarketingGallery({
  activeTab,
  xiaohongshuData,
  wechatData,
  weiboData,
  onItemClick
}: MarketingGalleryProps) {
  const getCurrentData = () => {
    switch (activeTab) {
      case 'xiaohongshu': return xiaohongshuData;
      case 'wechat': return wechatData;
      case 'weibo': return weiboData;
      default: return [];
    }
  };

  const currentData = getCurrentData();

  const renderItemStats = (item: MarketingItem) => {
    if (activeTab === 'xiaohongshu' || activeTab === 'weibo') {
      return (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-white">
          <h3 className="font-semibold text-sm mb-1 truncate">{item.title}</h3>
          <div className="flex items-center gap-3 text-xs">
            {item.followers && <span>👥 {item.followers}</span>}
            {item.likes && <span>❤️ {item.likes}</span>}
            {item.comments && <span>💬 {item.comments}</span>}
          </div>
        </div>
      );
    } else if (activeTab === 'wechat') {
      return (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-white">
          <h3 className="font-semibold text-sm truncate">{item.title}</h3>
        </div>
      );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 mb-16">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {currentData.map((item) => (
          <div
            key={item.id}
            className="relative aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={() => onItemClick(item)}
          >
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              style={{ objectFit: 'cover' }}
              className="hover:opacity-90 transition-opacity"
            />
            {renderItemStats(item)}
          </div>
        ))}
      </div>

      {currentData.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            해당 플랫폼의 마케팅 사례가 준비 중입니다.
          </p>
        </div>
      )}
    </div>
  );
}