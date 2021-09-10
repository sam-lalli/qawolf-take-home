//const { assert } = require("assert/strict");
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({
    headless: false,
  });

  // YOUR CODE STARTS
    const USEREMAIL = "test@test.com"
    const PASSWORD = "password"
    const page = await browser.newPage();
    await page.goto('https://www.netflix.com/login');
    await page.fill('input[name="userLoginId"]', USEREMAIL);
    await page.fill('input[name="password"]', PASSWORD);
    await page.click('button[type="submit"]', {force: true});
    const errorMessage = await page.locator('.ui-message-contents');
    if (errorMessage) {
      await expect(errorMessage).toHaveText("Incorrect password");
      await page.screenshot({ path: 'screenshot.png', fullPage: true });
      console.log("test complete");
    }
  // YOUR CODE ENDS
})();
