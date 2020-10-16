import React from 'react'
import renderer from 'react-test-renderer';
import 'jest-styled-components'
import PostButton from './PostButton'
import sendIcon from './send.svg'

describe("Render send button component", () => {
	test("Matches the snapshot", () => {
		const tree = renderer.create(<PostButton />).toJSON()
		expect(tree).toMatchSnapshot() 
	});

	test("If is 0.7 opacity when hover", () => {
		const tree = renderer.create(<PostButton />).toJSON();
		expect(tree).toHaveStyleRule('opacity', '0.7', {
			modifier: ':hover',
		})
	});

	test("If have standard background image", () => {
		const tree = renderer.create(<PostButton />).toJSON();
		expect(tree).toHaveStyleRule('background-image', `url(${sendIcon})`)
	});

});