import React from 'react';
import styled from 'react-emotion';
import { theme } from '../../styles/theme';

const StyledButton = styled('button')(({ theme }) => ({
  border: 'none',
  borderRadius: '16px',
  color: 'white',
  background: '#388e2c',
  fontSize: '1.2rem',
  padding: `${theme.spacingUnit}px`
}));

const Button = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};

export default Button;
