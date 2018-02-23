const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:9001/iframe.html');
  await page.screenshot({ path: 'screenshot.png' });

  await browser.close();
})();
