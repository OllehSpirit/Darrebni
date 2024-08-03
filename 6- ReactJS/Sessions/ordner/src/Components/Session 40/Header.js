import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
        <Link to={'/session36'} style={{color:'black',cursor:'pointer',textDecoration:'none', marginRight:'10px'}}>USER</Link>
        <Link to={'session40'} style={{color:'black',cursor:'pointer',textDecoration:'none', marginRight:'10px'}}>Task</Link>
        <Outlet/>
    </>
  )
}
