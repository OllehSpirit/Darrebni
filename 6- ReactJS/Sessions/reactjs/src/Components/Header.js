import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
        <Link to={'/users'} style={{color:'black',cursor:'pointer',textDecoration:'none', marginRight:'10px'}}>USER</Link>
        <Link to={'/users/tasks'} style={{color:'black',cursor:'pointer',textDecoration:'none', marginRight:'10px'}}>Task</Link>
        <Outlet/>
    </>
  )
}
