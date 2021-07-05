import { test, assert } from '@sprucelabs/test'
import { errorAssertUtil } from '@sprucelabs/test-utils'
import AbstractViewControllerTest from '../../../tests/AbstractViewControllerTest'
import interactionUtil from '../../../tests/utilities/interaction.utility'
import vcAssertUtil from '../../../tests/utilities/vcAssert.utility'
import DialogViewController from '../../../viewControllers/Dialog.vc'
import EditFormBuilderSectionViewController from '../../../viewControllers/formBuilder/EditBuilderSection.vc'
import FormBuilderViewController from '../../../viewControllers/formBuilder/FormBuilder.vc'

export default class EditingAFormBuilderSectionTest extends AbstractViewControllerTest {
	private static formBuilderVc: FormBuilderViewController
	protected static controllerMap = {
		editFormBuilderSection: EditFormBuilderSectionViewController,
	}

	protected static async beforeEach() {
		await super.beforeEach()
		this.formBuilderVc = this.Controller('formBuilder', {})
	}

	@test()
	protected static handlesClickingEditSection() {
		assert.isFunction(this.formBuilderVc.handleClickEditSection)
	}

	@test('cant click bad section -1', -1)
	protected static async cantClickBadSection(sectionIdx: number) {
		const err = await assert.doesThrowAsync(() =>
			this.formBuilderVc.handleClickEditSection(sectionIdx)
		)

		errorAssertUtil.assertError(err, 'INVALID_PARAMETERS', {
			parameters: ['sectionIdx'],
		})
	}

	@test('sets instructions 1', 'Some instructions.')
	@test('sets instructions 1', 'Some instructions 2.')
	protected static async setsInstructionsSettings(text: string) {
		const pageVc = this.formBuilderVc.getPageVc(0)

		pageVc.updateSection(0, {
			title: 'My section title',
			text,
		})

		const { formVc, dialogVc } = await this.simulateEditSectionClick(0)

		assert.isEqual(dialogVc.getCardVc().getHeaderTitle(), 'My section title')
		assert.isEqualDeep(formVc.getValues(), {
			title: 'My section title',
			type: 'text',
			text,
		})
	}

	@test()
	protected static async setsProperFormFieldsWhenEditClicked() {
		const pageVc = this.formBuilderVc.getPageVc(0)

		pageVc.updateSectionTitle(0, 'My form section title')

		pageVc.addField(0, { label: 'waka1' })
		pageVc.addField(0, { label: 'waka2', type: 'select' })
		pageVc.addField(0, { label: 'waka3' })

		const { formVc, dialogVc, builderSectionVc } =
			await this.simulateEditSectionClick(0)

		assert.isEqual(
			dialogVc.getCardVc().getHeaderTitle(),
			'My form section title'
		)
		assert.isEqualDeep(formVc.getValues(), {
			title: 'My form section title',
			type: 'form',
		})

		const listVc = builderSectionVc.getFieldListVc()

		vcAssertUtil.assertListRendersRows(listVc, 4)

		assert.isEqualDeep(listVc.getValues(), [
			{
				fieldName: 'Field 1',
				fieldType: 'text',
			},
			{
				fieldName: 'waka1',
				fieldType: 'text',
			},
			{
				fieldName: 'waka2',
				fieldType: 'select',
			},
			{
				fieldName: 'waka3',
				fieldType: 'text',
			},
		])
	}

	@test()
	protected static async savesChanges() {
		const { formVc, dialogVc, builderSectionVc } =
			await this.simulateEditSectionClick(0)

		formVc.setValue('title', 'updated section')

		builderSectionVc.addField()

		await interactionUtil.submitForm(formVc)
		vcAssertUtil.assertDialogWasClosed(dialogVc)

		const pageVc = this.formBuilderVc.getPresentPageVc()

		assert.isEqualDeep(pageVc.getSection(0), {
			title: 'updated section',
			shouldRenderAsGrid: false,
			fields: [
				{
					//@ts-ignore
					name: 'field1',
				},
				{
					//@ts-ignore
					name: 'field2',
				},
			],
		})
	}

	private static async simulateEditSectionClick(clickedSectionIdx = 0) {
		let builderSectionVc: EditFormBuilderSectionViewController | undefined
		let dialogVc: DialogViewController | undefined

		await vcAssertUtil.assertRendersDialog(
			this.formBuilderVc,
			() => this.formBuilderVc.handleClickEditSection(clickedSectionIdx),
			(vc) => {
				dialogVc = vc
				builderSectionVc =
					vc.getCardVc() as EditFormBuilderSectionViewController
			}
		)

		return {
			builderSectionVc:
				builderSectionVc as EditFormBuilderSectionViewController,
			dialogVc: dialogVc as DialogViewController,
			formVc: vcAssertUtil.assertCardContainsForm(builderSectionVc as any),
		}
	}
}
