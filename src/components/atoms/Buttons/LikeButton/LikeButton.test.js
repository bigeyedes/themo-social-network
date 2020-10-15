import React from 'react'
import renderer from 'react-test-renderer';
import 'jest-styled-components'
import LikeButton from './LikeButton'
import likeOutline from './like-outline.svg'
import likeActive from './like-active.svg'

describe("Render like button component", () => {
	test("Matches the snapshot", () => {
		const tree = renderer.create(<LikeButton />).toJSON()
		expect(tree).toMatchSnapshot()
	});

	test("If is 0.7 opacity when hover", () => {
		const tree = renderer.create(<LikeButton />).toJSON();
		expect(tree).toHaveStyleRule('opacity', '0.7', {
			modifier: ':hover',
		})
	});

	test("If have standard background image", () => {
		const tree = renderer.create(<LikeButton />).toJSON();
		expect(tree).toHaveStyleRule('background-image', `url(${likeOutline})`)
	});

	test("If change background image active 'liked' is passed", () => {
		const tree = renderer.create(<LikeButton liked/>).toJSON();
		expect(tree).toHaveStyleRule('background-image', `url(${likeActive})`)
	});

	

});