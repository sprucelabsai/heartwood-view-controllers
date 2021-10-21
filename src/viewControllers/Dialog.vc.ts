import { SpruceSchemas } from '@sprucelabs/mercury-types'
import { ViewController, ViewControllerOptions } from '../types/heartwood.types'
import AbstractViewController from './Abstract.vc'

export type DialogOptions =
	SpruceSchemas.HeartwoodViewControllers.v2021_02_11.Card &
		SpruceSchemas.HeartwoodViewControllers.v2021_02_11.Dialog & {
			closeHandler?: () => void
		}

export type Dialog = DialogOptions
export type DialogViewControllerOptions = Omit<Dialog, 'closeHandler'>

export default class DialogViewController extends AbstractViewController<Dialog> {
	private closeResolver?: () => void
	private closePromise?: Promise<unknown>
	private onCloseHandler?: Dialog['onClose']
	private transitionOutHandler?: () => Promise<void>
	private isVisible = false
	private cardVc: ViewController<SpruceSchemas.HeartwoodViewControllers.v2021_02_11.Card>
	private shouldShowCloseButton: boolean

	public constructor(
		options: ViewControllerOptions & Omit<Dialog, 'closeHandler'>
	) {
		super(options)

		this.shouldShowCloseButton = options.shouldShowCloseButton !== false

		this.cardVc =
			options.controller ?? this.vcFactory.Controller('card', options)
		this.onCloseHandler = options.onClose
		this.isVisible = !!options.isVisible
	}

	public render(): Dialog {
		return {
			...this.cardVc.render(),
			//@ts-ignore
			controller: this,
			cardController: this.cardVc,
			isVisible: this.isVisible,
			closeHandler:
				this.shouldShowCloseButton !== false
					? this.handleClose.bind(this)
					: undefined,
		}
	}

	protected async handleClose() {
		await this.hide()
	}

	public show() {
		this.isVisible = true
		this.triggerRender()
	}

	public getIsVisible() {
		return this.isVisible
	}

	public async hide() {
		const results = await this.onCloseHandler?.()

		if (results === false) {
			return
		}

		await this.transitionOutHandler?.()

		this.isVisible = false

		this.closeResolver?.()
		this.triggerRender()
	}
	public getCardVc() {
		return this.cardVc
	}

	public async wait() {
		if (!this.closeResolver) {
			this.closePromise = new Promise((resolve) => {
				this.closeResolver = resolve as any
			})
		}

		await this.closePromise
	}
}
