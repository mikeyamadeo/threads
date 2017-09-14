import React from 'react'
import pt from 'prop-types'
import cc from 'create-react-class'
import { Box, Flex } from 'App/UI'

const SmartAsset = ({ staticUrl }) => (
  <Box is='img' src={staticUrl} w='100%' height='100%' />
)

const Thumbs = ({ children: assets, selectedAssetIndex, onAssetSelect }) => (
  <Box listStyle='none'>
    {assets.map((asset, i) => (
      <Box
        is='li'
        key={i}
        maxWidth='125px'
        maxHeight='187.5px'
        cursor='pointer'
        border={`solid 1px`}
        borderColor={i === selectedAssetIndex ? 'grey' : 'transparent'}
        transition='.25s'
        mt={i > 0 ? '18px' : 0}
        onClick={onAssetSelect.bind(null, i)}
        >
        <SmartAsset {...asset} />
      </Box>
      ))}
  </Box>
)

const Showcase = cc({
  getInitialState () {
    return { selectedAssetIndex: 0, showDetails: false }
  },
  propTypes: {
    product: pt.shape({
      assets: pt.arrayOf(pt.shape({ staticUrl: pt.string })),
      title: pt.string,
      sizing: pt.arrayOf(pt.string),
      price: pt.number,
      id: pt.string
    })
  },
  onAssetSelect (index) {
    this.setState({ selectedAssetIndex: index })
  },
  render () {
    const { props, state, onAssetSelect } = this
    const { product } = props
    const { selectedAssetIndex } = state
    return (
      <Flex>
        <Box maxWidth='400px' mr='18px'>
          <Box maxHeight='600px'>
            <SmartAsset {...product.assets[this.state.selectedAssetIndex]} />
          </Box>
          <Flex justify='flex-end' p={1} w='100%'>
            Details
          </Flex>
        </Box>
        <Thumbs {...{ selectedAssetIndex, onAssetSelect }}>
          {product.assets}
        </Thumbs>
      </Flex>
    )
  }
})

export default Showcase
