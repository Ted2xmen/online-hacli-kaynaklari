import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="ml-6 pb-6 space-x-4 text-xl font-bold">
      <Link to="/">Anasayfa </Link>
      <Link to="about"> Hakkımızda</Link>
    </div>
  )
}

export default Nav
