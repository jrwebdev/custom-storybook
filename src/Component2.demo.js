import * as React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Component2', module)
  .add('Example 1', () => (
    <div style={{ backgroundColor: 'red' }}>Example 1</div>
  ))
  .add('Example 2', () => (
    <div style={{ backgroundColor: 'red' }}>Example 2</div>
  ));
