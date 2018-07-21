import React, { Component } from 'react';
import styled from 'react-emotion';

const StyledInput = styled('input')(({ theme, error }) => ({
  width: '100%',
  height: `${20 + theme.spacingUnit * 2}px`,
  fontSize: '1.2rem',
  background: 'white',
  paddingLeft: `${theme.spacingUnit}`,
  border: `1px solid ${theme.colours.formDefault}`,
  outline: error ? `2px solid ${theme.colours.formError}` : 'none',
  ':focus': {
    outline: `2px solid ${theme.colours.formFocus}`
  }
}));

class Input extends Component {
  render() {
    const { input, placeholder, error } = this.props;
    return <StyledInput {...input} placeholder={placeholder} error={error} />;
  }
}

export default Input;
