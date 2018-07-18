export const normalizeOnlyNum = value => {
  if (!value) {
    return value;
  }

  // Strip non digits'
  return value.replace(/[^\d]/g, '');
};

export const normalizeDD = (value, prevValue) => {
  if (!value) {
    return value;
  }

  if (value > 31) {
    return prevValue;
  }

  return value.replace(/[^\d]/g, '');
};

export const normalizeMM = (value, prevValue) => {
  if (!value) {
    return value;
  }

  if (value > 12) {
    return prevValue;
  }

  return value.replace(/[^\d]/g, '');
};

export const normalizeYYYY = (value, prevValue) => {
  if (!value) {
    return value;
  }

  if (value > new Date().getUTCFullYear()) {
    return prevValue;
  }

  return value.replace(/[^\d]/g, '');
};

export const normalizePostcode = value => {
  if (!value) {
    return value;
  }

  // Strip non alpha numeric;
  const onlyAlphaNum = value.replace(/[^\w]/g, '');

  // Limit input to max 7 chars;
  if (onlyAlphaNum.length <= 7) {
    return onlyAlphaNum.toUpperCase();
  }
};
