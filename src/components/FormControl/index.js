import React from 'react';
import styled from 'react-emotion';
import InputLabel from 'components/InputLabel';
import Select from 'components/Select';

const StyledFormControl = styled('div')(({ theme, width }) => ({
  width: `${width}px`,
  display: 'flex',
  flexDirection: 'column',
  marginBottom: `${theme.spacingUnit * 2}px`
}));

const FormControl = ({ children, width }) => {
  return <StyledFormControl width={width}>{children}</StyledFormControl>;
};

export default FormControl;
