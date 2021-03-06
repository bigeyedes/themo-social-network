import React from 'react'
import { storiesOf } from '@storybook/react';
import UserAvatar from './UserAvatar';

storiesOf('Atoms/Avatas', module)
	.add('User avatar image', () => <UserAvatar></UserAvatar>)
	.add('User avatar empty', () => <UserAvatar empty></UserAvatar>)
