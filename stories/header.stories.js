import React from 'react';
import { storiesOf } from '@storybook/react';

import { Container } from './utils';
import { Header } from '../src/components/header';
import random from '../src/components/utils/random';

storiesOf('Header', module)
  .add('Default', () => <Header wrap />)
  .add('Custom Word Count', () => <Header wrap words={2} />)
  .add('Random Word Count', () => <Header wrap words={random(2, 5)} />)
  .add('h1', () => <Header />)
  .add('h2', () => <Header wrap size={2} />)
  .add('h3', () => <Header wrap size={3} />);
