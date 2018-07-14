import React, { Component } from 'react';
import styled from 'react-emotion';

const StyledInput = styled('input')(({ theme }) => ({
  width: '100%',
  height: '40px',
  border: 'none',
  fontSize: '1.2rem',
  borderBottom: `1px solid ${theme.colours.formDefault}`,
  ':focus': {
    borderBottom: `2px solid ${theme.colours.formFocus}`
  }
}));

class Input extends Component {
  state = { value: '' };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <StyledInput
        onChange={this.handleChange}
        value={this.state.value}
        placeholder={this.props.placeholder}
      />
    );
  }
}

export default Input;
