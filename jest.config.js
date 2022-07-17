module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/.next'],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setup-tests.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
  },
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.tsx',
    '!src/**/*.test.tsx',
    '!src/**/_app.tsx',
    '!src/**/_document.tsx'
  ],
  coverageReporters: ['lcov']
}
