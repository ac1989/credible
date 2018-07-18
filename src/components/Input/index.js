import React, { Component } from 'react';
import styled from 'react-emotion';

const StyledInput = styled('input')(({ theme }) => ({
  width: '100%',
  height: `${20 + theme.spacingUnit * 2}px`,
  border: 'none',
  fontSize: '1.2rem',
  background: 'white',
  outline: 'none',
  border: `1px solid ${theme.colours.formDefault}`,
  ':focus': {
    outline: `2px solid ${theme.colours.formFocus}`
  }
}));

class Input extends Component {
  render() {
    return (
      <StyledInput {...this.props.input} placeholder={this.props.placeholder} />
    );
  }
}

export default Input;
