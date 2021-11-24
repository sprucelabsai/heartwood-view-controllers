import { SpruceSchemas } from '@sprucelabs/mercury-types'
import { test, assert } from '@sprucelabs/test'
import { AbstractViewController, vcAssertUtil } from '../..'
import AbstractViewControllerTest from '../../tests/AbstractViewControllerTest'
import CardViewController from '../../viewControllers/Card.vc'
import FormViewController from '../../viewControllers/Form.vc'

type Card = SpruceSchemas.HeartwoodViewControllers.v2021_02_11.Card

class FancyCardViewController extends AbstractViewController<Card> {
	public cardVc: any
	public constructor(options: any) {
		super(options)
		this.cardVc = this.Controller('card', {})
	}

	public render(): Card {
		return this.cardVc.render()
	}
}

export default class AssertingInstanceOfTest extends AbstractViewControllerTest {
	protected static controllerMap = {
		fancy: FancyCardViewController,
	}

	@test()
	protected static hasInstanceOf() {
		assert.isFunction(vcAssertUtil.assertControllerInstanceOf)
	}

	@test()
	protected static throwsWhenPassedNoInstanceOf() {
		const vc = this.Controller('card', {})
		assert.doesThrow(() =>
			vcAssertUtil.assertControllerInstanceOf(vc, FormViewController)
		)
	}

	@test()
	protected static knowsWhenPassedCorrectClassReference() {
		const vc = this.Controller('card', {})
		vcAssertUtil.assertControllerInstanceOf(vc, CardViewController)
	}

	@test()
	protected static knowsWhenVcDelegatesRender() {
		//@ts-ignore
		const vc = this.Controller('fancy', {}) as any

		vcAssertUtil.assertControllerInstanceOf(vc, FancyCardViewController)
	}

	@test()
	protected static looksUp1ParentToCheckInstanceOf() {
		//@ts-ignore
		const model = this.render(this.Controller('fancy', {}))

		vcAssertUtil.assertControllerInstanceOf(
			model.controller as any,
			FancyCardViewController
		)
	}

	@test()
	protected static canCheckIfRendersAsInstanceOf() {
		const vc = this.Controller('fancy', {})

		assert.doesThrow(() =>
			vcAssertUtil.assertRendersAsInstanceOf(vc, FormViewController)
		)

		const match1 = vcAssertUtil.assertRendersAsInstanceOf(
			vc,
			CardViewController
		)

		//@ts-ignore
		assert.isEqual(match1, vc.cardVc)

		const match2 = vcAssertUtil.assertRendersAsInstanceOf(
			vc,
			FancyCardViewController
		)

		assert.isEqual(match2, vc)
	}
}
