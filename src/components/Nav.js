import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav className="nav flex">
      <p><Link to="/" className="links">Home</Link></p>
      <p><Link to="/Login" className="links">Login</Link></p>
    </nav>
  )
}

export default Nav