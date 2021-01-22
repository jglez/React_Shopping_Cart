// We need useContext again
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

// Import Context Object
import { ShopContext } from '../App'

const Navigation = props => {
  // Define our data
  const cart = useContext(ShopContext)

  return (
    <div className="navigation">
      <NavLink to="/">Products</NavLink>
      <NavLink to="/cart">
        Cart <span>{cart.length}</span>
      </NavLink>
    </div>
  )
}

export default Navigation
