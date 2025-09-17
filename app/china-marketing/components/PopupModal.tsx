"use client";

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

interface PopupModalProps {
  isOpen: boolean;
  selectedItem: MarketingItem | null;
  onClose: () => void;
}

export default function PopupModal({ isOpen, selectedItem, onClose }: PopupModalProps) {
  if (!isOpen || !selectedItem) return null;

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const renderContent = () => {
    if (selectedItem.platform === 'xiaohongshu') {
      const xiaohongshuUrl = `https://www.xiaohongshu.com/discovery/item/${selectedItem.id}?apptime=1585747249&appuid=595667a350c4b40153cb9370&xhsshare=CopyLink`;

      return (
        <iframe
          src={xiaohongshuUrl}
          className="w-full h-96 border-0 rounded-lg"
          title={`샤오홍슈 포스트: ${selectedItem.title}`}
        />
      );
    } else if (selectedItem.platform === 'wechat') {
      return (
        <div className="flex flex-col items-center p-8">
          <Image
            src={selectedItem.imageUrl}
            alt={selectedItem.title}
            width={400}
            height={300}
            style={{ objectFit: 'contain' }}
            className="rounded-lg"
          />
          <h3 className="text-xl font-bold mt-4 text-center">{selectedItem.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2 text-center">
            위챗 마케팅 사례
          </p>
        </div>
      );
    } else if (selectedItem.platform === 'weibo' && selectedItem.popupUrl) {
      return (
        <iframe
          src={selectedItem.popupUrl}
          className="w-full h-96 border-0 rounded-lg"
          title={`웨이보 포스트: ${selectedItem.title}`}
        />
      );
    }

    return (
      <div className="flex flex-col items-center p-8">
        <Image
          src={selectedItem.imageUrl}
          alt={selectedItem.title}
          width={400}
          height={300}
          style={{ objectFit: 'contain' }}
          className="rounded-lg"
        />
        <h3 className="text-xl font-bold mt-4 text-center">{selectedItem.title}</h3>
      </div>
    );
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackgroundClick}
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            {selectedItem.title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-2xl font-bold"
            aria-label="팝업 닫기"
          >
            ×
          </button>
        </div>

        <div className="overflow-auto max-h-[calc(90vh-4rem)]">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}