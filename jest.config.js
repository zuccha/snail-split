module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testRegex: '.*(test|spec)\\.tsx?$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
}
