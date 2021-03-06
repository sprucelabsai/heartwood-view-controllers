import {
	assertOptions,
	buildSchema,
	FieldDefinitions,
} from '@sprucelabs/schema'
import { assert } from '@sprucelabs/test'
import { generateId } from '@sprucelabs/test-utils'
import buildForm from '../../builders/buildForm'
import {
	BigFormViewController,
	Card,
	FormBuilderCardViewController,
	FormInputViewController,
	FormViewController,
	RenderAsComponent,
	SkillViewController,
	ViewController,
} from '../../types/heartwood.types'
import normalizeFormSectionFieldNamesUtil from '../../utilities/normalizeFieldNames.utility'
import renderUtil from '../../utilities/render.utility'
import DialogViewController from '../../viewControllers/Dialog.vc'
import FormViewControllerImpl from '../../viewControllers/form/Form.vc'
import ViewControllerFactory from '../../viewControllers/ViewControllerFactory'
import { pluckFirstFromCard } from './assertSupport'

type SimpleFactory = Pick<ViewControllerFactory, 'Controller'>
export type FormVc = FormViewController<any> | BigFormViewController<any>

const formAssert = {
	views: {} as SimpleFactory,
	_setVcFactory(views: SimpleFactory) {
		this.views = views
	},

	async inputVcIsValid(inputVc: FormInputViewController) {
		assert.isFunction(
			inputVc.getValue,
			`You gotta create a 'getValue()' method on your input! Or consider having your vc extend AbstractFormInputViewController and be done! 💪`
		)

		assert.isFunction(
			inputVc.setValue,
			`You gotta create a 'setValue()' method on your input!`
		)

		assert.isFunction(
			inputVc.setHandlers,
			`You need to create a 'setHandlers(...)' method that conforms to FormInputViewController. Consider extending AbstractFormInputViewController to skip all this.`
		)

		const formVc = BuildFormVc(this.views, inputVc)
		let value = generateId()

		await inputVc.setValue(value)

		assert.isEqual(
			formVc.getValue('field'),
			value,
			`You need to make sure 'setValue()' returns 'this.setValueHandler()' from your input.`
		)

		value = generateId()

		await formVc.setValue('field', value)

		assert.isEqual(
			inputVc.getValue(),
			value,
			`You need to make sure 'getValue()' returns 'this.getValueHandler()' from your input.`
		)

		assert.isFunction(
			inputVc.getRenderedValue,
			`You need to implement 'getRenderedValue(...)' on your input!`
		)

		assert.isFunction(
			inputVc.setRenderedValue,
			`You need to implement 'setRenderedValue(...)' on your input!`
		)
	},

	formRendersField(
		formVc: FormVc,
		fieldName: string,
		fieldDefinition?: Partial<FieldDefinitions>
	) {
		const model = renderUtil.render(formVc)
		const schema = formVc.getSchema()

		for (const section of model.sections) {
			const fields = normalizeFormSectionFieldNamesUtil.toObjects(
				section.fields,
				schema
			)
			const match = fields.find((n) => n.name === fieldName)

			if (match) {
				if (fieldDefinition) {
					assert.doesInclude(match, fieldDefinition)
				}

				return
			}
		}

		assert.fail(
			`Form does not render field named '${fieldName}'. Make sure it's in your form's schema and set in 'form.sections.fields'.`
		)
	},

	formDoesNotRenderField(formVc: FormVc, fieldName: string) {
		try {
			this.formRendersField(formVc, fieldName)
		} catch {
			return
		}

		assert.fail(`Form should not be rendering '${fieldName}', but it is.`)
	},

	formRendersFields(formVc: FormVc, fields: string[]) {
		for (const field of fields) {
			this.formRendersField(formVc, field)
		}
	},

	formIsDisabled(vc: FormVc) {
		assert.isFalse(
			vc.isEnabled(),
			'Your form is enabled and it should not be! Try this.formVc.disable()'
		)
	},

	formIsEnabled(vc: FormVc) {
		assert.isTrue(
			vc.isEnabled(),
			'Your form is not yet enabled! Try this.formVc.enable()'
		)
	},

	formIsBusy(vc: FormVc) {
		assert.isTrue(
			vc.getIsBusy(),
			'Your form is not busy and should be! Try this.formVc.setIsBusy(true).'
		)
	},

	formIsNotBusy(vc: FormVc) {
		assert.isFalse(
			vc.getIsBusy(),
			'Your form is still busy. Try this.formVc.setIsBusy(false) to stop it!'
		)
	},

	cardRendersForm(vc: ViewController<Card> | DialogViewController) {
		const model = renderUtil.render(vc)

		const form =
			pluckFirstFromCard(model, 'bigForm') || pluckFirstFromCard(model, 'form')

		assert.isTrue(
			form?.controller instanceof FormViewControllerImpl,
			"Expected to find a form inside your CardViewController, but didn't find one!"
		)

		return form?.controller as
			| FormViewController<any>
			| BigFormViewController<any>
	},

	cardRendersForms(vc: ViewController<Card>, count: number) {
		const model = renderUtil.render(vc)
		const forms =
			model.body?.sections
				?.map((s) => s.form?.controller ?? s.bigForm?.controller)
				.filter((s) => !!s) ?? []

		if (forms.length !== count) {
			assert.fail(
				`Expected your card to render ${count} form${
					count === 1 ? '' : 's'
				}, but I found ${forms.length === 0 ? 'none' : forms.length}!`
			)
		}

		return forms as FormViewController<any>[] | BigFormViewController<any>[]
	},

	formFieldRendersUsingInputVc(
		vc: FormVc,
		fieldName: string,
		inputVc: FormInputViewController
	) {
		try {
			vc.getField(fieldName)
		} catch {
			assert.fail(
				`I could not find a field called '${fieldName}' on your form!`
			)
		}

		const match = vc.getFieldVc(fieldName)

		assert.isEqual(
			match,
			inputVc,
			`Your field did not render using the input vc you passed. Make sure you are setting the vc when creating your form vc!
		
		
		
this.Controller(
	'form',
	buildForm({
		schema: formSchema,
		sections: [
			{
				fields: [
					{
						name: 'firstName',
						vc: this.myInputVc, <----- drop it in here
					},
				],
			},
		],
	})
)`
		)
	},

	skillViewRendersFormBuilder(
		vc: SkillViewController,
		id?: string
	): FormBuilderCardViewController {
		const model = renderUtil.render(vc)

		for (const layout of model.layouts) {
			for (const card of layout.cards ?? []) {
				const vc = card?.controller
				//@ts-ignore
				if (vc && vc.__isFormBuilder && (!id || card.id === id)) {
					return vc as any
				}
			}
		}

		assert.fail(
			`Could not find a form builder${
				id ? ` with the id ${id}` : ''
			} in your skill view!`
		)

		return {} as any
	},

	formFieldRendersAs(
		vc: FormVc,
		fieldName: string,
		expected: RenderAsComponent
	) {
		assertOptions({ vc, fieldName, expected }, ['vc', 'fieldName', 'expected'])

		const field = vc.getField(fieldName)

		assert.isEqual(
			field.compiledOptions.renderAs,
			expected,
			`The field named '${fieldName}' is rendering as '${
				field.compiledOptions.renderAs ?? '***default**'
			}', but I expected it to render as '${expected}'!`
		)
	},
}

function BuildFormVc(
	views: SimpleFactory,
	inputVc: FormInputViewController
): FormViewController<FormSchema> {
	return views.Controller(
		'form',
		buildForm({
			schema: formSchema,
			sections: [
				{
					fields: [
						{
							name: 'field',
							vc: inputVc,
						},
					],
				},
			],
		})
	)
}

type FormAssert = Omit<typeof formAssert, 'views' | '_setVcFactory'>

export default formAssert as FormAssert

const formSchema = buildSchema({
	id: 'formAssertTest',
	fields: {
		field: {
			type: 'text',
		},
	},
})

type FormSchema = typeof formSchema
