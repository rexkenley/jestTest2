module.exports = {
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/pcf/"],
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform",
    "^.+\\.mdx?$": "@storybook/addon-docs/jest-transform-mdx",
  },
};
