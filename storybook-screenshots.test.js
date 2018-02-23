const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

const queryString = require('query-string');

describe('Storybook screenshots', () => {
  let page;
  const loadScreenshot = async queryStr => {
    // TODO: Create new page - needs testing.
    // TODO: How to run multiple requests concurrently
    if (!page) {
      page = await global.__BROWSER__.newPage();
    }

    await page.goto(`http://localhost:9001/iframe.html?${queryStr}`, {
      waitUntil: 'networkidle2',
    });

    // TODO: Multiple resolutions
    return page.screenshot();
  };

  global.__STORIES__.forEach(url => {
    const { selectedKind: component, selectedStory: story } = queryString.parse(
      url
    );

    describe(component, () => {
      test(story, async () => {
        const screenshot = await loadScreenshot(url);
        expect(screenshot).toMatchImageSnapshot({
          customSnapshotIdentifier: `${component} - ${story}`,
        });
      });
    });
  });
});
