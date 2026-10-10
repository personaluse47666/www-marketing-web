import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ size = 'md', className = '' }) => {
  const sizeMap = {
    sm: 'h-8',
    md: 'h-10 sm:h-12',
    lg: 'h-12 sm:h-14',
    xl: 'h-16 sm:h-20',
  };

  return (
    <div
      className={`inline-flex items-center justify-center rounded-lg bg-white px-2 py-1 shadow-md shadow-black/30 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#3D5AFE]/25 select-none ${className}`}
    >
      <img
        src="/logo.png"
        alt="WEST WARD WORKS"
        className={`${sizeMap[size]} w-auto object-contain`}
        draggable={false}
      />
    </div>
  );
};
