import './style'
import React from 'react'
import { Route, Redirect, Link } from 'react-router-dom'
import { Shop, About, Checkout } from './views'

const Navigation = () => (
  <div>
    <nav>
      <ul>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/shop'>Shop</Link></li>
        <li><Link to='/checkout'>Checkout</Link></li>
      </ul>
    </nav>
  </div>
)

const App = () => (
  <div>
    <Navigation />
    <Redirect from='/' to='/about' />
    <Route path='/about' component={About} />
    <Route path='/shop' component={Shop} />
    <Route path='/checkout' component={Checkout} />
  </div>
)

export default App
