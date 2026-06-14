/// <reference types="node" />

import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  
  timeout: 20000,
  expect: { timeout: 10000 },
  
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 0 : 0,
  workers: process.env.CI ? 1 : 1,
 
  use: {
    headless: process.env.CI ? true : false,
    screenshot: "only-on-failure",    
    video: {
      mode: 'retain-on-failure',
    },
    trace: "retain-on-failure",
  },
  
  reporter: [
    ["list"],            
    ["html", { open: "on-failure" }],
    ["github"]
  ],
  projects: [
    {
      name: 'Google Chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
        // {
        //   name: 'firefox',
        //   use: { ...devices['Desktop Firefox'] },
        // },
        viewport: null,
        deviceScaleFactor: undefined,

        launchOptions: { args: ["--start-maximized"] },
      },
    },
  ],
});



