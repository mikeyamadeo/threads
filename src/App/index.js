import './style'
import React from 'react'
import { Route, Redirect, Link } from 'react-router-dom'
import { Shop, About, Cart } from './views'

const Navigation = ({ location }) => (
  <div>
    <nav>
      <ul>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/shop'>Shop</Link></li>
        <li><Link to='/cart'>Cart</Link></li>
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
    <Route path='/cart' component={Cart} />
  </div>
)

export default App
