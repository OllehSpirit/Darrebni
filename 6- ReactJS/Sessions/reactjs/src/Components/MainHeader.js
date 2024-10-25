import { Link, Outlet } from "react-router-dom";
import { links } from "../CONSTANTS/data";

export default function MainHeader() {
  return (
    <>
      <div className="d-flex justify-content-evenly p-3" style={{ backgroundColor: 'var(--primary)' }}>
        {links.map((link, index) => {
          return <Link key={index} to={link.url} style={{ color: 'white', textDecoration: 'none' }}>{link.name}</Link>
        })}
      </div>
      
      <Outlet />
    </>
  )
}