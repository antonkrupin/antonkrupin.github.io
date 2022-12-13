const apiPath = 'https://kinopoiskapiunofficial.tech/api/v2.2';

export const headers = {
  'X-API-KEY': '72c61891-4272-4d36-8bc2-94c6a4d5a01e',
  'Content-Type': 'application/json',
};

export default {
  premiersPath: () => [apiPath, 'films', 'premieres'].join('/'),
};
