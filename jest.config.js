const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const config = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jsdom",
  modulePathIgnorePatterns: [
    "<rootDir>/.*/__mocks__",
    "/node_modules/",
    "/.next/",
  ],
  modulePaths: ["<rootDir>/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};

module.exports = createJestConfig(config);
