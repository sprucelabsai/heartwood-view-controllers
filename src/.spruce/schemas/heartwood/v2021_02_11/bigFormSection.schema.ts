import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import textSchema_v2021_02_11 from '#spruce/schemas/heartwood/v2021_02_11/text.schema'

const bigFormSectionSchema: SpruceSchemas.Heartwood.v2021_02_11.BigFormSectionSchema  = {
	id: 'bigFormSection',
	version: 'v2021_02_11',
	namespace: 'Heartwood',
	name: '',
	    fields: {
	            /** . */
	            'className': {
	                type: 'text',
	                isPrivate: true,
	                options: undefined
	            },
	            /** Initial values. */
	            'values': {
	                label: 'Initial values',
	                type: 'raw',
	                isPrivate: true,
	                options: {valueType: `SpruceSchema.SchemaPartialValues<S>`,}
	            },
	            /** Title. */
	            'title': {
	                label: 'Title',
	                type: 'text',
	                options: undefined
	            },
	            /** Text. */
	            'text': {
	                label: 'Text',
	                type: 'schema',
	                options: {schema: textSchema_v2021_02_11,}
	            },
	            /** Form fields. Put any fields from the schema you provided to be shown in this section. Can be array of field names or objects with a key of name. */
	            'fields': {
	                label: 'Form fields',
	                type: 'raw',
	                hint: 'Put any fields from the schema you provided to be shown in this section. Can be array of field names or objects with a key of name.',
	                isArray: true,
	                options: {valueType: `SpruceSchema.SchemaFieldNames<S> | HeartwoodTypes.FieldRenderOptions<S>`,}
	            },
	            /** . */
	            'shouldShowSubmitButton': {
	                type: 'boolean',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(bigFormSectionSchema)

export default bigFormSectionSchema
