/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { validateSchemaValues } from '@sprucelabs/schema'
import { SpruceSchemas } from '@sprucelabs/spruce-core-schemas'
import { test, assert } from '@sprucelabs/test'
import skillViewSchema from '#spruce/schemas/heartwoodViewControllers/v2021_02_11/skillView.schema'
import AbstractSkillViewController from '../../skillViewControllers/Abstract.svc'
import AbstractViewControllerTest from '../../tests/AbstractViewControllerTest'
import vcAssertUtil from '../../tests/utilities/vcAssert.utility'
import { SkillViewController } from '../../types/heartwood.types'
import CardViewController from '../../viewControllers/Card.vc'
import FormViewController from '../../viewControllers/Form.vc'
import ListViewController, { ListRow } from '../../viewControllers/list/List.vc'
import { ListCellModel } from '../../viewControllers/list/ListCell.vc'

type SkillView = SpruceSchemas.HeartwoodViewControllers.v2021_02_11.SkillView

declare module '../../types/heartwood.types' {
	interface ViewControllerMap {
		good: GoodSkillViewController
		bad: BadSkillViewController
		newCard: NewTestingCardViewController
		goodWithDialog: GoodWithDialogSkillViewController
	}
	interface ViewControllerOptionsMap {
		good: SkillView
		bad: any
	}
}

class BadSkillViewController {
	public render() {
		return {}
	}
}

class GoodSkillViewController implements SkillViewController {
	private model: SkillView
	public constructor(model: SkillView) {
		this.model = model
	}

	public async load() {}
	public triggerRender() {}

	public render() {
		return this.model
	}
}

class GoodWithDialogSkillViewController extends AbstractSkillViewController {
	private model: SkillView

	//@ts-ignore
	public constructor(model: SkillView) {
		//@ts-ignore
		super(model)
		this.model = model
	}

	public async load() {
		//@ts-ignore
		await this.renderInDialog({})
	}

	public render() {
		return this.model
	}
}

class NewTestingCardViewController extends CardViewController {}

export default class VcAssertUtilTest extends AbstractViewControllerTest {
	protected static controllerMap = {
		bad: BadSkillViewController,
		good: GoodSkillViewController,
		goodWithDialog: GoodWithDialogSkillViewController,
		newCard: NewTestingCardViewController,
	}

	@test()
	protected static knowsIfNotRenderingCard() {
		assert.isFunction(vcAssertUtil.assertSkillViewRendersCard)
		const vc = this.BadController()
		//@ts-ignore
		assert.doesThrow(() => vcAssertUtil.assertSkillViewRendersCard(vc))
		//@ts-ignore
		assert.doesThrow(() => vcAssertUtil.assertSkillViewRendersCards(vc))
	}

	@test()
	protected static canAssertNumberOfCards() {
		const vc = this.BadController()
		//@ts-ignore
		let cardVcs = vcAssertUtil.assertSkillViewRendersCards(vc, 0)
		assert.isLength(cardVcs, 0)

		const goodVc = this.GoodController({
			layouts: [
				{
					cards: [
						{
							header: { title: 'hey!' },
						},
					],
				},
			],
		})

		assert.doesThrow(() =>
			//@ts-ignore
			vcAssertUtil.assertSkillViewRendersCards(goodVc, 0)
		)

		//@ts-ignore
		cardVcs = vcAssertUtil.assertSkillViewRendersCards(goodVc, 1)
		assert.isLength(cardVcs, 1)

		//@ts-ignore
		cardVcs = vcAssertUtil.assertSkillViewRendersCards(goodVc)
		assert.isLength(cardVcs, 1)
	}

	@test()
	protected static maintainsCardVcsInRendersCard() {
		const cardVc = this.Controller('card', {
			header: { title: 'test' },
		})

		const goodVc = this.GoodController({
			layouts: [
				{
					cards: [cardVc.render()],
				},
			],
		})

		//@ts-ignore
		const matchVc = vcAssertUtil.assertSkillViewRendersCard(goodVc)

		assert.isEqual(matchVc, cardVc)
	}

	@test()
	protected static maintainsCardVcsInRendersCards() {
		const cardVc = this.Controller('card', {
			header: { title: 'test' },
		})

		const goodVc = this.GoodController({
			layouts: [
				{
					cards: [cardVc.render()],
				},
			],
		})

		//@ts-ignore
		const cardVcs = vcAssertUtil.assertSkillViewRendersCards(goodVc, 1)

		assert.isEqual(cardVcs[0], cardVc)
	}

	@test()
	protected static async knowsIfCardInFirstLayout() {
		const vc = this.GoodController({
			layouts: [
				{
					cards: [
						{
							header: {
								title: 'go!',
							},
						},
					],
				},
			],
		})

		//@ts-ignore
		const cardVc = vcAssertUtil.assertSkillViewRendersCard(vc)

		assert.isEqual(cardVc.getHeaderTitle(), 'go!')
	}

	@test()
	protected static async knowsIfCardInSecondLayout() {
		const vc = this.GoodController({
			layouts: [
				{},
				{
					cards: [
						{
							header: {
								title: 'go2!',
							},
						},
					],
				},
			],
		})

		//@ts-ignore
		const cardVc = vcAssertUtil.assertSkillViewRendersCard(vc)

		assert.isEqual(cardVc.getHeaderTitle(), 'go2!')
	}

	@test()
	protected static assertingIfCardBodyIsLoading() {
		const vc = this.Controller('card', {
			body: {},
		})

		assert.doesThrow(() => vcAssertUtil.assertCardBodyIsLoading(vc))
		vcAssertUtil.assertCardBodyIsNotLoading(vc)

		vc.setIsBodyLoading(true)

		vcAssertUtil.assertCardBodyIsLoading(vc)
		assert.doesThrow(() => vcAssertUtil.assertCardBodyIsNotLoading(vc))
	}

	@test('fails with empty cells', [])
	@test('fails with cells that dont match', [
		{
			text: {
				content: 'hey',
			},
		},
	])
	protected static throwsIfRowDoesNotRenderContent(cells: ListCellModel[]) {
		const vc = this.Controller('list', {
			rows: [
				{
					cells,
				},
			],
		})

		assert.isFunction(vcAssertUtil.assertRowRendersContent)
		assert.doesThrow(() =>
			vcAssertUtil.assertRowRendersContent(vc.getRowVc(0), 'waka')
		)
		assert.doesThrow(() =>
			vcAssertUtil.assertRowRendersContent(vc.getRowVc(0), 'undefined')
		)
	}

	@test(
		'knows if renders text content 1',
		{ cells: [{ text: { content: 'waka' } }] },
		'waka'
	)
	@test(
		'knows if renders text content 2',
		{ cells: [{ text: { content: `dingy` } }] },
		'dingy'
	)
	@test(
		'knows if renders text content 3',
		{ cells: [{ text: { content: `dingy` }, subText: { content: 'thingy' } }] },
		'thingy'
	)
	@test(
		'knows if renders text content by partial match',
		{ cells: [{ text: { content: `dingy the thingy` } }] },
		'dingy'
	)
	@test(
		'knows if renders text html by partial match',
		{ cells: [{ text: { html: `dingy the thingy` } }] },
		'dingy'
	)
	@test(
		'knows if renders subText content',
		{ cells: [{ subText: { content: `dingy` } }] },
		'dingy'
	)
	@test(
		'knows if renders subText html',
		{ cells: [{ subText: { html: `dingy` } }] },
		'dingy'
	)
	@test(
		'knows if renders text content in cell 2',
		{ cells: [{ text: { content: 'taco' } }, { text: { content: 'waka' } }] },
		'waka'
	)
	@test(
		'knows if renders button label',
		{ cells: [{ button: { label: 'waka' } }] },
		'waka'
	)
	@test(
		'knows if renders button label ignoring case',
		{ cells: [{ button: { label: 'Waka' } }] },
		'waka'
	)
	@test(
		'knows if renders button label ignoring case 2',
		{ cells: [{ button: { label: 'Waka' } }] },
		'Waka'
	)
	protected static knowsIfRowRendersContent(row: ListRow, search: string) {
		const vc = this.Controller('list', {
			rows: [row],
		})

		vcAssertUtil.assertRowRendersContent(vc.getRowVc(0), search)
	}

	@test()
	protected static knowsIfSkillViewDoesNotRenderViewController() {
		const model: SkillView = {
			layouts: [{}],
		}

		const vc = this.Controller('good', model)
		validateSchemaValues(skillViewSchema, this.render(vc))

		assert.doesThrow(() =>
			vcAssertUtil.assertSkillViewRendersViewController(vc, FormViewController)
		)
	}

	@test('knows if form rendered in first layout, first card, first section', {
		VcClass: FormViewController,
		layoutIdx: 0,
		cardIdx: 0,
		sectionIdx: 0,
		bodyGenerator: () => ({
			form: VcAssertUtilTest.renderEmptyForm(),
		}),
	})
	@test('knows if form rendered in random layout, first card, first section', {
		VcClass: FormViewController,
		cardIdx: 0,
		sectionIdx: 0,
		bodyGenerator: () => ({
			form: VcAssertUtilTest.renderEmptyForm(),
		}),
	})
	@test('knows if form rendered in random layout, random card, first section', {
		VcClass: FormViewController,
		bodyGenerator: () => ({
			form: VcAssertUtilTest.renderEmptyForm(),
		}),
	})
	@test(
		'knows if form rendered in random layout, random card, random section',
		{
			VcClass: FormViewController,
			bodyGenerator: () => ({
				form: VcAssertUtilTest.renderEmptyForm(),
			}),
		}
	)
	@test('knows if list is renderd', {
		VcClass: ListViewController,
		bodyGenerator: () => ({
			list: VcAssertUtilTest.renderEmptyList(),
		}),
	})
	@test('knows if list is not renderd', {
		VcClass: ListViewController,
		layoutIdx: 0,
		cardIdx: 0,
		sectionIdx: 0,
		shouldPass: false,
		bodyGenerator: () => ({
			form: VcAssertUtilTest.renderEmptyForm(),
		}),
	})
	protected static knowsIfSkillViewRendersViewController(options: {
		layoutIdx?: number
		cardIdx?: number
		sectionIdx?: number
		shouldPass?: boolean
		bodyGenerator: () => SpruceSchemas.HeartwoodViewControllers.v2021_02_11.CardSection
		VcClass: any
	}) {
		const {
			layoutIdx = Math.round(Math.random() * 10),
			cardIdx = Math.round(Math.random() * 10),
			sectionIdx = Math.round(Math.random() * 10),
			shouldPass = true,
			VcClass,
			bodyGenerator,
		} = options

		const bodyModel = { ...bodyGenerator() }

		const model: SkillView = {
			layouts: [],
		}

		while (model.layouts.length <= layoutIdx) {
			model.layouts.push({
				cards: [],
			})
		}

		while (model.layouts[layoutIdx].cards!.length <= cardIdx) {
			model.layouts[layoutIdx].cards!.push({
				body: {
					sections: [],
				},
			})
		}

		while (
			//@ts-ignore
			model.layouts[layoutIdx].cards[cardIdx].body.sections.length <= sectionIdx
		) {
			//@ts-ignore
			model.layouts[layoutIdx].cards[cardIdx].body.sections!.push({})
		}

		//@ts-ignore
		model.layouts[layoutIdx]!.cards[cardIdx].body.sections[sectionIdx] =
			bodyModel

		const vc = this.Controller('good', model)

		if (shouldPass) {
			const match = vcAssertUtil.assertSkillViewRendersViewController(
				vc,
				VcClass
			)
			assert.isTrue(match instanceof VcClass)
		} else {
			assert.doesThrow(() =>
				vcAssertUtil.assertSkillViewRendersViewController(vc, VcClass)
			)
		}
	}

	@test()
	protected static knowsIfCardIsOfType() {
		const vc = this.Controller('good', {
			layouts: [
				{
					cards: [this.Controller('newCard', {}).render()],
				},
			],
		})

		vcAssertUtil.assertSkillViewRendersViewController(
			vc,
			NewTestingCardViewController
		)

		assert.doesThrow(() =>
			vcAssertUtil.assertSkillViewDoesNotRenderViewController(
				vc,
				NewTestingCardViewController
			)
		)
	}

	@test()
	protected static async knowsIfCardIsNotOfType() {
		const vc = this.Controller('good', {
			layouts: [
				{
					cards: [this.Controller('newCard', {}).render()],
				},
			],
		})

		await assert.doesThrowAsync(() =>
			vcAssertUtil.assertSkillViewRendersViewController(vc, ListViewController)
		)

		vcAssertUtil.assertSkillViewDoesNotRenderViewController(
			vc,
			ListViewController
		)
	}

	@test()
	protected static async knowsIfRenderingDialog() {
		const vc = this.Controller('goodWithDialog', {})

		await vcAssertUtil.assertRendersDialog(vc, () => vc.load())

		await assert.doesThrowAsync(() =>
			vcAssertUtil.assertDoesNotRenderDialog(vc, () => vc.load())
		)
	}

	@test()
	protected static async knowsIfNotRenderingDialog() {
		const vc = this.Controller('good', {
			layouts: [],
		})

		await vcAssertUtil.assertDoesNotRenderDialog(vc, () => vc.load())

		await assert.doesThrowAsync(() =>
			vcAssertUtil.assertRendersDialog(vc, () => vc.load())
		)
	}

	private static BadController() {
		//@ts-ignore
		return this.Controller('bad') as BadSkillViewController
	}

	private static GoodController(model: SkillView) {
		//@ts-ignore
		return this.Controller('good', model) as BadSkillViewController
	}

	private static renderEmptyForm() {
		return this.Controller('form', {
			schema: {
				fields: {},
			},
			sections: [],
		}).render()
	}

	private static renderEmptyList() {
		return this.Controller('list', {
			rows: [],
		}).render()
	}
}
