export const smokeOptions = {
  vus: 1,
  duration: '30s',
};

export const loadOptions = {
  stages: [
    { duration: '1m', target: 10 },
    { duration: '3m', target: 50 },
    { duration: '1m', target: 0 },
  ],
};
