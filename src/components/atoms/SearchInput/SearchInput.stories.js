import React from 'react'
import { storiesOf } from '@storybook/react';
import SearchInput from './SearchInput';

storiesOf('Atoms', module)
	.add('Search', () => <SearchInput placeholder="Search" />)
