import React from 'react'
import { useSelector } from 'react-redux'
import SavedProductCart from '../components/SavedProductCart'

function SavedProducts() {
  const savedProduct = useSelector(state => state.savedProduct)
  
  return (
    <div className='container my-10'>
      {savedProduct.length ? (
        savedProduct.map((item, index) => <SavedProductCart key={index + 1} item={item}/>)
      ) : <p className='fixed top-0 left-0 w-full h-full capitalize flex items-center font-bold text-6xl text-neutral-400 justify-center'>empty...</p>}
    </div>
  )
}

export default SavedProducts