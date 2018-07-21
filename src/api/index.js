import { cards } from 'services/mock/data';

// Emulate latency then return cards,
// object { data: data } emulates axios response;
export const mockFetchAllCards = async () => {
  const timeout = ms => new Promise(res => setTimeout(res, ms));
  await timeout(10);
  return { data: cards };
};

const eligibleCards = criteria => {
  let annual_income = parseInt(criteria.annual_income.replace(/,/g, ''), 10);
  return cards.filter(card => {
    let incomeEligible = card.criteria.annual_income <= annual_income;
    let employmentStatusEligible =
      card.criteria.employment_status === criteria.employment_status ||
      card.criteria.employment_status === 'any';
    if (incomeEligible && employmentStatusEligible) {
      return card;
    }
  });
};

// Mocking a call to db,
// emulating the db only returning cards that match;
export const mockFetchEligibleCards = async criteria => {
  const timeout = ms => new Promise(res => setTimeout(res, ms));
  await timeout(2000);
  return { data: eligibleCards(criteria) };
};
