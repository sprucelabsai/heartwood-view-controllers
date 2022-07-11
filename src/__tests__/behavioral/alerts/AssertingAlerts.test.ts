import { SpruceSchemas } from '@sprucelabs/mercury-types'
import { test, assert } from '@sprucelabs/test'
import AbstractSkillViewController from '../../../skillViewControllers/Abstract.svc'
import AbstractViewControllerTest from '../../../tests/AbstractViewControllerTest'
import vcAssert from '../../../tests/utilities/vcAssert'

class SuccessAlertSkillViewController extends AbstractSkillViewController {
	public afterAlertWasHit = false
	public async renderSuccess() {
		await this.alert({
			style: 'success',
			message: 'yay bro!',
		})
	}

	public async showWithStyle(style: string) {
		await this.alert({
			style: style as any,
			message: 'yay bro!',
		})
	}

	public async doNothing() {}

	public async operationAfterAlert() {
		await this.alert({ message: 'an alert!' })
		this.afterAlertWasHit = true
	}

	public render(): SpruceSchemas.HeartwoodViewControllers.v2021_02_11.SkillView {
		return {
			layouts: [],
		}
	}
}

export default class AssertingAlertsTest extends AbstractViewControllerTest {
	protected static controllerMap = {
		'success.root': SuccessAlertSkillViewController,
	}
	private static vc: SuccessAlertSkillViewController

	protected static async beforeEach() {
		await super.beforeEach()
		this.vc = this.Vc()
	}

	@test()
	protected static async throwsWhenNothingRendered() {
		await assert.doesThrowAsync(() =>
			vcAssert.assertRendersSuccessAlert(this.vc, () => this.vc.doNothing())
		)
	}

	@test()
	protected static async doesNotThrowWhenSuccessRendered() {
		await vcAssert.assertRendersSuccessAlert(this.vc, () =>
			this.vc.renderSuccess()
		)

		await assert.doesThrowAsync(() =>
			vcAssert.assertRendersAlert(this.vc, () => this.vc.renderSuccess())
		)
	}

	@test()
	protected static async throwsWhenAnyOtherAlertStyleRendered() {
		const style = 'info'

		await assert.doesThrowAsync(() =>
			vcAssert.assertRendersSuccessAlert(this.vc, () =>
				this.vc.showWithStyle(style)
			)
		)
	}

	@test()
	protected static async hidingDialogLetsHandlerComplete() {
		const vc = await vcAssert.assertRendersAlert(this.vc, () =>
			this.vc.operationAfterAlert()
		)

		await vc.hide()

		assert.isTrue(this.vc.afterAlertWasHit)
	}

	private static Vc() {
		return this.Controller(
			'success.root' as any,
			{}
		) as SuccessAlertSkillViewController
	}
}