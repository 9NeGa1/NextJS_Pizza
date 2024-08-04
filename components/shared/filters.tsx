"use client";
import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {

  const {ingredients} = useFilterIngredients();

  const items = ingredients.map(({id, name}) => ({value: String(id), text: name}))

  return (
    <div className={className}>
      <Title text="Фильтрация" size='sm' className='mb-5 font-bold'/>
      
      <div className='flex gap-4 flex-col'>
        <FilterCheckbox text="Можно собирать" value='1'/>
        <FilterCheckbox text="Новинки" value='2'/>
      </div>


      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <p className='font-bold mb-3'>Цена от и до:</p>
        <div className='flex mb-5 gap-3'>
            <Input type='number' placeholder='0' min={0} max={1000} defaultValue={0}/>
            <Input type='number' placeholder='1000' min={100} max={1000}/>  
        </div>

        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]}/>
      </div>
      <CheckboxFiltersGroup title={'Ингридиенты'}
      className='mt-5'
      limit={6}
      defaultItems={items.slice(0, 6)}
      items={items}
      
      />
      
    </div>
  );
};