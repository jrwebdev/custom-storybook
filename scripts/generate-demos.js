const fs = require('fs-extra');
const randomColor = require('randomcolor');
const padStart = require('lodash/padStart');
const range = require('lodash/range');
const dedent = require('dedent');

const componentName = index => `Component${padStart(index + 1, 4, '0')}`;

const generateContents = number => {
  const color = randomColor();
  return dedent`
    import * as React from 'react';
    import { storiesOf } from '@storybook/react';
    
    storiesOf('Component${number}', module)
      .add('Example 1', () => (
        <div style={{ backgroundColor: '${color}' }}>Example 1</div>
      ))
      .add('Example 2', () => (
        <div style={{ backgroundColor: '${color}' }}>Example 2</div>
      ))
      .add('Example 3', () => (
        <div style={{ backgroundColor: '${color}' }}>Example 3</div>
      ))
      .add('Example 4', () => (
        <div style={{ backgroundColor: '${color}' }}>Example 4</div>
      ))
      .add('Example 5', () => (
        <div style={{ backgroundColor: '${color}' }}>Example 5</div>
      ))
  `;
};

range(1000)
  .map((val, index) => generateContents(index + 1))
  .forEach((contents, index) =>
    fs.writeFile(`src/${componentName(index)}.demo.js`, contents)
  );
