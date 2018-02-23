const fs = require('fs-extra');
const randomColor = require('randomcolor');
const padStart = require('lodash/padStart');
const range = require('lodash/range');
const dedent = require('dedent');

const componentName = index => `Component${padStart(index + 1, 4, '0')}`;

const generateContents = index => {
  const color = randomColor();
  return dedent`
    import * as React from 'react';
    import { storiesOf } from '@storybook/react';
    
    storiesOf('${componentName(index)}', module)
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

const demoCount = process.argv[2] || 100;

fs.rmdirSync('src');
fs.mkdirSync('src');

range(demoCount)
  .map((val, index) => generateContents(index))
  .forEach((contents, index) =>
    fs.writeFile(`src/${componentName(index)}.demo.js`, contents)
  );
