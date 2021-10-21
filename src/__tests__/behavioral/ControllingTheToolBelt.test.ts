import { SpruceSchemas } from '@sprucelabs/mercury-types'
import { test, assert } from '@sprucelabs/test'
import { errorAssertUtil } from '@sprucelabs/test-utils'
import { renderUtil, vcAssertUtil } from '../..'
import AbstractViewControllerTest from '../../tests/AbstractViewControllerTest'
import ToolBeltViewController from '../../viewControllers/ToolBelt.vc'

type ToolBeltTool =
	SpruceSchemas.HeartwoodViewControllers.v2021_02_11.ToolBeltTool

export default class ControllingTheToolBeltTest extends AbstractViewControllerTest {
	protected static controllerMap = {}
	protected static vc: ToolBeltViewController

	protected static async beforeEach() {
		await super.beforeEach()
		this.vc = this.Controller('toolBelt', {})
	}

	@test()
	protected static async canCreateControllingTheToolBelt() {
		const vc = this.Controller('toolBelt', {})
		assert.isTruthy(vc)
	}

	@test('renders model passed to constructor 1', {
		tools: [],
	})
	@test('renders model passed to constructor 2', {
		tools: [
			{
				linIcon: 'waka',
			},
		],
	})
	protected static rendersToolBeltPassedToIt(model: any) {
		const vc = this.Controller('toolBelt', model)
		const actual = renderUtil.render(vc)
		delete actual.controller

		assert.isEqualDeep(actual, model)
	}

	@test()
	protected static canAddTool() {
		assert.isFunction(this.vc.addTool)

		const tool: ToolBeltTool = {
			id: 'maps',
			lineIcon: 'map',
			card: {} as any,
		}
		this.vc.addTool(tool)

		const model = renderUtil.render(this.vc)

		assert.isEqualDeep(model.tools[0], tool)
	}

	@test()
	protected static canAdd2Tools() {
		this.vc.addTool({
			id: 'maps',
			lineIcon: 'map',
			card: {} as any,
		})

		this.vc.addTool({
			id: 'maps_2',
			lineIcon: 'map',
			card: {} as any,
		})

		const model = renderUtil.render(this.vc)

		assert.isEqualDeep(model.tools, [
			{
				id: 'maps',
				lineIcon: 'map',
				card: {} as any,
			},
			{
				id: 'maps_2',
				lineIcon: 'map',
				card: {} as any,
			},
		])
	}

	@test()
	protected static cantAddToolWithSameSlugTwice() {
		this.vc.addTool({
			id: 'maps',
			lineIcon: 'map',
			card: {} as any,
		})

		const err = assert.doesThrow(() =>
			this.vc.addTool({
				id: 'maps',
				lineIcon: 'map',
				card: {} as any,
			})
		)

		errorAssertUtil.assertError(err, 'DUPLICATE_TOOL_ID')
	}

	@test()
	protected static cantRemoveToolThatAlreadyExists() {
		const err = assert.doesThrow(() => this.vc.removeTool('map'))
		errorAssertUtil.assertError(err, 'INVALID_PARAMETERS', {
			parameters: ['id'],
		})
	}

	@test()
	protected static canRemoveTool() {
		this.vc.addTool({
			id: 'maps',
			lineIcon: 'map',
			card: {} as any,
		})

		this.vc.removeTool('maps')
		const model = renderUtil.render(this.vc)
		assert.isLength(model.tools, 0)
	}

	@test()
	protected static canRemoveAfterAddingTwice() {
		this.vc.addTool({
			id: 'maps',
			lineIcon: 'map',
			card: {} as any,
		})

		this.vc.addTool({
			id: 'maps_2',
			lineIcon: 'map',
			card: {} as any,
		})

		this.vc.removeTool('maps')
		const model = renderUtil.render(this.vc)
		assert.isEqualDeep(model.tools[0], {
			id: 'maps_2',
			lineIcon: 'map',
			card: {} as any,
		})
	}

	@test()
	protected static tiggersRenderWhenAddingAndRemovingTool() {
		this.vc.addTool({ id: 'go', card: {} as any, lineIcon: 'video' })
		vcAssertUtil.assertTriggerRenderCount(this.vc, 1)
		this.vc.removeTool('go')
		vcAssertUtil.assertTriggerRenderCount(this.vc, 2)
	}

	@test()
	protected static renderReturnsController() {
		const model = this.render(this.vc)
		assert.isTrue(model.controller === this.vc)
	}
}
