"use client";

import Image from "next/image";

interface VisualImage {
  desktop: string;
  mobile: string;
  alt: string;
}

interface VisualSliderProps {
  visualImages: VisualImage[];
  currentSlide: number;
  isDragging: boolean;
  dragX: number;
  goToSlide: (index: number) => void;
  handleDragStart: (e: React.MouseEvent | React.TouchEvent) => void;
  handleDragMove: (e: React.MouseEvent | React.TouchEvent) => void;
  handleDragEnd: () => void;
}

export default function VisualSlider({
  visualImages,
  currentSlide,
  isDragging,
  dragX,
  goToSlide,
  handleDragStart,
  handleDragMove,
  handleDragEnd
}: VisualSliderProps) {
  return (
    <div
      className="relative w-full mb-8 overflow-hidden rounded-lg cursor-grab active:cursor-grabbing"
      style={{ aspectRatio: '16/9' }}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      {/* 슬라이더 이미지들 */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{
          transform: `translateX(calc(-${currentSlide * 100}% + ${isDragging ? dragX : 0}px))`,
          transition: isDragging ? 'none' : 'transform 0.5s ease-in-out'
        }}
      >
        {visualImages.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            {/* 데스크톱용 이미지 */}
            <Image
              src={image.desktop}
              alt={image.alt}
              fill
              style={{ objectFit: 'contain' }}
              priority={index === 0}
              draggable={false}
              className="hidden md:block"
            />
            {/* 모바일용 이미지 */}
            <Image
              src={image.mobile}
              alt={image.alt}
              fill
              style={{ objectFit: 'contain' }}
              priority={index === 0}
              draggable={false}
              className="block md:hidden"
            />
          </div>
        ))}
      </div>

      {/* 슬라이더 인디케이터 (점) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {visualImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index
                ? 'bg-white'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`슬라이드 ${index + 1}로 이동`}
          />
        ))}
      </div>

      {/* 슬라이더 카운터 */}
      <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
        {currentSlide + 1} / {visualImages.length}
      </div>
    </div>
  );
}