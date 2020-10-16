import React from 'react'
import { storiesOf } from '@storybook/react';
import SearchInput from './SearchInput';

storiesOf('Atoms/Inputs', module)
	.add('Search', () => <SearchInput placeholder="Search" />)
