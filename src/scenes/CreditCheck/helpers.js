export const validate = values => {
  const {
    title,
    first_name,
    last_name,
    dob_day,
    dob_month,
    dob_year,
    postcode,
    house_number,
    annual_income,
    employment_status
  } = values;

  const errors = {};

  if (!title) {
    errors.title = 'You must select a title.';
  }

  if (!first_name) {
    errors.first_name = 'You must provide a first name.';
  }

  if (!last_name) {
    errors.last_name = 'You must provide a last name.';
  }

  if (!dob_day) {
    errors.dob_day = 'Required';
  }
  if (!dob_month) {
    errors.dob_month = 'Required';
  }
  if (!dob_year) {
    errors.dob_year = 'Required';
  }

  if (!postcode) {
    errors.postcode = 'You must provide a postcode';
  }

  if (!house_number) {
    errors.house_number = 'You must provide a house number.';
  }

  if (!annual_income) {
    errors.annual_income = 'You must provide your annual income.';
  }

  if (!employment_status) {
    errors.employment_status = 'You must provide an employment status.';
  }

  return errors;
};
