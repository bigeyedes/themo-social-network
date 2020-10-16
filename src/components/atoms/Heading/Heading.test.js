import React from 'react'
import renderer from 'react-test-renderer';
import 'jest-styled-components'
import Heading from './Heading'

describe("Render heading component", () => {
	test("Matches the snapshot", () => {
		const tree = renderer.create(<Heading />).toJSON()
		expect(tree).toMatchSnapshot() 
	});

	test("If have color grey", () => {
		const tree = renderer.create(<Heading />).toJSON();
		expect(tree).toHaveStyleRule('color', 'grey')
	});

	test("If have heading text", () => {
		const tree = renderer.create(<Heading />).toJSON();
		expect(tree).getByText('Heading')
	});

});