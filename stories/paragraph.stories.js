import React from 'react';
import { storiesOf } from '@storybook/react';

import { Paragraph } from '../src/components/paragraph';
import { Container } from './utils';

storiesOf('Paragraph', module)
  .add('Default', () => (
    <Container>
      <Paragraph />
    </Container>
  ))
  .add('Fixed Lines', () => (
    <Container>
      <Paragraph lines={6} />
    </Container>
  ))
  .add('Fixed Paragraphs', () => (
    <Container>
      <Paragraph lines={6} paragraphs={4} />
    </Container>
  ))
  .add('Random', () => (
    <Container>
      <Paragraph lines={Math.min(Math.floor(Math.random() * 15), 4)} />
    </Container>
  ));
