import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
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