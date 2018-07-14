import React from 'react';
import styled from 'react-emotion';
import { theme } from '../../styles/theme';

const StyledLabel = styled('label')(({ theme }) => ({
  color: '#7a7a7a',
  marginBottom: `${theme.spacingUnit}px`
}));

const InputLabel = ({ label }) => {
  return <StyledLabel>{label}</StyledLabel>;
};

export default InputLabel;
