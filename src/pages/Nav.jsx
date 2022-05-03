import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="flex space-x-4 ml-6">
      <h3 className="font-bold">Menu</h3>
      <Link to="/">Home </Link>
      <Link to="/about"> About</Link>
    </div>
  )
}

export default Nav
