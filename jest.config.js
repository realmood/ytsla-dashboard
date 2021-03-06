module.exports = {
  roots: ["<rootDir>"],
  transform: {
      "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupTestFrameworkScriptFile: "<rootDir>src/setupTests.ts",
  snapshotSerializers: ["enzyme-to-json/serializer"],
  moduleDirectories: ["node_modules", "."]
};
