import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, Flex } from './index'

storiesOf('Layout', module).add('Box', () => (
  <div>
    <Box bg='black' w='400px' p={4} />
  </div>
)).add('Flex', () => (
  <div>
    <Flex w='100px' wrap bg='red'>
      <h1>hi</h1><h1>ho</h1><h1>lets</h1><h1>go</h1><h1>ho</h1>
    </Flex>
  </div>
))
