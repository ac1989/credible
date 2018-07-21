import React from 'react';
import styled from 'react-emotion';

const StyledWrapper = styled('tr')(({ theme, isSelected }) => ({
  background: isSelected ? '#9de89f;' : 'white',
  td: {
    borderBottom: isSelected
      ? `1px solid ${theme.colours.formFocus}`
      : '1px solid white'
  }
}));

const StyledCell = styled('td')(({ theme, align }) => ({
  padding: `${theme.spacingUnit}`,
  textAlign: align
}));

const StyledCheckbox = styled('input')({
  // TODO: Style Me!
});

const CardItem = ({
  handleChange,
  isSelected,
  card: {
    id,
    name,
    apr_percent,
    balance_transfer_offer_duration,
    purchase_offer_duration,
    credit_gbp
  }
}) => {
  return (
    <StyledWrapper isSelected={isSelected}>
      <StyledCell>
        <StyledCheckbox
          type="checkbox"
          onChange={() => {
            handleChange(id);
          }}
        />
      </StyledCell>
      <StyledCell>{name}</StyledCell>
      <StyledCell align="right">{credit_gbp}</StyledCell>
      <StyledCell align="right">{apr_percent}%</StyledCell>
      <StyledCell>{balance_transfer_offer_duration} Months</StyledCell>
      <StyledCell>{purchase_offer_duration} Months</StyledCell>
    </StyledWrapper>
  );
};

export default CardItem;
