import { buildSchema } from '@sprucelabs/schema'
import { SpruceSchemas } from '@sprucelabs/spruce-core-schemas'
import { test, assert } from '@sprucelabs/test'
import Authenticator from '../../../auth/Authenticator'
import buildBigForm from '../../../builders/buildBigForm'
import buildForm from '../../../builders/buildForm'
import AbstractViewControllerTest from '../../../tests/AbstractViewControllerTest'
import { DEMO_NUMBER, DEMO_NUMBER2 } from '../../../tests/constants'
import interactor from '../../../tests/utilities/interactor'
import { SkillViewController } from '../../../types/heartwood.types'

type SkillView = SpruceSchemas.HeartwoodViewControllers.v2021_02_11.SkillView

class GoodSkillViewController implements SkillViewController {
	private model: SkillView
	public constructor(model: SkillView) {
		this.model = model
	}

	public renderToolBelt() {
		return null
	}

	public async load() {}
	public triggerRender() {}

	public render() {
		return this.model
	}
}

export default class interactorTest extends AbstractViewControllerTest {
	protected static controllerMap = {
		good: GoodSkillViewController,
	}

	@test()
	protected static async canCreateinteractor() {
		assert.isTruthy(interactor)
	}

	@test.skip('find out how to test with wildcard demo numbers')
	protected static async loginFailsWithBadNumber() {
		await assert.doesThrowAsync(() =>
			interactor.submitLoginForm(this.LoginVc(), '666-000-0000')
		)
	}

	@test(`can login with ${DEMO_NUMBER}`, DEMO_NUMBER)
	@test(`can login with ${DEMO_NUMBER2}`, DEMO_NUMBER2)
	protected static async loginPassesWithGoodDemoNumber(phone: string) {
		let loggedInPersonId: string | undefined
		const auth = Authenticator.getInstance()

		auth.addEventListener('did-login', ({ person }) => {
			loggedInPersonId = person.id
		})

		const { person } = await this.mercury.loginAsDemoPerson(phone)

		await interactor.submitLoginForm(this.LoginVc(), phone)

		assert.isTrue(auth.isLoggedIn())
		assert.isEqual(loggedInPersonId, person.id)
	}

	@test()
	protected static async cantClickFooterActionInFormWithoutOne() {
		const formVc = this.Controller('form', {
			shouldShowSubmitControls: false,
			schema: {
				id: 'test',
				fields: {},
			},
			sections: [],
		})

		await assert.doesThrowAsync(() => interactor.clickPrimaryInFooter(formVc))
	}

	@test()
	protected static async submitsFormIfThereIsASubmitButton() {
		const formVc = this.Controller('form', {
			schema: {
				id: 'test',
				fields: {},
			},
			sections: [],
		})

		await interactor.clickPrimaryInFooter(formVc)
	}

	@test('can submit big form with 2 sections', [
		{
			fields: ['first'],
		},
		{
			fields: ['second'],
		},
	])
	@test('can submit big form with 3 sections', [
		{
			fields: ['first'],
		},
		{
			fields: ['second'],
		},
		{
			fields: ['third'],
		},
	])
	protected static async canSubmitBigFormAllAtOnce(sections: any) {
		let wasHit = false

		const bigFormVc = this.Controller(
			'bigForm',
			buildBigForm({
				onSubmit: () => {
					wasHit = true
				},
				schema: buildSchema({
					id: 'test',
					fields: {
						first: {
							type: 'text',
						},
						second: {
							type: 'text',
						},
						third: {
							type: 'text',
						},
					},
				}),
				sections,
			})
		)

		await interactor.submitForm(bigFormVc)

		assert.isTrue(wasHit)
	}

	@test()
	protected static async canClickButtonInRow() {
		const vc = this.Controller('list', {
			rows: [
				{
					id: 'first',
					cells: [
						{
							button: {
								id: 'edit',
								onClick: () => {},
							},
						},
					],
				},
				{
					id: 'second',
					cells: [
						{
							button: {
								id: 'stamp',
								onClick: () => {},
							},
						},
						{
							button: {
								id: 'champ',
								onClick: () => {},
							},
						},
					],
				},
			],
		})

		await assert.doesThrowAsync(() =>
			interactor.clickButtonInRow(vc, 5, 'edit')
		)
		await assert.doesThrowAsync(() =>
			interactor.clickButtonInRow(vc, 0, 'stamp')
		)
		await assert.doesThrowAsync(() =>
			interactor.clickButtonInRow(vc, 0, 'champ')
		)
		await assert.doesThrowAsync(() =>
			interactor.clickButtonInRow(vc, 'first', 'champ')
		)

		await interactor.clickButtonInRow(vc, 0, 'edit')
		await interactor.clickButtonInRow(vc, 'first', 'edit')
		await interactor.clickButtonInRow(vc, 1, 'stamp')
		await interactor.clickButtonInRow(vc, 1, 'champ')
		await interactor.clickButtonInRow(vc, 'second', 'champ')
	}

	@test()
	protected static async clickingButtonInRowTriggersCallback() {
		let wasHit = false
		const vc = this.Controller('list', {
			rows: [
				{
					id: 'first',
					cells: [
						{
							button: {
								id: 'edit',
								onClick: () => {
									wasHit = true
								},
							},
						},
					],
				},
			],
		})

		await interactor.clickButtonInRow(vc, 'first', 'edit')

		assert.isTrue(wasHit)
	}

	@test()
	protected static async canClickButtonsInCard() {
		const badButton = `${new Date().getTime() * Math.random()}`
		const button1Id = `${new Date().getTime() * Math.random()}`
		const button2Id = `${new Date().getTime() * Math.random()}`
		const button3Id = `${new Date().getTime() * Math.random()}`
		const button4Id = `${new Date().getTime() * Math.random()}`

		const vc = this.Controller('card', {
			body: {
				sections: [
					{
						buttons: [
							{
								id: button1Id,
								onClick: () => {},
							},
							{
								id: button2Id,
								onClick: () => {},
							},
						],
					},
					{
						buttons: [
							{
								id: button3Id,
								onClick: () => {},
							},
						],
					},
				],
			},

			footer: {
				buttons: [
					{
						id: button4Id,
						onClick: () => {},
					},
				],
			},
		})

		await assert.doesThrowAsync(() => interactor.clickButton(vc, badButton))

		await interactor.clickButton(vc, button1Id)
		await interactor.clickButton(vc, button2Id)
		await interactor.clickButton(vc, button3Id)
		await interactor.clickButton(vc, button4Id)
	}

	@test()
	protected static async clickingButtonWaitsUntilFinished() {
		const button1Id = `${new Date().getTime() * Math.random()}`
		let wasHit = false
		let lateHit = false

		const vc = this.Controller('card', {
			body: {
				sections: [
					{
						buttons: [
							{
								id: button1Id,
								onClick: async () => {
									wasHit = true
									await new Promise((resolve) => setTimeout(resolve, 10))
									lateHit = true
								},
							},
						],
					},
				],
			},
		})

		const promise = interactor.clickButton(vc, button1Id)
		assert.isFalse(lateHit)
		assert.isTrue(wasHit)

		await promise

		assert.isTrue(lateHit)
	}

	@test()
	protected static async submittingFormThatIsDisabledThrows() {
		const formVc = this.Controller(
			'form',
			buildForm({
				shouldShowSubmitControls: false,
				isEnabled: false,
				schema: {
					id: 'test',
					fields: {},
				},
				sections: [],
			})
		)

		await assert.doesThrowAsync(() => interactor.submitForm(formVc))
	}

	private static LoginVc() {
		return this.Controller('login', {})
	}
}
