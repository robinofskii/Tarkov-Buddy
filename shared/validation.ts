const VALIDATE_EMAIL =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

const VALIDATE_ALPHA_ONLY = /[A-Za-z]/g;

export const validateAlpha = (value: string) =>
  value !== null && !!value.match(VALIDATE_ALPHA_ONLY);

export const validateEmail = (value: string) => value !== null && !!value.match(VALIDATE_EMAIL);

export const validateMinLength = (value: string, minLength = 0) =>
  value !== null && value.length >= minLength;

export const validatePassword = (value: string) =>
  value.match(/^((?=.*\d)(?=.*[A-Z])(?=.*\W).{8,30})$/g);

export const validateLatitude = (value: number) => {
  const valid = value >= -85.05112878 && value <= 85.05112878;
  const error = valid ? null : 'Latitude must be between -85.05112878 & 85.05112878';
  return { valid, error };
};

export const validateLongitude = (value: number) => {
  const valid = value >= -180 && value <= 180;
  const error = valid ? null : 'longitude must be between -180 & 180';
  return { valid, error };
};

export const validateNotEmpty = (value: string) => {
  const valid = !!value;
  const error = valid ? null : 'Field can not be empty';
  return { valid, error };
};

export const validateMaxCharacters = (value: string, maxCharacters: number) => {
  const valid = (value && value.length <= maxCharacters) || value === '';
  const error = valid ? null : `Character limit is ${maxCharacters}`;
  return { valid, error };
};

export const validateMinCharacters = (value: string, minCharacters: number) => {
  const valid = (value && value.length >= minCharacters) || value === '';
  const error = valid ? null : `Minimum number of character is ${minCharacters} `;
  return { valid, error };
};

export const validateMinMaxCharacters = (
  value: string,
  minCharacters: number,
  maxCharacters: number,
) => {
  const valid = value && value.length >= minCharacters && value.length <= maxCharacters;
  const error = valid
    ? null
    : `Number of character must be between ${minCharacters} & ${maxCharacters}`;
  return { valid, error };
};

export const validateValueIsNotDecimal = (value: number) => {
  const valid = value % 1 === 0;
  const error = valid ? null : `Value can not be decimal`;
  return { valid, error };
};
