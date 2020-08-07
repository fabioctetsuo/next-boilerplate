module.exports = {
  ...require('./.jest/jest-common'),
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.(js|ts|tsx)'],
  projects: ['./.jest/jest.client.js', './.jest/jest.server.js'],
};
