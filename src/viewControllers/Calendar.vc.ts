import { SchemaError } from '@sprucelabs/schema'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import SpruceError from '../errors/SpruceError'
import { ViewControllerOptions } from '../types/heartwood.types'
import removeUniversalViewOptions from '../utilities/removeUniversalViewOptions'
import AbstractViewController from './Abstract.vc'

type CalendarOptions = Omit<
	SpruceSchemas.HeartwoodViewControllers.v2021_02_11.Calendar,
	'controller' | 'events'
> & {
	events?: Event[]
}
type Time = SpruceSchemas.HeartwoodViewControllers.v2021_02_11.CalendarTime
type Event = SpruceSchemas.HeartwoodViewControllers.v2021_02_11.CalendarEvent

export type CalendarViewControllerOptions = CalendarOptions
export type CalendarView = NonNullable<CalendarOptions['view']>

export default class CalendarViewController extends AbstractViewController<CalendarOptions> {
	private model: CalendarOptions & { events: Event[] }

	public constructor(options: CalendarOptions & ViewControllerOptions) {
		super(options)

		const view = options.view ?? 'day'

		this.assertValidView(view, options)
		this.assertValidMinAndMaxTime(options)

		this.model = {
			events: [],
			...removeUniversalViewOptions(options),
			view,
		}
	}

	private assertValidView(
		view: string,
		options: Omit<
			SpruceSchemas.HeartwoodViewControllers.v2021_02_11.Calendar,
			'controller' | 'events'
		> & {
			events?:
				| SpruceSchemas.HeartwoodViewControllers.v2021_02_11.CalendarEvent[]
				| undefined
		} & ViewControllerOptions
	) {
		if (view === 'day' && !options.people) {
			throw new SchemaError({
				code: 'MISSING_PARAMETERS',
				parameters: ['people'],
				friendlyMessage:
					'You have to supply at least 1 person to your calendar to render it (today).',
			})
		}
	}

	private assertValidMinAndMaxTime(
		options: Omit<
			SpruceSchemas.HeartwoodViewControllers.v2021_02_11.Calendar,
			'controller' | 'events'
		> & {
			events?:
				| SpruceSchemas.HeartwoodViewControllers.v2021_02_11.CalendarEvent[]
				| undefined
		} & ViewControllerOptions
	) {
		const minHour = options.minTime?.hour ?? 0
		const minMinute = options.minTime?.minute ?? 0

		const maxHour = options.maxTime?.hour ?? 0
		const maxMinute = options.maxTime?.minute ?? 0

		if (minHour + minMinute > maxHour + maxMinute) {
			throw new SchemaError({
				code: 'INVALID_PARAMETERS',
				parameters: ['minTime', 'maxTime'],
				friendlyMessages: [
					'minTime time must be later than maxTime',
					'maxTime must be before minTime.',
				],
			})
		}
	}

	public setMinTime(time: Time) {
		this.model.minTime = time
		this.triggerRender()
	}

	public setMaxTime(time: Time) {
		this.model.maxTime = time
		this.triggerRender()
	}

	public setTimezoneOffsetMs(offsetMs: number): any {
		if (offsetMs < -12 * 60 * 60 * 1000 || offsetMs > 14 * 60 * 60 * 1000) {
			throw new SchemaError({
				code: 'INVALID_PARAMETERS',
				parameters: ['timezoneOffsetMs'],
				friendlyMessage: `timezoneOffsetMs must be in milliseconds from 0 to 86,400,000.`,
			})
		}

		this.model.timezoneOffsetMs = offsetMs
		this.triggerRender()
	}

	public selectEvent(id: string) {
		const match = this.getEventById(id)
		if (!match) {
			throw new SpruceError({
				code: 'EVENT_NOT_FOUND',
				id,
			})
		}
		this.model.selectedEvent = match
	}

	public getSelectedEvent() {
		return this.model.selectedEvent
	}

	public getView() {
		return this.model.view
	}

	public setView(view: CalendarView) {
		this.model.view = view
		this.triggerRender()
	}

	public addEvent(event: Event) {
		const eventId = event.id
		const match = this.getEventById(eventId)
		if (match) {
			throw new SpruceError({
				code: 'DUPLICATE_EVENT_ID',
				id: eventId,
			})
		}

		this.model.events.push(event)
		this.triggerRender()
	}

	private getEventById(eventId: string) {
		const match = this.model.events.find((e) => e.id === eventId)

		return match
	}

	public removeEvent(id: string) {
		const match = this.getEventById(id)

		if (!match) {
			throw new SpruceError({
				code: 'EVENT_NOT_FOUND',
				id,
				friendlyMessage: `I could not find an event with the id of ${id} to remove.`,
			})
		}

		this.model.events = this.model.events.filter((e) => e.id !== id)
		this.triggerRender()
	}

	public mixinEvents(events: Event[]) {
		for (const event of events) {
			const count = events.filter((e) => e.id === event.id).length
			if (count > 1) {
				throw new SpruceError({
					code: 'DUPLICATE_EVENT_ID',
					id: event.id,
					friendlyMessage: `You are trying to mixin events that contain a duplicate id: '${event.id}'`,
				})
			}
		}

		let existing: Event[] = []

		for (const event of events) {
			existing = this.model.events.filter((e) => e.id !== event.id)
		}

		this.model.events = [...existing, ...events]

		this.triggerRender()
	}

	public render(): SpruceSchemas.HeartwoodViewControllers.v2021_02_11.Calendar & {
		events: Event[]
	} {
		return {
			...this.model,
			controller: this,
		}
	}
}
