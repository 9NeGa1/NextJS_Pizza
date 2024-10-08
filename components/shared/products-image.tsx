import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

interface Props {
  className?: string;
  src: string;
  alt: string;
  size: 20 | 30 | 40;
}

export const ProductImage: React.FC<Props> = ({ src, className, alt, size }) => {

  const sizeStore = {
    20: 300,
    30: 400,
    40: 500,  
  }
  return (
    <div className={cn("relative flex justify-center items-center flex-1 w-full", className)}>
      <Image alt={alt} src={src} width={sizeStore[size]} height={sizeStore[size]} className={cn(
        "relative left-2 top-2 transition-all z-10 duration-300"
      )}/>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-200 w-[450px] h-[450px]" />
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dotted border-2 rounded-full border-gray-100 w-[370px] h-[370px]" />
    
    </div>
  );
};