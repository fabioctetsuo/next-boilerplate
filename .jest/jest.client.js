module.exports = {
  ...require('./jest-common'),
  displayName: 'client',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: [
    '<rootDir>/.jest/setup.ts',
    '@testing-library/jest-dom/extend-expect',
  ],
};
