import React from 'react'
import { css } from 'glamor'
import glamorous from 'glamorous'
import WebFont from 'webfontloader'
import { fontSize, space, removeProps } from 'styled-system'
import { baseFontSize, colors } from '../settings'

css.global('html', { fontSize: baseFontSize })

WebFont.load({
  google: { families: [ 'Raleway:100,400', 'Open Sans', 'sans-serif' ] }
})

const useBaseStyles = Component => glamorous(Component)(fontSize, space)

export const Logo = useBaseStyles(props => (
  <span {...props} css={{ fontFamily: 'Raleway', fontWeight: 100 }}>
    TFH
  </span>
))

export const Link = useBaseStyles(({ active, decoration, children, ...rest }) => {
  const styles = css({
    fontFamily: 'Open Sans',
    textDecoration: 'none',
    color: active ? colors.primary : colors.textOnLight,
    fill: active ? colors.primary : colors.textOnLight,
    ':hover': { color: colors.primary, fill: colors.primary },
    transition: '.25s',
    borderBottom: `solid 1px ${!active || decoration === 'none'
        ? 'transparent'
        : colors.primary}`,
    paddingBottom: '2px'
  })

  if (typeof children === 'function') {
    return <span {...rest}>{children(styles)}</span>
  }

  return <span {...rest} fontSize={2} {...styles}>{children}</span>
})
