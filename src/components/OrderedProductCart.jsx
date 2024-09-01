import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from 'react-redux';
import { DECREASE_AMOUNT, DELETE_PRODUCT_ORDERED, INCREASE_AMOUNT } from '../redux/types';


function OrderedProductCart({item}) {
  const dispatch = useDispatch()
  return (
    <div
    className="bg-neutral-400 rounded-md p-5 flex items-center w-full justify-between"
  >
    <div className="bg-white rounded-lg">
      <img src={item.images[0]} width={100} alt="" />
    </div>
    <div className="flex items-center px-2 bg-white rounded-md overflow-hidden">
      <RemoveIcon onClick={() => dispatch({type: DECREASE_AMOUNT, payload: item})} className="hover:bg-black/10 cursor-pointer rounded active:bg-black/30" />
      <p className="p-2">{item.amount}</p>
      <AddIcon
        onClick={() =>
          dispatch({ type: INCREASE_AMOUNT, payload: item })
        }
        className="hover:bg-black/10 cursor-pointer rounded active:bg-black/30"
      />
    </div>
    <div className="flex flex-col items-end text-white">
      <h1 className="font-medium">{item.title}</h1>
      <p className="font-medium text-2xl">${item.price}</p>
    </div>

    <div onClick={() => dispatch({type: DELETE_PRODUCT_ORDERED, payload:item.id})} className="p-1 rounded bg-rose-500 text-white cursor-pointer hover:bg-red-700">
    <DeleteIcon/>
    </div>
  </div>
  )
}

export default OrderedProductCart