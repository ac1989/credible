import React from 'react';
import styled from 'react-emotion';

const StyledSelect = styled('select')(({ theme }) => ({
  height: `${20 + theme.spacingUnit * 2}px`,
  fontSize: '1.2rem',
  background: 'white',
  border: 'none',
  border: `1px solid ${theme.colours.formDefault}`,
  ':focus': {
    outline: `2px solid ${theme.colours.formFocus}`,
    highlight: 'none'
  }
}));

const Select = ({ children, onChange }) => {
  return <StyledSelect onChange={onChange}>{children}</StyledSelect>;
};

export default Select;
