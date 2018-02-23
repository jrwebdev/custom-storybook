// See: https://facebook.github.io/jest/docs/en/puppeteer.html
//      https://github.com/xfumihiro/jest-puppeteer-example

const puppeteer = require('puppeteer');
const fs = require('fs');
const mkdirp = require('mkdirp');
const os = require('os');
const path = require('path');

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');

module.exports = async function() {
  const browser = await puppeteer.launch({ headless: true });
  // const page = await browser.newPage();
  // await page.goto('http://localhost:9001/iframe.html', {
  //   waitUntil: 'networkidle2',
  // });
  // const stories = await page.evaluate(() => window.storybookUrls);

  mkdirp.sync(DIR);
  fs.writeFileSync(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint());

  global.__BROWSER__ = browser;
  // global.__PAGE__ = page; // TODO: Remove?
  // global.__STORIES__ = stories;
};
