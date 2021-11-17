import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav>
      <p><Link to="/">Home</Link></p>
      <p><Link to="/Login">Login</Link></p>
    </nav>
  )
}

export default Nav