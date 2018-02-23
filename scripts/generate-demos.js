const fs = require('fs-extra');
const randomColor = require('random-color');

const generateContents = number => {
  const color = randomColor();
  return `import * as React from 'react';
  import { storiesOf } from '@storybook/react';
  
  storiesOf('Component${number}', module)
    .add('Example 1', () => (
      <div style={{ backgroundColor: '${color}' }}>Example 1</div>
    ))
    .add('Example 2', () => (
      <div style={{ backgroundColor: '${color}' }}>Example 2</div>
    ))
    .add('Example 3', () => (
      <div style={{ backgroundColor: '${color}' }}>Example 1</div>
    ))
    .add('Example 4', () => (
      <div style={{ backgroundColor: '${color}' }}>Example 2</div>
    ))
    .add('Example 5', () => (
      <div style={{ backgroundColor: '${color}' }}>Example 1</div>
    ))
  `;
};

Array.from(new Array(1000))
  .map((val, index) => generateContents(index + 1))
  .forEach((contents, index) =>
    fs.writeFile(`src/Component${index + 1}.demo.js`)
  );
