import { Link } from "react-router-dom"

export const NavBar = () => {
  return <div>
    <Link to="/recipes">Recipes</Link>
    <Link to="/form">Form</Link>
  </div>
}
