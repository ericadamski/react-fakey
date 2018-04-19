import React from 'react';
import { storiesOf } from '@storybook/react';

import { Image } from '../src/components/image';

storiesOf('Image', module)
  .add('Default', () => <Image />)
  .add('Custom Width', () => <Image width={100} />)
  .add('Custom Height', () => <Image height={100} />)
  .add('Circle w/ height', () => <Image circle height={100} />)
  .add('Circle w/ width', () => <Image circle width={100} />)
  .add('Circle w/ both width and height', () => (
    <Image circle height={100} width={50} />
  ))
  .add('Custom Width and Height', () => <Image width={75} height={100} />);
