import React, { Component } from 'react';
import styled from 'react-emotion';
import { mq } from 'styles/breakpoints';
import CardTable from './CardTable';

const StyledWrapper = styled('div')(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%'
}));

const StyledH2 = styled('h2')(({ theme }) => ({
  color: theme.colours.formDefault
}));

const StyledHelperText = styled('span')(
  mq({
    margin: `0.5em 0`,
    display: ['""', 'none']
  })
);

const StyledSpan = styled('span')(({ theme }) => ({
  color: theme.colours.formFocus
}));

export default class CardSelection extends Component {
  state = {
    selectedCardIds: []
  };

  toggleSelect = (cardId, e) => {
    this.setState(state => {
      if (state.selectedCardIds.find(id => id === cardId)) {
        return {
          selectedCardIds: state.selectedCardIds.filter(
            id => (cardId === id ? null : id)
          )
        };
      } else {
        return { selectedCardIds: [...state.selectedCardIds, cardId] };
      }
    });
  };

  calculateTotalCredit = cards => {
    const { selectedCardIds } = this.state;
    let total = 0;
    if (selectedCardIds.length < 1) {
      return total;
    } else {
      total = cards.reduce((acc, card) => {
        return selectedCardIds.includes(card.id) ? acc + card.credit_gbp : acc;
      }, 0);
    }
    return total;
  };

  render() {
    const { cards } = this.props;
    return (
      <StyledWrapper>
        <StyledH2>You are eligible for: </StyledH2>
        <StyledHelperText>Tap cards to select them.</StyledHelperText>
        <CardTable
          cards={cards}
          selectedCardIds={this.state.selectedCardIds}
          handleChange={this.toggleSelect}
        />
        <StyledH2>
          Total Credit:{' '}
          <StyledSpan>£{this.calculateTotalCredit(cards)}</StyledSpan>
        </StyledH2>
      </StyledWrapper>
    );
  }
}
