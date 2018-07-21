import styled from 'react-emotion';
import { mq } from 'styles/breakpoints';

export const StyledForm = styled('form')(({ theme }) =>
  mq({
    display: 'flex',
    flexDirection: 'column',
    width: ['100%', '658px'],
    margin: 'auto',
    padding: [`${theme.spacingUnit * 4}px 0`, `${theme.spacingUnit * 4}px`]
  })
);

export const StyledFormSection = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  margin: `${theme.spacingUnit}px 0 ${theme.spacingUnit * 2}px 0`
}));

export const FlexRow = styled('div')(({ theme, width }) =>
  mq({
    width: `${width}px`,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  })
);

export const StyledFormTitle = styled('h2')(({ theme }) => ({
  fontSize: '1.72rem',
  color: theme.colours.formDefault,
  marginBottom: `${theme.spacingUnit * 2}px`
}));

export const StyledFormLabel = styled('h3')(({ theme }) => ({
  color: theme.colours.brandGreen || '#4a4a4a',
  width: '100%',
  fontSize: '1.44rem',
  fontWeight: 'normal',
  marginBottom: `${theme.spacingUnit * 2}`
}));
