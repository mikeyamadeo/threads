import React from 'react'
import { storiesOf } from '@storybook/react'
import Showcase from './index'

const product = {
  id: '1',
  title: 'A New Breed',
  price: 24.5,
  sizing: [ 's', 'm', 'l', 'xl' ],
  assets: [
    { staticUrl: require('./new-breed-hanger.jpg') },
    { staticUrl: require('./new-breed-male.jpg') },
    { staticUrl: require('./new-breed-female.jpg') }
  ]
}

storiesOf('Showcase', module).add('default', () => (
  <div>
    <Showcase product={product} />
  </div>
))
