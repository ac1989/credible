import React from 'react';
import styled from 'react-emotion';

const StyledRoot = styled('div')(({ isSelected }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  width: '380px',
  height: '160px',
  marginBottom: '16px',
  borderBottom: '4px solid slategrey',
  background: isSelected ? 'aquamarine' : 'white'
}));

const StyledCheckbox = styled('input')({
  position: 'absolute',
  top: '16px',
  right: '16px'
});

const CardItem = ({
  handleChange,
  isSelected,
  card: {
    id,
    name,
    apr,
    balance_transfer_offer_duration,
    purchase_offer_duration,
    credit_gbp
  }
}) => {
  return (
    <StyledRoot isSelected={isSelected}>
      <StyledCheckbox
        type="checkbox"
        onChange={() => {
          handleChange(id);
        }}
      />
      <h3>{name}</h3>
      <h4>Credit: £{credit_gbp}</h4>
      <p>Apr: {apr}</p>
      <p>
        Balance Offer Transfer Duration: {balance_transfer_offer_duration}{' '}
        Months
      </p>
      <p>Purchase Offer Duration: {purchase_offer_duration} Months</p>
    </StyledRoot>
  );
};

export default CardItem;
