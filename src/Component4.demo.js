import * as React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Component4', module)
  .add('Example 1', () => (
    <div style={{ backgroundColor: 'green' }}>Example 1</div>
  ))
  .add('Example 2', () => (
    <div style={{ backgroundColor: 'green' }}>Example 2</div>
  ));
