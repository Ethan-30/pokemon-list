module.exports = {
    moduleDirectories: ['.', 'node_modules'],
    moduleNameMapper: {
        '(.*)': '<rootDir>/_test_/$1',
    },
    rootDir: 'src',
    setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect',
        '<rootDir>/src/setupTests.ts'
    ],
    testEnvironment: 'jsdom'
}
