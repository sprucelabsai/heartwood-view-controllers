import { test, assert } from '@sprucelabs/test'
import { errorAssertUtil } from '@sprucelabs/test-utils'
import {
	CalendarViewController,
	CalendarViewControllerOptions,
	ClickEventOptions,
} from '../../..'
import AbstractViewControllerTest from '../../../tests/AbstractViewControllerTest'
import calendarSeeder from '../../../tests/utilities/calendarSeeder'
import interactionUtil from '../../../tests/utilities/interaction.utility'

export class InteractingWithCalendarsTest extends AbstractViewControllerTest {
	private static vc: CalendarViewController
	private static lastOnClickOptions: ClickEventOptions

	protected static async beforeEach() {
		await super.beforeEach()
		this.Vc()
	}

	@test()
	protected static async interactingThrowsWhenMissingOptions() {
		const err = await assert.doesThrowAsync(() =>
			//@ts-ignore
			interactionUtil.clickCalendarDayView()
		)
		errorAssertUtil.assertError(err, 'MISSING_PARAMETERS', {
			parameters: ['vc', 'time', 'personId'],
		})
	}

	@test()
	protected static async throwsWhenClickingCalendarInWrongView() {
		this.Vc({
			view: 'month',
		})

		const err = await assert.doesThrowAsync(() => this.clickCalendar())
		assert.doesInclude(err.message, 'month')
	}

	@test()
	protected static async throwsWhenNoPersonMatch() {
		const err = await assert.doesThrowAsync(() =>
			this.clickCalendar({ personId: '234234' })
		)
		assert.doesInclude(err.message, 'person')
	}

	@test()
	protected static async throwsWithNoOnClick() {
		const [person] = this.VcWithPeople(1, { onClick: null })

		const err = await assert.doesThrowAsync(() =>
			this.clickCalendar({ personId: person.id })
		)
		assert.doesInclude(err.message, 'onClick')
	}

	@test()
	protected static async noErrorWhenPersonMatches() {
		const [person] = this.VcWithPeople(1)

		await this.clickCalendar({ personId: person.id })
	}

	@test()
	protected static async canFindPersonInSecondSpot() {
		const [, person] = this.VcWithPeople(3)

		await this.clickCalendar({ personId: person.id })
	}

	@test()
	protected static async invokesOnClickOnView() {
		let wasHit = false
		let passedOptions: any

		const [person] = this.VcWithPeople(1, {
			onClick: (options) => {
				passedOptions = options
				wasHit = true
			},
		})

		const time = new Date().getTime()

		await this.clickCalendar({ personId: person.id, time })

		assert.isTrue(wasHit)
		assert.isEqualDeep(passedOptions, {
			person,
			time,
		})
	}

	@test()
	protected static async cantClickOnEventWhenMissingParames() {
		const err = await assert.doesThrowAsync(() =>
			//@ts-ignore
			interactionUtil.clickCalendarEvent()
		)

		errorAssertUtil.assertError(err, 'MISSING_PARAMETERS', {
			parameters: ['vc', 'eventId'],
		})
	}

	@test()
	protected static async cantClickEventThatDoesNotExist() {
		await assert.doesThrowAsync(
			() => interactionUtil.clickCalendarEvent(this.vc, 'not-found'),
			/not-found/gi
		)
	}

	@test()
	protected static async throwsWithoutOnClick() {
		this.VcWithPeople(4, {
			onClickEvent: undefined,
		})
		await assert.doesThrowAsync(() => this.addEventsAndClickLast(4), 'onClick')
	}

	@test()
	protected static async canClickFirstEvent() {
		const event = calendarSeeder.generateEventValues()
		this.vc.addEvent(event)
		await this.clickEvent(event.id)
	}

	@test()
	protected static async canClickLaterEvent() {
		const events = calendarSeeder.generateEventsValues(10)
		this.vc.mixinEvents(events)
		await this.clickEvent(events[4].id)
	}

	@test()
	protected static async clickingEventInvokesOnClickEvent() {
		const event = await this.addEventsAndClickLast(3)

		assert.isEqualDeep(this.lastOnClickOptions, {
			event,
			block: event.timeBlocks[0],
			blockIdx: 0,
		})
	}

	@test()
	protected static async cantClickOnEventBlockThatDoesNotExist() {
		await assert.doesThrowAsync(() => this.addEventsAndClickLast(3, 1))
	}

	@test()
	protected static async cantClickOnEventBlockThatDoesNotExist2() {
		const event = calendarSeeder.generateEventValues({
			timeBlocks: [
				{
					durationMinutes: 20,
					isBusy: true,
					title: `Block ${new Date().getTime()}`,
				},
				{
					durationMinutes: 10,
					isBusy: false,
					title: `Block ${new Date().getTime()}`,
				},
			],
		})

		this.vc.addEvent(event)
		await assert.doesThrowAsync(() => this.clickEvent(event?.id, 2))
	}

	@test('can click on second block', 1)
	@test('can click on third block', 2)
	protected static async canClickOnLaterBlock(blockIdx: number) {
		const timeBlocks = [
			{
				durationMinutes: 20,
				isBusy: true,
				title: `Block ${new Date().getTime()}`,
			},
			{
				durationMinutes: 10,
				isBusy: false,
				title: `Block ${new Date().getTime()}`,
			},
			{
				durationMinutes: 10,
				isBusy: false,
				title: `Block ${new Date().getTime()}`,
			},
		]
		const event = calendarSeeder.generateEventValues({
			timeBlocks,
		})

		this.vc.addEvent(event)

		const match = await this.clickEvent(event.id, blockIdx)

		assert.isEqualDeep(match.timeBlocks, timeBlocks)
		assert.isEqualDeep(this.lastOnClickOptions.block, timeBlocks[blockIdx])
		assert.isEqual(this.lastOnClickOptions.blockIdx, blockIdx)
	}

	private static async addEventsAndClickLast(total: number, blockIdx?: number) {
		const events = calendarSeeder.generateEventsValues(total)
		this.vc.mixinEvents(events)
		const selected = events[total - 1]
		await this.clickEvent(selected.id, blockIdx)

		return selected
	}

	private static async clickEvent(eventId: string, blockIdx?: number) {
		return interactionUtil.clickCalendarEvent(this.vc, eventId, blockIdx)
	}

	private static VcWithPeople(
		totalPeople: number,
		options?: Partial<CalendarViewControllerOptions>
	) {
		const people = calendarSeeder.generatePeopleValues(totalPeople)

		this.Vc({
			people,
			...options,
		})

		return people
	}

	private static Vc(options?: Partial<CalendarViewControllerOptions>) {
		this.vc = this.Controller('calendar', {
			view: 'day',
			people: [],
			onClick: () => {},
			onClickEvent: (options) => {
				this.lastOnClickOptions = options
			},
			...options,
		})
	}

	private static clickCalendar(options?: {
		personId: string
		time?: number
	}): any {
		return interactionUtil.clickCalendarDayView(
			this.vc,
			options?.time ?? new Date().getTime(),
			options?.personId ?? `123`
		)
	}
}