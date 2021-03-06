import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const selectInputChoiceSchema: SpruceSchemas.HeartwoodViewControllers.v2021_02_11.SelectInputChoiceSchema  = {
	id: 'selectInputChoice',
	version: 'v2021_02_11',
	namespace: 'HeartwoodViewControllers',
	name: '',
	moduleToImportFromWhenRemote: '@sprucelabs/heartwood-view-controllers',
	    fields: {
	            /** . */
	            'value': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'label': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(selectInputChoiceSchema)

export default selectInputChoiceSchema
