
import { SpruceSchemas } from '../../schemas.types'

import formSectionSchema_v2021_02_11 from '#spruce/schemas/heartwood/v2021_02_11/formSection.schema'
import cardFooterSchema_v2021_02_11 from '#spruce/schemas/heartwood/v2021_02_11/cardFooter.schema'

const formSchema: SpruceSchemas.Heartwood.v2021_02_11.FormSchema  = {
	id: 'form',
	version: 'v2021_02_11',
	namespace: 'Heartwood',
	name: 'Form',
	    fields: {
	            /** . */
	            'id': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'className': {
	                type: 'text',
	                isPrivate: true,
	                options: undefined
	            },
	            /** Controller. */
	            'controller': {
	                label: 'Controller',
	                type: 'raw',
	                options: {valueType: `HeartwoodTypes.FormViewController<S>`,}
	            },
	            /** . */
	            'schema': {
	                type: 'raw',
	                isRequired: true,
	                options: {valueType: `S`,}
	            },
	            /** Submit handler. */
	            'onSubmit': {
	                label: 'Submit handler',
	                type: 'raw',
	                options: {valueType: `HeartwoodTypes.SubmitHandler<S>`,}
	            },
	            /** Cancel handler. */
	            'onCancel': {
	                label: 'Cancel handler',
	                type: 'raw',
	                options: {valueType: `() => void | Promise<void>`,}
	            },
	            /** Change handler. */
	            'onChange': {
	                label: 'Change handler',
	                type: 'raw',
	                options: {valueType: `(options: HeartwoodTypes.FormOnChangeOptions<S>) => Promise<void> | void`,}
	            },
	            /** Values. The values you want the form to have. Control is given to the FormViewController after render. */
	            'values': {
	                label: 'Values',
	                type: 'raw',
	                hint: 'The values you want the form to have. Control is given to the FormViewController after render.',
	                options: {valueType: `SpruceSchema.SchemaPartialValues<S>`,}
	            },
	            /** Errors by field. */
	            'errorsByField': {
	                label: 'Errors by field',
	                type: 'raw',
	                options: {valueType: `HeartwoodTypes.FormErrorsByField<S>`,}
	            },
	            /** Show submit controls. */
	            'shouldShowSubmitControls': {
	                label: 'Show submit controls',
	                type: 'boolean',
	                defaultValue: true,
	                options: undefined
	            },
	            /** Show cancel button. */
	            'shouldShowCancelButton': {
	                label: 'Show cancel button',
	                type: 'boolean',
	                defaultValue: true,
	                options: undefined
	            },
	            /** Submit button label. */
	            'submitButtonLabel': {
	                label: 'Submit button label',
	                type: 'text',
	                defaultValue: "Go!",
	                options: undefined
	            },
	            /** Busy. */
	            'isBusy': {
	                label: 'Busy',
	                type: 'boolean',
	                options: undefined
	            },
	            /** Set value handler. */
	            'setValue': {
	                label: 'Set value handler',
	                type: 'raw',
	                isPrivate: true,
	                isRequired: true,
	                options: {valueType: `(name: SpruceSchema.SchemaFieldNames<S>, value: any) => void`,}
	            },
	            /** Form sections. */
	            'sections': {
	                label: 'Form sections',
	                type: 'schema',
	                isRequired: true,
	                isArray: true,
	                options: {typeSuffix: `<S>`,schema: formSectionSchema_v2021_02_11,}
	            },
	            /** Footer. */
	            'footer': {
	                label: 'Footer',
	                type: 'schema',
	                options: {schema: cardFooterSchema_v2021_02_11,}
	            },
	    }
}



export default formSchema
