import React, { Component } from 'react';
import styled from 'react-emotion';
import { mq } from 'styles/breakpoints';
import CardItem from './CardItem';

const StyledTable = styled('table')(({}) =>
  mq({
    width: ['100%', '600px', '920px'],
    thead: {
      display: ['block', 'table-header-group']
    },
    tbody: {
      display: ['block', 'table-row-group']
    },
    th: {
      display: ['block', 'table-cell']
    },
    td: {
      display: ['block', 'table-cell']
    },
    tr: {
      display: ['block', 'table-row']
    },
    'thead tr': {
      position: ['absolute', 'relative'],
      top: ['-9999px', '0'],
      left: ['-9999px', '0']
    }
  })
);

const StyledTableHeader = styled('th')(({ theme, data_key, sort_by }) =>
  mq({
    display: ['none', 'table-cell'],
    color:
      data_key === sort_by
        ? `${theme.colours.formFocus}`
        : `${theme.colours.formDefault}`,
    '&:hover': {
      cursor: 'pointer'
    }
  })
);

const dataKeysToHeaderTexts = {
  name: 'Card',
  credit_gbp: 'Credit (£)',
  apr_percent: 'APR',
  balance_transfer_offer_duration: 'Balance Transfer',
  purchase_offer_duration: 'Purchase Offer'
};

class CardList extends Component {
  state = {
    sort_by: 'credit_gbp',
    sort_direction: 'descending'
  };

  handleClick = sort_by => {
    if (sort_by === this.state.sort_by) {
      this.setState(state => ({
        ...state,
        sort_direction:
          state.sort_direction === 'descending' ? 'ascending' : 'descending'
      }));
    } else {
      this.setState({ sort_by, sort_direction: 'descending' });
    }
  };

  renderTableHeaders = () => {
    return Object.keys(dataKeysToHeaderTexts).map(data_key => {
      console.log(data_key);
      return (
        <StyledTableHeader
          key={data_key}
          sort_by={this.state.sort_by}
          data_key={data_key}
          onClick={() => {
            this.handleClick(data_key);
          }}
        >
          {dataKeysToHeaderTexts[data_key]}
        </StyledTableHeader>
      );
    });
  };

  sortFunction = (a, b) => {
    const { sort_by, sort_direction } = this.state;
    if (typeof a[sort_by] === 'string') {
      if (sort_direction === 'descending') {
        return (
          a[sort_by].split('')[0].toLowerCase() <
          b[sort_by].split('')[0].toLowerCase()
        );
      } else {
        return (
          a[sort_by].split('')[0].toLowerCase() >
          b[sort_by].split('')[0].toLowerCase()
        );
      }
    } else {
      if (sort_direction === 'descending') {
        return a[sort_by] < b[sort_by];
      } else {
        return a[sort_by] > b[sort_by];
      }
    }
  };

  render() {
    const { cards, selectedCardIds, handleChange } = this.props;
    return (
      <StyledTable>
        <thead>
          <tr align="left">
            <th />
            {this.renderTableHeaders()}
          </tr>
        </thead>
        <tbody>
          {cards
            .sort(this.sortFunction)
            .map(card => (
              <CardItem
                key={card.name}
                card={card}
                handleChange={handleChange}
                isSelected={selectedCardIds.find(id => id === card.id)}
              />
            ))}
        </tbody>
      </StyledTable>
    );
  }
}

export default CardList;
