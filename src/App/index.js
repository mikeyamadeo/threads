import './style'
import React from 'react'
import { Route, Redirect, Link, withRouter } from 'react-router-dom'
import { Nav, Div, Ul, Li } from 'glamorous'
import { Shop, About, Cart } from './views'

const NavHeight = '50px'
const Navigation = withRouter(({ location }) => (
  <Div
    position='fixed'
    top='0'
    left='0'
    width='100%'
    backgroundColor='rgba(255, 255, 255, 0.95)'
    height={NavHeight}
    display='flex'
    alignItems='center'
  >
    <Nav
      display='flex'
      width='100%'
      maxWidth='800px'
      margin='0 auto'
      justifyContent='space-between'
    >
      <Ul display='flex' listStyle='none'>
        <Li><Link to='/about'>About</Link></Li>
        <Li><Link to='/shop'>Shop</Link></Li>
      </Ul>
      <Link to='/cart'>Cart</Link>
    </Nav>
  </Div>
))

const App = () => (
  <Div paddingTop={NavHeight}>
    <Navigation />
    <Redirect from='/' to='/about' />
    <Route path='/about' component={About} />
    <Route path='/shop' component={Shop} />
    <Route path='/cart' component={Cart} />
  </Div>
)

export default App
