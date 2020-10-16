import React from 'react'
import { storiesOf } from '@storybook/react';
import LikeButton from './LikeButton';

storiesOf('Atoms/Buttons', module)
	.add('Like button normal', () => <LikeButton></LikeButton>)
	.add('Like button active', () => <LikeButton liked></LikeButton>)
