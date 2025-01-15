const conf = {
  trace: true,
  autoDetect: false,
  files: ["!src/**/*test.ts", "src/**/*.ts"],
  tests: ["src/**/*.test.ts"],
  env: {
    type: "node",
    params: {},
    runner: "/opt/homebrew/Cellar/node/23.2.0/bin/node",
  },
  // why doesn't this work?
  // testFramework: 'vitest' 
  testFramework: {
    version: "vitest@0.14.0",
    configurator: "vitest@0.14.0",
    reporter: "vitest@0.14.0",
    starter: "vitest@0.14.0",
    autoDetected: true,
  },
};

export default conf;
