import { test, assert } from '@sprucelabs/test'
import { errorAssertUtil } from '@sprucelabs/test-utils'
import AbstractViewControllerTest from '../../tests/AbstractViewControllerTest'
import AbstractViewController from '../../viewControllers/Abstract.vc'
import ViewControllerFactory from '../../viewControllers/ViewControllerFactory'

interface ViewModel {}

export class TestViewController extends AbstractViewController<ViewModel> {
	public invocations = []
	public constructorOptions: any
	public constructor(options: any) {
		super(options)
		this.constructorOptions = options
	}
	public getVcFactory() {
		return this.vcFactory
	}
	public render() {
		return {}
	}
}

export class TestViewControllerWithId extends AbstractViewController<ViewModel> {
	public id = 'throws'
	public invocations = []
	public constructorOptions: any
	public constructor(options: any) {
		super(options)
		this.constructorOptions = options
	}
	public getVcFactory() {
		return this.vcFactory
	}
	public render() {
		return {}
	}
}

declare module '../../types/heartwood.types' {
	interface ViewControllerMap {
		test: typeof TestViewController
	}
}

export default class BuildingViewControllersTest extends AbstractViewControllerTest {
	protected static controllerMap = {
		test: TestViewController,
	}
	private static factory: ViewControllerFactory

	public static async beforeEach() {
		await super.beforeEach()
		this.factory = this.Factory()
	}

	@test()
	protected static async canCreateBuildingViewControllers() {
		assert.isTruthy(this.factory)
	}

	@test()
	protected static async throwsWithoutSettingConnectToApiHandler() {
		const err = await assert.doesThrowAsync(() =>
			//@ts-ignore
			ViewControllerFactory.Factory()
		)
		errorAssertUtil.assertError(err, 'MISSING_PARAMETERS', {
			parameters: ['connectToApi'],
		})
	}

	@test()
	protected static async throwsWithInvalidName() {
		//@ts-ignore
		const err = assert.doesThrow(() => this.factory.Controller('bad_name'))
		errorAssertUtil.assertError(err, 'INVALID_VIEW_CONTROLLER_NAME')
	}

	@test()
	protected static hasController() {
		assert.isTrue(this.factory.hasController('test'))
	}

	@test()
	protected static doesNotHaveController() {
		assert.isFalse(this.factory.hasController('test-not-found'))
	}

	@test()
	protected static async getsVcFactoryInConstructorOptions() {
		//@ts-ignore
		const vc = this.factory.Controller('test', {}) as TestViewController
		assert.isTruthy(vc.constructorOptions.vcFactory)
	}

	@test()
	protected static async canGetVcFactory() {
		//@ts-ignore
		const vc = this.factory.Controller('test', {}) as TestViewController

		assert.isTruthy(vc.getVcFactory())
	}

	@test()
	protected static builtVcGetsConnectToApiHandler() {
		//@ts-ignore
		const vc = this.factory.Controller('test', {}) as TestViewController
		assert.isTruthy(vc.constructorOptions.connectToApi)
	}

	@test()
	protected static canMixinControllers() {
		this.factory.mixinControllers({
			test2: TestViewController,
		})

		//@ts-ignore
		const vc = this.factory.Controller('test2', {}) as TestViewController
		assert.isTruthy(vc)

		//@ts-ignore
		const vc2 = this.factory.Controller('test', {}) as TestViewController
		assert.isTruthy(vc2)
	}

	@test()
	protected static controllersGetIdsSet() {
		this.factory.mixinControllers({
			test2: TestViewController,
		})

		//@ts-ignore
		const vc = this.factory.Controller('test2', {}) as TestViewController
		assert.isTruthy(vc)

		//@ts-ignore
		assert.isEqual(vc.id, 'test2')
	}

	@test()
	protected static throwsIfViewControllerSetsIdProperty() {
		this.factory.mixinControllers({
			test3: TestViewControllerWithId,
		})

		//@ts-ignore
		const err = assert.doesThrow(() => this.factory.Controller('test3'))

		errorAssertUtil.assertError(err, 'INVALID_SKILL_VIEW_CONTROLLER')
	}
}
