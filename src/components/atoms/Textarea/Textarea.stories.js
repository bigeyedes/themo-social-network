import React from 'react'
import { storiesOf } from '@storybook/react';
import Textarea from './Textarea';

storiesOf('Atoms/Textarea', module)
	.add('Post', () => <Textarea rows="5" cols="30" placeholder="Whats on your mind?"></Textarea>)