import React from 'react';
import styled from 'react-emotion';

const StyledSelect = styled('select')(({ theme, error }) => ({
  height: `${20 + theme.spacingUnit * 2}px`,
  fontSize: '1.2rem',
  background: 'white',
  border: `1px solid ${theme.colours.formDefault}`,
  outline: error ? `2px solid ${theme.colours.formError}` : 'none',
  ':focus': {
    outline: `2px solid ${theme.colours.formFocus}`,
    highlight: 'none'
  }
}));

const Select = ({ children, ...rest }) => {
  return <StyledSelect {...rest}>{children}</StyledSelect>;
};

export default Select;
