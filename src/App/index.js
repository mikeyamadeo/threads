import './style'
import React from 'react'
import { Route, Redirect, Link } from 'react-router-dom'
import { Shop, Checkout } from './views'

const Navigation = () => (
  <div>
    <nav>
      <ul>
        <li><Link to='/shop'>Shop</Link></li>
        <li><Link to='/checkout'>Checkout</Link></li>
      </ul>
    </nav>
  </div>
)

const App = () => (
  <div>
    <Navigation />
    <Redirect from='/' to='/shop' />
    <Route path='/shop' component={Shop} />
    <Route path='/checkout' component={Checkout} />
  </div>
)

export default App
