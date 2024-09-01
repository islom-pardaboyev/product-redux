import React from 'react'
import { useSelector } from 'react-redux'
import SavedProductCart from '../components/SavedProductCart'

function SavedProducts() {
  const savedProduct = useSelector(state => state.savedProduct)
  
  return (
    <section className="mt-10">
      <div className="container">
        <div className="flex justify-between flex-wrap gap-5">
          {savedProduct.length ? (
            savedProduct.map(item => <SavedProductCart key={item.id} item={item} />)
          ) : <p className="fixed top-0 left-0 w-full h-full capitalize flex items-center font-bold text-6xl text-neutral-400 justify-center">
          empty...
        </p>}
        </div>
      </div>
    </section>
  )
}

export default SavedProducts