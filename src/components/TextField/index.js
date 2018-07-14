import React from 'react';
import InputLabel from 'components/InputLabel';
import Input from 'components/Input';
import styled from 'react-emotion';
import { theme } from '../../styles/theme';

const StyledTextField = styled('div')(({ theme, width }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: `${theme.spacingUnit * 2}px`,
  marginRight: `${theme.spacingUnit * 2}px`,
  marginBottom: `${theme.spacingUnit * 2}px`,
  width: `${width}px`
}));

const TextField = ({ label, placeholder, width }) => {
  return (
    <StyledTextField width={width}>
      <InputLabel label={label} />
      <Input placeholder={placeholder} />
    </StyledTextField>
  );
};

export default TextField;
