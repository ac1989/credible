import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  normalizeDate,
  normalizePostcode,
  normalizeOnlyNum,
  normalizeMoney
} from './normalizations';
import InputLabel from 'components/InputLabel';
import Input from 'components/Input';
import TextField from 'components/TextField';
import FormControl from 'components/FormControl';
import Select from 'components/Select';
import Button from 'components/Button';
import {
  StyledForm,
  StyledFormLabel,
  StyledFormSection,
  StyledFormTitle,
  FlexRow
} from './index.style';

const renderTextField = ({ input, label, ...rest }) => (
  <TextField label={label} input={input} {...rest} />
);

const renderSelect = ({ input, children }) => (
  <Select {...input} children={children} />
);

let CreditCheck = ({ handleSubmit }) => {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFormTitle>CREDIT CHECK</StyledFormTitle>
      <StyledFormSection>
        <FlexRow>
          <FormControl width={88}>
            <InputLabel label={'Title'} />
            <Field name="title" component={renderSelect}>
              <option value="" />
              <option value="Mr">Mr</option>
              <option value="Miss">Miss</option>
              <option value="Ms">Ms</option>
              <option value="Mx">Mx</option>
            </Field>
          </FormControl>
          <Field
            name="firstName"
            component={renderTextField}
            label="First Name"
          />
          <Field
            name="lastName"
            component={renderTextField}
            label="Last Name"
          />
        </FlexRow>
        <FlexRow>
          <Field
            name="dateOfBirth"
            component={renderTextField}
            label="Date of Birth"
            placeholder="DD-MM-YYYY"
            normalize={normalizeDate}
          />
        </FlexRow>
      </StyledFormSection>
      <StyledFormSection>
        <StyledFormLabel>Address</StyledFormLabel>
        <FlexRow>
          <Field
            name="postcode"
            component={renderTextField}
            label="Postcode"
            width={280}
            normalize={normalizePostcode}
          />
          <Field
            name="houseNumber"
            component={renderTextField}
            label="House Number"
            width={280}
            normalize={normalizeOnlyNum}
          />
        </FlexRow>
      </StyledFormSection>
      <StyledFormSection>
        <StyledFormLabel>Employment</StyledFormLabel>
        <FlexRow>
          <Field
            name="annualIncome"
            component={renderTextField}
            label="Annual Income"
            width={280}
            normalize={normalizeMoney}
          />
          <FormControl width={280}>
            <InputLabel label={'Employment Status'} />
            <Field name="employmentStatus" component={renderSelect}>
              <option value="" />
              <option value="fullTime">Full Time Employment</option>
              <option value="partTime">Part Time Employment</option>
              <option value="student">Student</option>
              <option value="unemployed">Unemployed</option>
            </Field>
          </FormControl>
        </FlexRow>
      </StyledFormSection>
      <br />
      <Button type="submit" text={'CHECK ELIGIBILITY'} />
    </StyledForm>
  );
};

CreditCheck = reduxForm({
  form: 'credit'
})(CreditCheck);

export default CreditCheck;
