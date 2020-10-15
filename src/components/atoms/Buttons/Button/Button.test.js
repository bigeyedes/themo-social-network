import React from 'react'
import Button from './Button'
import renderer from 'react-test-renderer';
import 'jest-styled-components'

describe("Render button component", () => {
	test("Matches the snapshot", () => {
		const tree = renderer.create(<Button />).toJSON()
		expect(tree).toMatchSnapshot()
	});

	test("If is 0.7 opacity when hover", () => {
		const tree = renderer.create(<Button />).toJSON();
		expect(tree).toHaveStyleRule('opacity', '0.7', {
			modifier: ':hover',
		  })
	});

	test("If is black background when secondary props is passed", () => {
		const tree = renderer.create(<Button secondary></Button>).toJSON();
		expect(tree).toHaveStyleRule('background', 'black')
	});

});