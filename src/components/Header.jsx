import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <nav className="h-14 bg-neutral-200">
        <ul className="h-full flex gap-6 items-center justify-center">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/posts">Post</NavLink>
          </li>
          <li>
            <NavLink to="/about">Chi siamo</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header