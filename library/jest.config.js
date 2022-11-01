export default {
  testEnvironment: 'jest-environment-node',
  transform: {},
  coveragePathIgnorePatterns: [
    '<rootDir>/test',
  ],
  collectCoverageFrom: ['react/**/*.js', '!**/node_modules/**'],
  coverageReporters: ['html', 'text', 'text-summary', 'cobertura', 'lcov'],
  testMatch: ['**/*.test.js'],
};
