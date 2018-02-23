import * as React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Component3', module)
  .add('Example 1', () => (
    <div style={{ backgroundColor: 'yellow' }}>Example 1</div>
  ))
  .add('Example 2', () => (
    <div style={{ backgroundColor: 'yellow' }}>Example 2</div>
  ));
