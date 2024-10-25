import { useSelector } from "react-redux"
import { RootState } from "../lib/store"
import { Link, Outlet } from "react-router-dom"

export default function Header() {

  const cart = useSelector((state: RootState) => state.reducers.cart)

  return (
    <>
      <div className="flex justify-between px-28 py-5 text-white" style={{backgroundColor:'var(--primary)',boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
        <Link to={'/'}>E-Commerce</Link>
        <Link to={'/cart'}>Cart ( {cart.length} )</Link>
      </div>
      <Outlet />
    </>
  )
}
