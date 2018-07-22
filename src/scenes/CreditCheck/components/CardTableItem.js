import React from 'react';
import styled from 'react-emotion';
import { mq } from 'styles/breakpoints';

const StyledWrapper = styled('tr')(({ theme, isSelected }) =>
  mq({
    width: ['280px', '100%'],
    position: 'relative',
    // display: ['flex', 'table-row'],
    // flexDirection: 'column',
    background: isSelected ? '#9de89f;' : 'white',
    marginBottom: [`${theme.spacingUnit}`, 0],
    td: {
      position: 'relative',
      paddingLeft: ['50%', `${theme.spacingUnit}`]
    },
    'td:before': {
      display: ['block', 'none'],
      position: 'absolute',
      /* Top/left values mimic padding */
      top: '6px',
      left: '6px',
      width: '45%',
      paddingRight: '10px',
      whiteSpace: 'nowrap'
    },
    'td:nth-of-type(1):before': {
      content: ['"Card"']
    },
    'td:nth-of-type(2):before': {
      content: '"Credit (£)"'
    },
    'td:nth-of-type(3):before': {
      content: '"APR"'
    },
    'td:nth-of-type(4):before': {
      content: '"B.T.O.D"'
    },
    'td:nth-of-type(5):before': {
      content: '"P.O.D"'
    },
    'td:nth-of-type(6)': {
      display: ['none', 'table-cell']
    }
  })
);

const StyledCell = styled('td')(({ theme, align }) =>
  mq({
    padding: `${theme.spacingUnit}px`,
    textAlign: ['left', align]
  })
);

const CardTableItem = ({
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
    <StyledWrapper isSelected={isSelected} onClick={() => handleChange(id)}>
      <StyledCell>{name}</StyledCell>
      <StyledCell align="right">{credit_gbp}</StyledCell>
      <StyledCell align="right">{apr_percent}%</StyledCell>
      <StyledCell>{balance_transfer_offer_duration} Months</StyledCell>
      <StyledCell>{purchase_offer_duration} Months</StyledCell>
      <StyledCell>
        <input type="checkbox" checked={isSelected || false} />
      </StyledCell>
    </StyledWrapper>
  );
};

export default CardTableItem;
