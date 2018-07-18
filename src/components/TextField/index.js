import React from 'react';
import InputLabel from 'components/InputLabel';
import Input from 'components/Input';
import styled from 'react-emotion';
import { theme } from '../../styles/theme';

const StyledTextField = styled('div')(({ theme, width }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: `${theme.spacingUnit * 2}px`,
  width: `${width}px`
}));

const TextField = ({ label, placeholder, width, input }) => {
  return (
    <StyledTextField width={width}>
      {label && <InputLabel label={label} />}
      <Input placeholder={placeholder} input={input} />
    </StyledTextField>
  );
};

export default TextField;
