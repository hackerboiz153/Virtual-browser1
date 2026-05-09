const { chromium } = require('playwright');

(async () => {
  // Browser ko launch kar rahe hain
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log("Navigating to Google...");
  await page.goto('https://www.google.com');

  // Screenshot le rahe hain
  await page.screenshot({ path: 'screenshot.png' });
  
  console.log("Task completed! Screenshot saved as screenshot.png");
  await browser.close();
})();
