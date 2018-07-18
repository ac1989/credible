import styled from 'react-emotion';

export const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '656px',
  margin: 'auto',
  padding: `${theme.spacingUnit * 4}px`
  // boxShadow: `0 4px ${theme.spacingUnit * 32}px rgba(0, 0, 0, 0.1)`
  // background:
  // 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,240,240,1) 100%)'
}));

export const StyledFormSection = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  // border: '1px dotted red',
  margin: `${theme.spacingUnit}px 0 ${theme.spacingUnit * 2}px 0`
}));

export const FlexRow = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between'
}));

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
