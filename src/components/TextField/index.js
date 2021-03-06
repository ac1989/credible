import React from 'react';
import InputLabel from 'components/InputLabel';
import Input from 'components/Input';
import styled from 'react-emotion';

const StyledTextField = styled('div')(({ theme, width }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: `${theme.spacingUnit * 2}px`,
  width: `${width}px`
}));

const TextField = ({ label, width, error, ...input }) => {
  return (
    <StyledTextField width={width}>
      {label && <InputLabel label={label} />}
      <Input error={error} {...input} />
      {error && <span style={{ fontSize: '14px', color: 'red' }}>{error}</span>}
    </StyledTextField>
  );
};

export default TextField;
