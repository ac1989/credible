export const customers = [
  {
    title: 'Mr',
    first_name: 'Ollie',
    last_name: 'Murphree',
    date_of_birth: new Date(1970, 6, 1),
    annual_income: 34000,
    employment_status: 'Full Time Employment',
    house_number: 700,
    postcode: 'BS14 9PR'
  },
  {
    title: 'Miss',
    first_name: 'Elizabeth',
    last_name: 'Edmundson',
    date_of_birth: new Date(1984, 5, 29),
    annual_income: 17000,
    employment_status: 'Student',
    house_number: 177,
    postcode: 'PH12 8UW'
  },
  {
    title: 'Mr',
    first_name: 'Trevor',
    last_name: 'Rieck',
    date_of_birth: new Date(1990, 8, 7),
    annual_income: 15000,
    employment_status: 'Part Time Employed',
    house_number: 343,
    postcode: 'TS25 2NF'
  }
];

export const cards = [
  {
    id: 625,
    name: 'Student Life Card',
    apr_percent: 18.9,
    balance_transfer_offer_duration: 0,
    purchase_offer_duration: 0,
    credit_gbp: 1200,
    criteria: {
      annual_income: 0,
      employment_status: 'student'
    }
  },
  {
    id: 7001,
    name: 'Anywhere Card',
    apr_percent: 33.9,
    balance_transfer_offer_duration: 0,
    purchase_offer_duration: 0,
    credit_gbp: 300,
    criteria: {
      annual_income: 0,
      employment_status: 'any'
    }
  },
  {
    id: 33,
    name: 'Liquid Card',
    apr_percent: 33.9,
    balance_transfer_offer_duration: 12,
    purchase_offer_duration: 6,
    credit_gbp: 3000,
    criteria: {
      annual_income: 15000,
      employment_status: 'any'
    }
  }
];
