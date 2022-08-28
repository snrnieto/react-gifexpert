import React from 'react'
import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChanged = (event)=>{
        setInputValue(event.target.value)
    }

    const onSubmit = (event)=>{
        event.preventDefault();
      
        if(inputValue.trim().length<=1)return;
        
        // setCategories(categories=>[...categories,inputValue])
        onNewCategory(inputValue.trim())
        setInputValue("")
    }

  return (
    <form onSubmit={(event)=>onSubmit(event)}>
            <input type="text"
        placeholder='Buscar gifs'
    value={inputValue}
    // onChange={(event)=>onInputChanged(event)}
    onChange={onInputChanged}
    />
    </form>

  )
}
