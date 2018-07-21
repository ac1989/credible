import React, { Component } from 'react';
import styled from 'react-emotion';
import CardList from './CardList';

const StyledWrapper = styled('div')(({ theme }) => ({
  // display: 'flex',
  // flexDirection: 'column',
  // alignItems: 'center',
  width: '100%'
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
        <h2>You are eligible for: </h2>
        <CardList
          cards={cards}
          selectedCardIds={this.state.selectedCardIds}
          handleChange={this.toggleSelect}
        />
        <h2>Total Credit: £{this.calculateTotalCredit(cards)}</h2>
      </StyledWrapper>
    );
  }
}
