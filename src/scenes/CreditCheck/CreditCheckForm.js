import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  normalizePostcode,
  normalizeOnlyNum,
  normalizeDD,
  normalizeMM,
  normalizeYYYY
} from './normalizations';
import { validate } from './helpers';
import InputLabel from 'components/InputLabel';
import TextField from 'components/TextField';
import FormControl from 'components/FormControl';
import Select from 'components/Select';
import Button from 'components/Button';
import {
  StyledForm,
  StyledFormLabel,
  StyledFormSection,
  // StyledFormTitle,
  FlexRow
} from './index.style';

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...rest
}) => (
  <TextField
    label={label}
    input={input}
    touched={touched}
    error={touched ? error : null}
    {...rest}
  />
);

const renderSelect = ({ input, children, meta: { touched, error } }) => {
  return (
    <Select {...input} children={children} error={touched ? error : null} />
  );
};

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
            name="first_name"
            component={renderTextField}
            label="First Name"
            width={280}
          />
          <Field
            name="last_name"
            component={renderTextField}
            label="Last Name"
            width={280}
          />
        </FlexRow>
        <InputLabel label={'Date of Birth'} />
        <FlexRow width={280}>
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
            width={128}
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
            name="house_number"
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
  // validate,
  destroyOnUnmount: false,
  initialValues: {
    annual_income: '15000',
    employment_status: 'student'
  }
})(CreditCheckForm);

export default CreditCheckForm;
