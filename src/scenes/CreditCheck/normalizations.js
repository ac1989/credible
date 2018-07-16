export const normalizeOnlyNum = value => {
  if (!value) {
    return value;
  }

  // Strip non digits'
  return value.replace(/[^\d]/g, '');
};

export const normalizeDate = value => {
  // Date Format DD-MM-YYYY

  if (!value) {
    return value;
  }

  // Replace all non digits with no char;
  const onlyNums = value.replace(/[^\d]/g, '');

  if (onlyNums.length <= 2) {
    return onlyNums;
  }

  if (onlyNums.length <= 4) {
    return `${onlyNums.slice(0, 2)}-${onlyNums.slice(2)}`;
  }

  if (onlyNums.length <= 8) {
    return `${onlyNums.slice(0, 2)}-${onlyNums.slice(2, 4)}-${onlyNums.slice(
      4
    )}`;
  }
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

export const normalizeMoney = value => {
  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, '');

  if (onlyNums.length < 4) {
    return onlyNums;
  }

  if (onlyNums.length < 7) {
    return `${onlyNums.slice(0, -3)},${onlyNums.slice(-3)}`;
  }

  if (onlyNums.length < 10) {
    return `${onlyNums.slice(0, -6)},${onlyNums.slice(-6, -3)},${onlyNums.slice(
      -3
    )}`;
  }
};
