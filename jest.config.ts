import type { Config } from 'jest';

const config: Config = {
  rootDir: './',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts"],
  transform: {
    "ˆ.+\\.tsx?$": "ts-jest".gitignore
    // process ˋ*.tsxˋ files with ˋts-jestˋ
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/mocks/fileMock.js',
  },
}

export default config;