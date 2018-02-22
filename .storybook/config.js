import * as React from 'react';
import { configure } from '@storybook/react';

const req = require.context('../src/', true, /\.demo\.(j|t)sx?$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
