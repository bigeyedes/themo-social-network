import React from 'react'
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Atoms/Buttons', module)
	.add('Primary Button', () => <Button>Primary</Button>)
	.add('Secondary Button', () => <Button secondary>Secondary</Button>)