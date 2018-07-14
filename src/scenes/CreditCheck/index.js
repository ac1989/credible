import React from 'react';
import styled from 'react-emotion';
import InputLabel from 'components/InputLabel';
import Input from 'components/Input';
import TextField from 'components/TextField';
import FormControl from 'components/FormControl';
import Select from 'components/Select';
import Button from 'components/Button';

const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '656px',
  margin: 'auto',
  marginTop: `${theme.spacingUnit * 2}`,
  padding: `${theme.spacingUnit * 2}px`,
  boxShadow: `0 4px ${theme.spacingUnit * 3}px rgba(0, 0, 0, 0.4)`,
  background: 'white'
}));

const StyledFormSection = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  // border: '1px dotted red',
  margin: `${theme.spacingUnit}px 0 ${theme.spacingUnit * 2}px 0`
}));

const StyledFormTitle = styled('h2')(({ theme }) => ({
  fontSize: '1.72rem',
  color: theme.colours.formDefault,
  marginBottom: `${theme.spacingUnit * 2}px`,
  marginLeft: `${theme.spacingUnit * 2}px`
}));

const StyledFormLabel = styled('h3')(({ theme }) => ({
  color: theme.colours.formDefault,
  width: '100%',
  fontSize: '1.44rem',
  fontWeight: 'normal',
  marginBottom: `${theme.spacingUnit * 2}`,
  marginLeft: `${theme.spacingUnit * 2}px`
}));

const CreditCheck = () => {
  return (
    <div>
      <StyledForm>
        <StyledFormTitle>CREDIT CHECK</StyledFormTitle>
        <StyledFormSection>
          <FormControl width={88}>
            <InputLabel label={'Title'} />
            <Select>
              <option />
              <option>Mr</option>
              <option>Miss</option>
              <option>Ms</option>
              <option>Mx</option>
            </Select>
          </FormControl>
          <TextField label={'First Name'} width={220} />
          <TextField label={'Last Name'} width={220} />
          <TextField label={'Date of Birth'} placeholder={'DD-MM-YYYY'} />
        </StyledFormSection>
        <StyledFormSection>
          <StyledFormLabel>Address</StyledFormLabel>

          <TextField label={'Postcode'} width={280} />
          <TextField label={'House Number'} width={280} />
        </StyledFormSection>
        <StyledFormSection>
          <StyledFormLabel>Employment</StyledFormLabel>
          <TextField label={'Annual Income'} width={280} />
          <FormControl width={280}>
            <InputLabel label={'Employment Status'} />
            <Select>
              <option />
              <option>Full Time Employment</option>
              <option>Part Time Employment</option>
              <option>Student</option>
              <option>Unemployed</option>
            </Select>
          </FormControl>
        </StyledFormSection>
        <br />
        <Button type="submit" text={'CHECK ELIGIBILITY'} />
      </StyledForm>
    </div>
  );
};

export default CreditCheck;
