import { dialogClasses } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import LikedProductCart from '../components/LikedProductCart'

function LikedProducts() {
    const likeList = useSelector(state => state.likeList)
    
    
  return (
    <div className='container'>
      {likeList.length ? (
        likeList.map((item, index) => <LikedProductCart key={index + 1} item={item}/>)
      ) : <p className='fixed top-0 left-0 w-full h-full capitalize flex items-center font-bold text-6xl text-neutral-400 justify-center'>empty...</p>}
    </div>
  )
}

export default LikedProducts