import React from 'react';
import styled, { keyframes } from 'react-emotion';

const StyledWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  width: '180px',
  height: '60px'
});

const pulse = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

const StyledDot = styled('div')(({ theme }) => ({
  width: '40px',
  height: '40px',
  background: `${theme.colours.formDefault}`,
  borderRadius: '50%',
  opacity: 0,
  animation: `${pulse} 0.8s infinite alternate ease-in-out`,
  '&:nth-child(2n)': {
    animationDelay: '0.1s'
  },
  '&:nth-child(3n)': {
    animationDelay: '0.2s'
  }
}));

const TriDotLoader = () => {
  return (
    <StyledWrapper>
      <StyledDot />
      <StyledDot />
      <StyledDot />
    </StyledWrapper>
  );
};

export default TriDotLoader;
