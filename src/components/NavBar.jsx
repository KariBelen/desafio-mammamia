import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Context from '../Context'

const NavBar = () => {

  const { total } = useContext(Context);

  const navigate = useNavigate();
  return (
    <nav className="nav">
      <div className="nav-title">
        <Link className='text-decoration-none text-white' to="/home"><h2>🍕 Pizzería MammaMia!!</h2></Link>
      </div>
      <div className="nav-total d-flex">
        <Link className='text-decoration-none text-white fs-5' to="/carrito"><span>🛒 </span></Link>
        <h2>$ {total.toLocaleString("es-CL")}</h2></div>
    </nav>
  )
}

export default NavBar