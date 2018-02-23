import * as React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Component1', module)
  .add('Example 1', () => (
    <div style={{ backgroundColor: 'blue' }}>Example 1</div>
  ))
  .add('Example 2', () => (
    <div style={{ backgroundColor: 'blue' }}>Example 2</div>
  ));
