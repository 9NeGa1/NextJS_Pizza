"use client";
import React, { useEffect } from 'react';
import { Title } from './title';
import { cn } from '@/lib/utils';
import { ProductCard } from './product-card';
import {useIntersection} from "react-use";
import { useCategoryStore } from '@/store/category';

interface Props {
    title: string;
  className?: string;
  items: any[];
  listClassName?: string;
  categoryId: number;
}

export const ProuctsGroupList: React.FC<Props> = ({
  title,
  className,
  items,
  listClassName,
  categoryId,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)

  const intersectionRef = React.useRef(null);

  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4
  })

  useEffect(() => {
    if(intersection && intersection.isIntersecting) {
      setActiveCategoryId(categoryId)
  }}, [intersection?.isIntersecting])


  return (
    <div ref={intersectionRef} id={title} className={className}>
      <Title text={title} size='lg' className='font-extrabold mb-5'/>
      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}

          />
        ))}
      </div>
    </div>
  );
};