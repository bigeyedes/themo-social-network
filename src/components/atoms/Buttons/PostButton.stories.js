import React from 'react'
import { storiesOf } from '@storybook/react';
import PostButton from './PostButton';

storiesOf('Button', module)
	.add('PostButton', () => <PostButton></PostButton>)
