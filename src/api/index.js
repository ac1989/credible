import { cards } from 'services/mock/data';

// Emulate latency then return cards,
// object { data: data } emulates axios response;
export const mockFetchAllCards = async () => {
  const timeout = ms => new Promise(res => setTimeout(res, ms));
  await timeout(300);
  return { data: cards };
};
