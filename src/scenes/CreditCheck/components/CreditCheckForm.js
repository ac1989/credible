import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, getFormSyncErrors, getFormMeta } from 'redux-form';
import {
  normalizePostcode,
  normalizeOnlyNum,
  normalizeDD,
  normalizeMM,
  normalizeYYYY
} from '../normalizations';
import { validate } from '../helpers';
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
  FlexRow
} from './CreditCheckForm.style';

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...rest
}) => (
  <TextField
    label={label}
    input={input}
    error={touched ? error : null}
    {...rest}
  />
);

const renderTextInput = ({ input, meta: { touched, error }, width }) => (
  <Input input={input} error={touched ? error : null} width={width} />
);

const renderSelect = ({ input, children, meta: { touched, error } }) => {
  return (
    <Select {...input} children={children} error={touched ? error : null} />
  );
};

let CreditCheckForm = ({ handleSubmit, formSyncErrors, formMeta }) => {
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
        <FlexRow>
          <div
            style={{ width: '280px', display: 'flex', flexDirection: 'column' }}
          >
            <InputLabel label="Date of Birth" />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Field
                name="dob_day"
                component={renderTextInput}
                placeholder="DD"
                width={60}
                normalize={normalizeDD}
              />
              <Field
                name="dob_month"
                component={renderTextInput}
                placeholder="MM"
                width={60}
                normalize={normalizeMM}
              />
              <Field
                name="dob_year"
                component={renderTextInput}
                placeholder="YYYY"
                width={128}
                normalize={normalizeYYYY}
              />
            </div>
            <div style={{ color: 'red', fontSize: '14px' }}>
              {formMeta.dob_year &&
                formMeta.dob_year.touched &&
                formSyncErrors.date_of_birth}
            </div>
          </div>
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
            label="Annual Income (£)"
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
            </Field>
          </FormControl>
        </FlexRow>
      </StyledFormSection>
      <br />
      <Button type="submit" text={'CHECK ELIGIBILITY'} />
    </StyledForm>
  );
};

CreditCheckForm = connect(state => ({
  formSyncErrors: getFormSyncErrors('creditCheck')(state),
  formMeta: getFormMeta('creditCheck')(state)
}))(CreditCheckForm);

CreditCheckForm = reduxForm({
  form: 'creditCheck',
  validate,
  initialValues: {
    dob_day: '',
    dob_month: '',
    dob_year: ''
  }
})(CreditCheckForm);

export default CreditCheckForm;
