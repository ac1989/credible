import { differenceInYears } from 'date-fns';

export const validate = values => {
  const { dob_day, dob_month, dob_year } = values;

  const errors = {};

  // DATE VALIDATIONS
  const date = dob_day + dob_month + dob_year;

  if (date.length < 8) {
    errors.date_of_birth = 'Invalid Date';
  }

  const yearsFromNow = differenceInYears(
    new Date(),
    new Date(dob_year, dob_month - 1, dob_day)
  );

  if (yearsFromNow > 100) {
    errors.dob_year = 'You are too old';
    errors.date_of_birth = 'You are too old';
  }

  if (yearsFromNow < 18) {
    errors.dob_year = 'You are too young';
    errors.date_of_birth = 'You are too young';
  }

  // Require All Fields
  for (let value in values) {
    if (!values[value]) {
      errors[value] = 'Required';
    }
  }

  return errors;
};
