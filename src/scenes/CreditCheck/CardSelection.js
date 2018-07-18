import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import { getFormValues } from 'redux-form';
import CardItem from './CardItem';

class CardSelection extends Component {
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

  calculateTotal = cards => {
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

  renderEligibleCards = (cards, criteria) => {
    // TODO:
    // This runs every time a card is selected maybe fix that.
    let annual_income = parseInt(criteria.annual_income.replace(/,/g, ''), 10);

    return cards.map(card => {
      let incomeEligible = card.criteria.annual_income <= annual_income;
      let employmentStatusEligible =
        card.criteria.employment_status === criteria.employment_status ||
        card.criteria.employment_status === 'any';

      if (incomeEligible && employmentStatusEligible) {
        return (
          <CardItem
            key={card.name}
            card={card}
            handleChange={this.toggleSelect}
            isSelected={this.state.selectedCardIds.find(id => id === card.id)}
          />
        );
      }
    });
  };

  render() {
    const { cards, creditCheckValues } = this.props;
    console.log(cards);
    return (
      <div>
        <h2>You are eligible for: </h2>
        <div>{this.renderEligibleCards(cards, creditCheckValues)}</div>
        <h2>Total Credit: £{this.calculateTotal(cards)}</h2>
      </div>
    );
  }
}

export default connect(state => ({
  creditCheckValues: getFormValues('creditCheck')(state)
}))(CardSelection);
