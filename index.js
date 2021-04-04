import React, {forwardRef} from 'react';
import styled from '@emotion/styled';
import {
  compose,
  space,
  layout,
  typography,
  color,
  flexbox,
} from 'styled-system';
import css, {get} from '@styled-system/css';
import shouldForwardProp from '@styled-system/should-forward-prop';

const sx = props => css(props.sx)(props.theme);
const base = props => css(props.__css)(props.theme);
const variant = ({theme, variant, tx = 'variants'}) =>
  css(get(theme, tx + '.' + variant, get(theme, variant)))(theme);

export const Box = styled('div', {
  shouldForwardProp,
})({
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  variant,
  sx,
  props => props.css,
  compose(
    space,
    layout,
    typography,
    color,
    flexbox,
  ),
);

export const Flex = styled(Box)({
  display: 'flex',
});

export const Text = forwardRef((props, ref) =>
  <Box
    ref={ref}
    tx="text"
    {...props}
  />,
);

export const Heading = forwardRef((props, ref) =>
  <Box
    ref={ref}
    as="h2"
    tx="text"
    variant="heading"
    {...props}
    __css={{
      fontSize: 4,
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    }}
  />,
);

export const Link = forwardRef((props, ref) =>
  <Box
    ref={ref}
    as="a"
    variant="link"
    {...props}
  />,
);

export const Button = forwardRef((props, ref) =>
  <Box
    ref={ref}
    as="button"
    tx="buttons"
    variant="primary"
    {...props}
    __css={{
      appearance: 'none',
      display: 'inline-block',
      textAlign: 'center',
      lineHeight: 'inherit',
      textDecoration: 'none',
      fontSize: 'inherit',
      px: 3,
      py: 2,
      color: 'white',
      bg: 'primary',
      border: 0,
      borderRadius: 4,
    }}
  />,
);

export const Image = forwardRef((props, ref) =>
  <Box
    ref={ref}
    as="img"
    {...props}
    __css={{
      maxWidth: '100%',
      height: 'auto',
    }}
  />,
);

export const Card = forwardRef((props, ref) =>
  <Box
    ref={ref}
    variant="card"
    {...props}
  />,
);
