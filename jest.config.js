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
  npm: {
    styles: {
    'react-big-calendar': ['lib/css/react-big-calendar.css']
    }
  },
};

module.exports = createJestConfig(config);
