import React, { useState } from 'react';
import { AddCategory,GiftGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One punch'])

  const onAddCategory = (newCategory) => {
    console.log(newCategory)
    if (categories.includes(newCategory)) return;
    setCategories([newCategory,...categories])

    // setCategories(cat=>[...cat,'Valorant'])
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        onNewCategory={onAddCategory}
      />
      {
        categories.map((category) =>
        (
          <GiftGrid key={category} category={category} />
        )
        )
      }
    </>
  )
}   
