import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import sprucebotTypedMessageSentenceSchema_v2021_02_11 from '#spruce/schemas/heartwoodViewControllers/v2021_02_11/sprucebotTypedMessageSentence.schema'
import sprucebotTypedMessageAvatarSchema_v2021_02_11 from '#spruce/schemas/heartwoodViewControllers/v2021_02_11/sprucebotTypedMessageAvatar.schema'

const sprucebotTypedMessageSchema: SpruceSchemas.HeartwoodViewControllers.v2021_02_11.SprucebotTypedMessageSchema  = {
	id: 'sprucebotTypedMessage',
	version: 'v2021_02_11',
	namespace: 'HeartwoodViewControllers',
	name: 'Sprucebot typed message',
	moduleToImportFromWhenRemote: '@sprucelabs/heartwood-view-controllers',
	    fields: {
	            /** Sentences. Sprucebot will type out these sentences one at a time preserving what is similar between each one (in bold) */
	            'sentences': {
	                label: 'Sentences',
	                type: 'schema',
	                isRequired: true,
	                hint: 'Sprucebot will type out these sentences one at a time preserving what is similar between each one (in bold)',
	                isArray: true,
	                options: {schema: sprucebotTypedMessageSentenceSchema_v2021_02_11,}
	            },
	            /** Default avatar. How should Sprucebot be rendered by default */
	            'avatar': {
	                label: 'Default avatar',
	                type: 'schema',
	                hint: 'How should Sprucebot be rendered by default',
	                options: {schema: sprucebotTypedMessageAvatarSchema_v2021_02_11,}
	            },
	            /** Start delay. How long should I wait before starting to type? */
	            'startDelay': {
	                label: 'Start delay',
	                type: 'duration',
	                hint: 'How long should I wait before starting to type?',
	                defaultValue: {"hours":0,"minutes":0,"seconds":1,"ms":0},
	                options: undefined
	            },
	            /** Loop. */
	            'shouldLoop': {
	                label: 'Loop',
	                type: 'boolean',
	                options: undefined
	            },
	            /** Size. */
	            'size': {
	                label: 'Size',
	                type: 'select',
	                defaultValue: "small",
	                options: {choices: [{"value":"small","label":"Small"},{"value":"medium","label":"Medium"},{"value":"large","label":"Large"}],}
	            },
	            /** Playing. */
	            'isPlaying': {
	                label: 'Playing',
	                type: 'boolean',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(sprucebotTypedMessageSchema)

export default sprucebotTypedMessageSchema
