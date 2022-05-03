import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="flex space-x-4 ml-6 font-bold text-xl">
      <Link to="/">Anasayfa </Link>
      <Link to="/about"> Hakkında</Link>
    </div>
  )
}

export default Nav
