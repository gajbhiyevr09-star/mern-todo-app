module.exports = {
  testEnvironment: "node",
  testMatch: ["**/tests/**/*.test.js"],
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "app.js",
    "models/**/*.js",
    "utils/**/*.js"
  ],
  coverageDirectory: "coverage"
};