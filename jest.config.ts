import type {Config} from 'jest';

export default async (): Promise<Config> => {
  return {
      "preset": "jest-preset-angular",
      "setupFilesAfterEnv": [
        "<rootDir>/src/setup.jest.ts"
      ],
      "testPathIgnorePatterns": [
        "<rootDir>/node_modules/",
        "<rootDir>/dist/"
      ],
      "globals": {
        "ts-jest": {
          "tsConfig": "<rootDir>/tsconfig.spec.json",
          "stringifyContentPathRegex": "\\.html$"
        }
      }
    }
} ;
