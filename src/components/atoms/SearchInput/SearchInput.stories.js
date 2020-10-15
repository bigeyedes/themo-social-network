import React from 'react'
import { storiesOf } from '@storybook/react';
import SearchInput from './SearchInput';

storiesOf('SearchInput', module)
	.add('Search', () => <SearchInput placeholder="Search" />)
