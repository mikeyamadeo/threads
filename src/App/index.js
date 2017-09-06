import './style'
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Div } from 'glamorous'
import { Shop, Checkout } from './views'
import Navigation, { NavHeight } from './components/Navigation'

const App = () => (
  <Div paddingTop={NavHeight}>
    <Navigation />
    <Redirect from='/' to='/shop' />
    <Route path='/shop' component={Shop} />
    <Route path='/checkout' component={Checkout} />
  </Div>
)

export default App
