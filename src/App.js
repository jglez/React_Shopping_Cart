// Import createContext from React
import React, { useState, createContext } from 'react'
import { Route } from 'react-router-dom'
import data from './data'

// Components
import Navigation from './components/Navigation'
import Products from './components/Products'
import ShoppingCart from './components/ShoppingCart'

// Create Context Object
export const ShopContext = createContext()

function App() {
  const [products] = useState(data)
  const [cart, setCart] = useState([])

  const addItem = item => {
    // add the given item to the cart
  }

  return (
    <div className="App">
      {/* Wrap with our Context Object Provider */}
      <ShopContext.Provider value={cart}>
        <Navigation />
      </ShopContext.Provider>

      {/* Routes */}
      <Route exact path="/">
        <Products products={products} addItem={addItem} />
      </Route>

      <Route path="/cart">
        <ShoppingCart cart={cart} />
      </Route>
    </div>
  )
}

export default App
