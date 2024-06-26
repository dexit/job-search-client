import type { Config } from "jest";

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  setupFilesAfterEnv: ["./jest.setup.ts"],
  moduleNameMapper: {
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@lib/(.*)$": "<rootDir>/src/lib/$1",
    "^types/(.*)$": "<rootDir>/src/types/$1",
  },
};

export default config;
