import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import { mq } from 'styles/breakpoints';
import { Transition, animated } from 'react-spring';
import * as actions from './actions';
import CreditCheckForm from './CreditCheckForm';
import TriDotLoader from 'components/TriDotLoader';
import CardSelection from './CardSelection';

const StyledRoot = styled('div')(({ theme }) =>
  mq({
    margin: 'auto',
    position: 'relative',
    width: ['280px', '658px', '920px'],
    background: 'blue'
  })
);

const animStyles = styles => ({
  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  ...styles
});

class CreditCheck extends Component {
  submit = values => {
    console.log('submit');
    this.props.fetchEligibleCards(values);
  };

  pages = {
    FORM: style => (
      <animated.div style={animStyles(style)}>
        <CreditCheckForm onSubmit={this.submit} />
      </animated.div>
    ),
    FETCHING_CARDS: style => (
      <animated.div
        style={{
          ...animStyles(style),
          height: '600px'
        }}
      >
        <TriDotLoader />
      </animated.div>
    ),
    CARD_SELECTION: style => (
      <animated.div
        style={{
          ...animStyles(style),
          display: 'block'
        }}
      >
        <CardSelection cards={this.props.creditCheck.cards} />
      </animated.div>
    )
  };

  render() {
    const {
      creditCheck: { status }
    } = this.props;
    return (
      <StyledRoot>
        <Transition
          native
          from={{ opacity: 0 }}
          enter={{ opacity: 1, transform: 'scale(1)' }}
          leave={{ opacity: 0, transform: 'scale(1.1)' }}
        >
          {this.pages[status]}
        </Transition>
      </StyledRoot>
    );
  }
}

const mapStateToProps = ({ creditCheck }) => ({ creditCheck });

export default connect(
  mapStateToProps,
  actions
)(CreditCheck);
