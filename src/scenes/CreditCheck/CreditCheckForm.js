import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  normalizePostcode,
  normalizeOnlyNum,
  normalizeDD,
  normalizeMM,
  normalizeYYYY
} from './normalizations';
import InputLabel from 'components/InputLabel';
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

let CreditCheckForm = ({ handleSubmit }) => {
  return (
    <StyledForm onSubmit={handleSubmit}>
      {/* <StyledFormTitle>CREDIT CHECK</StyledFormTitle> */}
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
        </FlexRow>
        <FlexRow>
          <Field
            name="firstName"
            component={renderTextField}
            label="First Name"
            width={280}
          />
          <Field
            name="lastName"
            component={renderTextField}
            label="Last Name"
            width={280}
          />
        </FlexRow>
        <InputLabel label={'Date of Birth'} />
        <FlexRow style={{ width: '280px' }}>
          <Field
            name="dOBDay"
            component={renderTextField}
            placeholder="DD"
            width={60}
            normalize={normalizeDD}
          />
          <Field
            name="dOBMonth"
            component={renderTextField}
            placeholder="MM"
            width={60}
            normalize={normalizeMM}
          />
          <Field
            name="dOBYear"
            component={renderTextField}
            placeholder="YYYY"
            width={120}
            normalize={normalizeYYYY}
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
            name="annual_income"
            component={renderTextField}
            label="Annual Income"
            width={280}
            normalize={normalizeOnlyNum}
          />
          <FormControl width={280}>
            <InputLabel label={'Employment Status'} />
            <Field name="employment_status" component={renderSelect}>
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

CreditCheckForm = reduxForm({
  form: 'creditCheck',
  destroyOnUnmount: false,
  initialValues: {
    annual_income: '40000',
    employment_status: 'student'
  }
})(CreditCheckForm);

export default CreditCheckForm;
