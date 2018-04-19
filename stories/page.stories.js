import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import { Paragraph } from '../src/components/paragraph';
import { Header } from '../src/components/header';
import { Image } from '../src/components/image';
import { Paper } from '../src/components/paper';
import { Container } from './utils';

const Center = Paper.extend`
  display: flex;
  justify-content: center;
  align-items: center;
`;

storiesOf('Page', module).add('Default', () => (
  <Container>
    <Paper>
      <Center>
        <Image width={500} height={500} />
      </Center>
      <Paper>
        <Header wrap words={1} size={2} />
      </Paper>
      <Paragraph paragraphs={3} lines={5} />
      <Paper>
        <Header wrap words={8} size={2} />
      </Paper>
      <Paragraph paragraphs={2} lines={5} />
      <Center>
        <Image width={250} height={250} />
      </Center>
      <Paragraph paragraphs={0} lines={9} />
    </Paper>
  </Container>
));
