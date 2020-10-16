import React from 'react'
import { storiesOf } from '@storybook/react';
import PostButton from './PostButton';

storiesOf('Atoms/Buttons', module)
	.add('Send Button', () => <PostButton></PostButton>)
