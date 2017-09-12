import React from 'react'
import glamorous from 'glamorous'
import { space, width, fontSize, color, removeProps } from 'styled-system'

const useBaseStyles = Component =>
  glamorous(Component)(space, width, fontSize, color)

export const Box = useBaseStyles(({ is = 'div', ...rest }) => {
  const Component = glamorous[capitalize(is)]
  return <Component {...removeProps(rest)} />
})

export const Flex = glamorous(Box, {
  filterProps: [ 'align', 'justify', 'column', 'wrap' ]
})(
  { display: 'flex' },
  ({ wrap }) => wrap ? { 'flex-wrap': 'wrap' } : null,
  ({ align }) => ({ alignItems: align }),
  ({ justify }) => ({ justifyContent: justify }),
  ({ column }) => column ? { 'flex-direction': 'column' } : null
)

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
