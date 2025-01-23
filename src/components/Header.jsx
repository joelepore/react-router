import { NavLink } from "react-router-dom"
import menuData from "../data/menuData"

const Header = () => {
  return (
    <header>
      <nav className="h-14 bg-neutral-200">
        <ul className="h-full flex gap-6 items-center justify-center">
          {menuData.map(item => (
            <li key={item.id}>
              <NavLink to={item.url}>{item.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header