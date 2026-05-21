const { chromium } = require("playwright");
const fs = require("fs");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("http://localhost:3001");
  await page.waitForTimeout(3000);
  fs.mkdirSync("screenshots", { recursive: true });

  await page.screenshot({ path: "screenshots/hero.png" });
  console.log("hero done");

  await page.evaluate(() => window.scrollTo(0, 950));
  await page.waitForTimeout(800);
  await page.screenshot({ path: "screenshots/editorial.png" });
  console.log("editorial done");

  await page.evaluate(() => window.scrollTo(0, 2800));
  await page.waitForTimeout(800);
  await page.screenshot({ path: "screenshots/blueprint.png" });
  console.log("blueprint done");

  await page.evaluate(() => window.scrollTo(0, 4400));
  await page.waitForTimeout(800);
  await page.screenshot({ path: "screenshots/timeline.png" });
  console.log("timeline done");

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight - 900));
  await page.waitForTimeout(800);
  await page.screenshot({ path: "screenshots/cta.png" });
  console.log("cta done");

  await browser.close();
  console.log("All done!");
})();
