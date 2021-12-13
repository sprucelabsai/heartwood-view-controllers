import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const listRatingsInputSchema: SpruceSchemas.HeartwoodViewControllers.v2021_02_11.ListRatingsInputSchema  = {
	id: 'listRatingsInput',
	version: 'v2021_02_11',
	namespace: 'HeartwoodViewControllers',
	name: '',
	moduleToImportFromWhenRemote: '@sprucelabs/heartwood-view-controllers',
	    fields: {
	            /** . */
	            'id': {
	                type: 'id',
	                options: undefined
	            },
	            /** . */
	            'name': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'value': {
	                type: 'number',
	                isPrivate: true,
	                options: undefined
	            },
	            /** Label. */
	            'label': {
	                label: 'Label',
	                type: 'text',
	                options: undefined
	            },
	            /** Hint. */
	            'hint': {
	                label: 'Hint',
	                type: 'text',
	                options: undefined
	            },
	            /** Required. */
	            'isRequired': {
	                label: 'Required',
	                type: 'boolean',
	                options: undefined
	            },
	            /** On change handler. */
	            'onChange': {
	                label: 'On change handler',
	                type: 'raw',
	                options: {valueType: `(value?: number) => any | Promise<any>`,}
	            },
	            /** Can be changed. */
	            'canBeChanged': {
	                label: 'Can be changed',
	                type: 'boolean',
	                options: undefined
	            },
	            /** Stars or Smilies. */
	            'renderAs': {
	                label: 'Stars or Smilies',
	                type: 'select',
	                options: {choices: [{"value":"stars","label":"Stars"},{"value":"smilies","label":"Smilies"}],}
	            },
	            /** . */
	            'setValue': {
	                type: 'raw',
	                options: {valueType: `(name: string, value: any) => Promise<any> | any`,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listRatingsInputSchema)

export default listRatingsInputSchema
