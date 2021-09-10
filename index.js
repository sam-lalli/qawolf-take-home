const { assert } = require("assert/strict");
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({
    headless: false,
  });

  // YOUR CODE STARTS
  const page = await browser.newPage();
  await page.goto('https://www.netflix.com');
  await page.screenshot({ path: `example.png` });
  await browser.close();
  // YOUR CODE ENDS
})();
