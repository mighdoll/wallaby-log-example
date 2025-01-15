const conf = {
  trace: true,
  autoDetect: false,
  files: [
    { pattern: '**/*.{test,spec}.?(c|m)[jt]s?(x)', ignore: true, trigger: true, load: true, file: true },
    { pattern: '**/node_modules/**', ignore: true, trigger: true, load: true, file: true, test: true },
    { pattern: '**/*.*', ignore: false, trigger: true, load: true, order: 1 }
  ],
  tests: [
    { pattern: '**/node_modules/**', ignore: true, trigger: true, load: true, test: true, file: false },
    { pattern: '**/*.{test,spec}.?(c|m)[jt]s?(x)', ignore: false, trigger: true, load: true, test: true, order: 2 }
  ],
  env: {
    type: "node",
    params: {},
    runner: "/opt/homebrew/Cellar/node/23.2.0/bin/node",
    viewportSize: { width: 800, height: 600 },
    options: { width: 800, height: 600 },
    bundle: true,
  },
  // testFramework: 'vitest'
    testFramework: { 
      version: 'vitest@0.14.0', 
      configurator: 'vitest@0.14.0', 
      reporter: 'vitest@0.14.0', 
      starter: 'vitest@0.14.0', 
      autoDetected: true 
    },
};

export default conf;
