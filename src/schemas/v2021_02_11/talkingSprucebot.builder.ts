import { buildSchema } from '@sprucelabs/schema'
import sprucebotTypeMessageBuilder from './sprucebotTypedMessage.builder'

export default buildSchema({
	id: 'talkingSprucebot',
	name: 'Talking sprucebot',
	description: '',
	fields: {
		...sprucebotTypeMessageBuilder.fields,
		onComplete: {
			type: 'raw',
			label: 'Completion handler',
			options: {
				valueType: '() => Promise<void> | void',
			},
		},
	},
})
