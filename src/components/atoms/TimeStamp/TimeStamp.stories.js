import React from 'react'
import { storiesOf } from '@storybook/react';
import TimeStamp from './TimeStamp';

storiesOf('Atoms', module)
	.add('TimeStamp', () => <TimeStamp>22.09.2020 | 14:48</TimeStamp>)
