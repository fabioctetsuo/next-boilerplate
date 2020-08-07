module.exports = {
  ...require('./.jest/jest-common'),
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.(js|ts|tsx)'],
  projects: ['./.jest/jest.client.js', './.jest/jest.server.js'],
};
