import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import { mq } from 'styles/breakpoints';
import * as actions from './actions';
import CreditCheckForm from './CreditCheckForm';
import TriDotLoader from 'components/TriDotLoader';
import CardSelection from './CardSelection';

const StyledRoot = styled('div')(({ theme }) =>
  mq({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    width: ['280px', '658px', '920px'],
    minHeight: '100vh'
  })
);

class CreditCheck extends Component {
  submit = values => {
    this.props.fetchEligibleCards(values);
  };

  render() {
    const {
      creditCheck: { status, cards }
    } = this.props;
    return (
      <StyledRoot>
        {status === 'FORM' && <CreditCheckForm onSubmit={this.submit} />}
        {status === 'FETCHING_CARDS' && <TriDotLoader />}
        {status === 'CARD_SELECTION' && <CardSelection cards={cards} />}
      </StyledRoot>
    );
  }
}

const mapStateToProps = ({ creditCheck }) => ({ creditCheck });

export default connect(
  mapStateToProps,
  actions
)(CreditCheck);
