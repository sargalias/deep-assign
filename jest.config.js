module.exports = {
  preset: 'ts-jest',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  setupFilesAfterEnv: ['jest-extended'],
  testMatch: ['**/__tests__/**/*.[jt]s', '**/?(*.)+(test).[jt]s'],
};
