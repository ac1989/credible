import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Transition, animated } from 'react-spring';
import * as actions from './actions';
import CreditCheckForm from './CreditCheckForm';
import CardSelection from './CardSelection';
import { put } from 'redux-saga/effects';

class CreditCheck extends Component {
  submit = values => {
    this.props.fetchAllCards();
  };

  pages = {
    FORM: style => (
      <animated.div style={{ ...style, position: 'absolute' }}>
        <CreditCheckForm onSubmit={this.submit} />
      </animated.div>
    ),
    FETCHING_CARDS: style => (
      <animated.div style={{ ...style, position: 'absolute' }}>
        <h1>Loading Cards</h1>
      </animated.div>
    ),
    CARD_SELECTION: style => (
      <animated.div style={{ ...style, position: 'absolute' }}>
        <CardSelection cards={this.props.creditCheck.cards} />
      </animated.div>
    )
  };

  render() {
    const {
      creditCheck: { status, cards }
    } = this.props;
    return (
      <div style={{ width: '658px', margin: 'auto' }}>
        <Transition
          native
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {this.pages[status]}
        </Transition>
      </div>
    );
  }
}

const mapStateToProps = ({ creditCheck }) => ({ creditCheck });

export default connect(
  mapStateToProps,
  actions
)(CreditCheck);
