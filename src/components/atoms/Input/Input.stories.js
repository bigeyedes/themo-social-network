import React from 'react'
import { storiesOf } from '@storybook/react';
import Input from './Input';

storiesOf('Atoms/Inputs', module)
	.add('Input', () => <Input placeholder="Type..." />)
