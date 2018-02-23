import * as React from 'react';
import { configure, getStorybook } from '@storybook/react';

const req = require.context('../src/', true, /\.demo\.(j|t)sx?$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);

const storyUrls = getStorybook().reduce(
  (acc, demo) => [
    ...acc,
    ...demo.stories.map(story =>
      encodeURI(`selectedKind=${demo.kind}&selectedStory=${story.name}`)
    ),
  ],
  []
);

window.storybookUrls = storyUrls;

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('storybook-stories').innerText = storyUrls.join(',');
});
