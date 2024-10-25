import { useDispatch } from 'react-redux'
import { product } from '../CONSTANTS/types'
import styles from '../styles/cardProduct.module.css'
import { addToCart } from '../lib/slices/cartSlice'
import { Link } from 'react-router-dom'
import { deleteProduct } from '../api/products'
import { useState } from 'react'

export default function CardProduct({ product }: { product: product }) {

  const dispatch = useDispatch()
  const [add, setAdd] = useState('Add To Cart')

  return (
    <div className={`flex items-center justify-evenly ${styles.container}`}>

      <img src={product.image} alt={product.title} style={{ width: '35%', height: '80%', borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px' }} />

      <div className='flex flex-col flex-wrap justify-evenly items-center gap-5'>

        <div className='font-bold'>{product.title}</div>
        <div className={styles.description}>{product.description}</div>

        <div className='flex gap-5 items-center'>
          <div>{product.price} $</div>
          <div className={`cursor-pointer px-2 py-1 rounded-md  ${styles.addToCart}`} onClick={() => {setAdd('Added');dispatch(addToCart(product));setTimeout(()=>{setAdd('Add To Cart')},1000)}}>{add}</div>
        </div>


      </div>

      <div className='flex flex-col gap-5' style={{ width: '1.5vw' }}>
        <Link to={`/${product.id}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#2196f3" d="m14.06 9.02l.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"></path></svg>
        </Link>
        <svg onClick={() => deleteProduct(product.id)} className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#d20000" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"></path></svg>
      </div>
    </div>
  )
}

