import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import CardItem from './CardItem';

class CardSelection extends Component {
  state = {
    selectedCardIds: []
  };

  componentDidMount() {
    this.props.fetchAllCards();
  }

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

  calculateTotal = () => {
    const { selectedCardIds } = this.state;
    const { cards } = this.props;
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
      <div>
        <h2>You are eligible for: </h2>
        {cards.map(card => (
          <CardItem
            key={card.name}
            card={card}
            handleChange={this.toggleSelect}
            isSelected={this.state.selectedCardIds.find(id => id === card.id)}
          />
        ))}
        <h2>Total Credit: {this.calculateTotal()}</h2>
        <pre>{JSON.stringify(this.state.selectedCardIds, null, 2)}</pre>
      </div>
    );
  }
}

export default connect(
  ({ cards }) => ({ cards }),
  actions
)(CardSelection);
