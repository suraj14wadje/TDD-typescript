module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  testMatch: [
    '**/src/**/*.test.ts',  // Adjust the glob pattern as per your folder structure
  ],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  }