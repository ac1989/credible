import React from 'react';
import styled from 'react-emotion';

const StyledButton = styled('button')(({ theme }) => ({
  border: 'none',
  color: 'white',
  background: '#388e2c',
  fontSize: '1.2rem',
  padding: `${theme.spacingUnit}px`
}));

const Button = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};

export default Button;
