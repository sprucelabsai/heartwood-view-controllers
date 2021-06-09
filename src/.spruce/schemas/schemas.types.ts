/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-redeclare */

export { SpruceSchemas } from '@sprucelabs/spruce-core-schemas/build/.spruce/schemas/core.schemas.types'

import { default as SchemaEntity } from '@sprucelabs/schema'



import * as SpruceSchema from '@sprucelabs/schema'

import * as HeartwoodTypes from '../../'

declare module '@sprucelabs/spruce-core-schemas/build/.spruce/schemas/core.schemas.types' {


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface TextInput {
			
				
				'id'?: string| undefined | null
				
				'name': string
				
				'value'?: string| undefined | null
				/** Label. */
				'label'?: string| undefined | null
				/** Hint. */
				'hint'?: string| undefined | null
				/** Required. */
				'isRequired'?: boolean| undefined | null
		}

		interface TextInputSchema extends SpruceSchema.Schema {
			id: 'textInput',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: 'Text input',
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
			                type: 'text',
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
			    }
		}

		type TextInputEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.TextInputSchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface PhoneInput {
			
				
				'id'?: string| undefined | null
				
				'name': string
				
				'value'?: (any)| undefined | null
				/** Label. */
				'label'?: string| undefined | null
				/** Hint. */
				'hint'?: string| undefined | null
				/** Required. */
				'isRequired'?: boolean| undefined | null
		}

		interface PhoneInputSchema extends SpruceSchema.Schema {
			id: 'phoneInput',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: 'Phone input',
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
			                type: 'raw',
			                isPrivate: true,
			                options: {valueType: `any`,}
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
			    }
		}

		type PhoneInputEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.PhoneInputSchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		/** Wraps all inputs in form with things like labels, hints, and error messages. */
		interface Input {
			
				
				'id'?: string| undefined | null
				
				'name': string
				
				'value'?: (any)| undefined | null
				/** Label. */
				'label'?: string| undefined | null
				/** Hint. */
				'hint'?: string| undefined | null
				/** Required. */
				'isRequired'?: boolean| undefined | null
		}

		interface InputSchema extends SpruceSchema.Schema {
			id: 'input',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: 'Input wrapper',
			description: 'Wraps all inputs in form with things like labels, hints, and error messages.',
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
			                type: 'raw',
			                isPrivate: true,
			                options: {valueType: `any`,}
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
			    }
		}

		type InputEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.InputSchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface SprucebotTypedMessage {
			
				/** Sentences. Sprucebot will type out these sentences one at a time preserving what is similar between each one (in bold) */
				'sentences': SpruceSchemas.Heartwood.v2021_02_11.SprucebotTypedMessageSentence[]
				/** Default avatar. How should Sprucebot be rendered by default */
				'defaultAvatar'?: SpruceSchemas.Heartwood.v2021_02_11.SprucebotTypedMessageAvatar| undefined | null
				/** Start delay. How long should I wait before starting to type? */
				'startDelay'?: SpruceSchema.DurationFieldValue| undefined | null
				/** Loop. */
				'shouldLoop'?: boolean| undefined | null
				/** Size. */
				'size'?: ("small" | "medium" | "large")| undefined | null
				/** Paused. */
				'isPaused'?: boolean| undefined | null
		}

		interface SprucebotTypedMessageSchema extends SpruceSchema.Schema {
			id: 'sprucebotTypedMessage',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: 'Sprucebot typed message',
			    fields: {
			            /** Sentences. Sprucebot will type out these sentences one at a time preserving what is similar between each one (in bold) */
			            'sentences': {
			                label: 'Sentences',
			                type: 'schema',
			                isRequired: true,
			                hint: 'Sprucebot will type out these sentences one at a time preserving what is similar between each one (in bold)',
			                isArray: true,
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.SprucebotTypedMessageSentenceSchema,}
			            },
			            /** Default avatar. How should Sprucebot be rendered by default */
			            'defaultAvatar': {
			                label: 'Default avatar',
			                type: 'schema',
			                hint: 'How should Sprucebot be rendered by default',
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.SprucebotTypedMessageAvatarSchema,}
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
			            /** Paused. */
			            'isPaused': {
			                label: 'Paused',
			                type: 'boolean',
			                options: undefined
			            },
			    }
		}

		type SprucebotTypedMessageEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.SprucebotTypedMessageSchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface SkillView {
			
				
				'id'?: string| undefined | null
				/** Center vertically. */
				'shouldCenterVertically'?: boolean| undefined | null
				/** Layout. */
				'layouts': SpruceSchemas.Heartwood.v2021_02_11.Layout[]
		}

		interface SkillViewSchema extends SpruceSchema.Schema {
			id: 'skillView',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: 'Skill view',
			    fields: {
			            /** . */
			            'id': {
			                type: 'id',
			                isPrivate: true,
			                options: undefined
			            },
			            /** Center vertically. */
			            'shouldCenterVertically': {
			                label: 'Center vertically',
			                type: 'boolean',
			                defaultValue: false,
			                options: undefined
			            },
			            /** Layout. */
			            'layouts': {
			                label: 'Layout',
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.LayoutSchema,}
			            },
			    }
		}

		type SkillViewEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.SkillViewSchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface SelectInputChoice {
			
				
				'value': string
				
				'label': string
		}

		interface SelectInputChoiceSchema extends SpruceSchema.Schema {
			id: 'selectInputChoice',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
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

		type SelectInputChoiceEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.SelectInputChoiceSchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface SelectInput {
			
				
				'id'?: string| undefined | null
				
				'name': string
				
				'value'?: (any)| undefined | null
				/** Label. */
				'label'?: string| undefined | null
				/** Hint. */
				'hint'?: string| undefined | null
				/** Required. */
				'isRequired'?: boolean| undefined | null
				
				'choices': SpruceSchemas.Heartwood.v2021_02_11.SelectInputChoice[]
		}

		interface SelectInputSchema extends SpruceSchema.Schema {
			id: 'selectInput',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: 'Select input',
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
			                type: 'raw',
			                isPrivate: true,
			                options: {valueType: `any`,}
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
			            /** . */
			            'choices': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.SelectInputChoiceSchema,}
			            },
			    }
		}

		type SelectInputEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.SelectInputSchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface Layout {
			
				/** Card. Will render a card in this section */
				'cards'?: SpruceSchemas.Heartwood.v2021_02_11.Card[]| undefined | null
				
				'className'?: string| undefined | null
				/** Grid. Will force cards to render as grid. */
				'isGrid'?: boolean| undefined | null
				/** Width. */
				'width'?: ("wide" | "tight" | "full")| undefined | null
		}

		interface LayoutSchema extends SpruceSchema.Schema {
			id: 'layout',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: 'Layout',
			    fields: {
			            /** Card. Will render a card in this section */
			            'cards': {
			                label: 'Card',
			                type: 'schema',
			                hint: 'Will render a card in this section',
			                isArray: true,
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.CardSchema,}
			            },
			            /** . */
			            'className': {
			                type: 'text',
			                isPrivate: true,
			                options: undefined
			            },
			            /** Grid. Will force cards to render as grid. */
			            'isGrid': {
			                label: 'Grid',
			                type: 'boolean',
			                hint: 'Will force cards to render as grid.',
			                options: undefined
			            },
			            /** Width. */
			            'width': {
			                label: 'Width',
			                type: 'select',
			                defaultValue: "tight",
			                options: {choices: [{"value":"wide","label":"Wide"},{"value":"tight","label":"Tight"},{"value":"full","label":"Full width"}],}
			            },
			    }
		}

		type LayoutEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.LayoutSchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface FancyIcon {
			
				/** Name. */
				'name': ("accesibility" | "add" | "address_book" | "administrator" | "airbrush" | "airplane" | "alarm" | "alien" | "american_express" | "analysis" | "analysis_1" | "archive" | "art_palette" | "artificial_intelligence" | "artificial_intelligence_1" | "at" | "atm" | "attachment" | "audio" | "audio_knob" | "auricular_phone" | "back" | "backup" | "balance" | "band_aid" | "bank" | "barcode" | "basketball" | "battery" | "beer" | "bell" | "bicycle" | "bill" | "binoculars" | "birthday" | "bitcoin" | "blog" | "bluetooth" | "bomb" | "book" | "bookmark" | "box" | "brain" | "brainstorm" | "briefcase" | "briefcase_money" | "broken_heart" | "broken_link" | "brush_tip" | "bus" | "cake" | "calculator" | "calendar" | "car" | "cat" | "certificate" | "champagne" | "chat" | "chat_1" | "check" | "check_1" | "chip" | "cirrus" | "city" | "city_1" | "citybank" | "clicker" | "clip" | "clipboard" | "clock" | "cloud" | "cloud_1" | "cloud_computing" | "cloud_computing_1" | "cloudy" | "cocktail" | "code" | "coffee_cup" | "coin_dollar" | "coin_pound" | "coins" | "coinstack" | "collaboration" | "command" | "company" | "compass" | "compose" | "computer_graphics" | "connection" | "contract" | "contract_1" | "contrast" | "control" | "control_game" | "copy" | "costumer" | "coupon" | "crash" | "creative" | "credit_card" | "credit_card1" | "credit_card_2" | "cross" | "cursor" | "dashboard" | "database" | "delete" | "dentistry" | "diary" | "diet" | "digital_campaing" | "digital_key" | "diners_club" | "disc" | "discount" | "dish" | "dish_1" | "dislike" | "divider" | "doctor" | "dog" | "dollar_coin" | "dollar_sign" | "dowload" | "down_arrow" | "download" | "edit" | "edit_file" | "editor" | "education" | "eject" | "emergency" | "employed" | "encrypted_database" | "encrypted_folder" | "encrypted_internet_conection" | "encrypted_mail" | "encryption" | "encypted_terminal" | "enterprice" | "equal" | "erase_file" | "erase_sabe" | "error_database" | "error_search" | "error_terminal" | "euro_sign" | "exit" | "external_link" | "facebook" | "feedback" | "file" | "fill" | "finger_print" | "firewall" | "flag" | "flash" | "flash_auto" | "flash_red_eye" | "flashlight" | "folder_gallery" | "folder" | "football" | "forbidden" | "french_fries" | "funnel" | "gallery" | "game_control" | "games_card_clubs" | "games_card_diamonds" | "games_card_hearts" | "games_card_spades" | "gift" | "girl" | "gmail" | "gold" | "graduated" | "group" | "hamburguer" | "hand" | "hand_note" | "hand_point" | "hand_shake" | "headphones" | "heart" | "heart_1" | "help" | "hide" | "high_five" | "hold" | "home" | "homework" | "hotel" | "hourglass" | "house" | "icon" | "id_card" | "idea" | "infinity" | "info" | "information" | "innovation" | "instagram" | "internet" | "internet_1" | "internet_error" | "key" | "key_1" | "kiss" | "lamp" | "laptop" | "layers" | "layers_1" | "layout" | "left_arrow" | "light_bulb" | "like" | "like_1" | "line_chart" | "link" | "linkeding" | "list" | "local_network" | "location" | "locked" | "magazine" | "magic_wand" | "magnet" | "mail" | "mail_account" | "mail_error" | "map_location" | "maps" | "marker" | "master_data" | "mastercard" | "medicine" | "menu" | "mic" | "microphone" | "microphone_1" | "microscope" | "money_bag" | "money" | "money_1" | "money_report" | "money_report_1" | "monitor" | "more" | "multiple_user" | "multiple_users" | "music_library" | "music_player" | "music_volume_high" | "music_volume_low" | "music_volume_medium" | "music_volume_mute" | "musical_note" | "mute_mic" | "network" | "newspaper" | "note" | "notebook" | "notification" | "old_phone" | "online_pay" | "open_book" | "open_box" | "open_hand" | "p2p" | "pallete" | "paper_plane" | "paper_plane_1" | "passage_of_time" | "pause" | "payment" | "paypal" | "pen_drive" | "perspective" | "pet_paw_print" | "phone_book" | "phone_receiver" | "photo_camera" | "picture" | "pie_chart" | "piggy_bank" | "pinterest" | "piracy" | "pizza" | "placeholder" | "plan" | "plane" | "play_buttom" | "plus" | "police_car" | "power_on_off" | "presentation" | "preview" | "preview_1" | "previous" | "price_tag" | "print_fax" | "project_management" | "project_management_1" | "promotion" | "purse" | "quality" | "radar" | "radioactive" | "rainy" | "rating" | "receipt" | "recluitment" | "recognition" | "record" | "recycle" | "red_eye" | "reload" | "reload_1" | "repair" | "report" | "research" | "responsive" | "restaurant" | "resume" | "reunion" | "right_arrow" | "risk" | "rotate" | "route" | "runner_man" | "sabe" | "sabe_error" | "safety_box_open" | "satellite" | "school" | "scissors" | "screw" | "search" | "send" | "send_file" | "send_file_1" | "send_money" | "send_package" | "server" | "settings" | "settings_1" | "share" | "shield" | "ship" | "shipped" | "shop" | "shopping" | "shopping_bag" | "shopping_car" | "shuffle" | "sign" | "sketch" | "sketch_1" | "skip" | "smartphone" | "snapchat" | "sniffer" | "social_media" | "spam" | "speech_bubble" | "spray" | "star" | "start_up" | "stats_line_chart" | "stethoscope" | "stop" | "stop_watch" | "storage" | "street" | "student" | "study" | "sun_glasses" | "suppport" | "switch" | "tablet" | "tabs" | "tap_gesture" | "target" | "telephone_call" | "television" | "terminal" | "terminal_2" | "think" | "toast" | "toast_1" | "tools" | "traffic_light" | "transfer_data" | "trash" | "treasure_chest" | "trojan" | "twitter" | "two_players" | "university" | "unlock" | "up_arrow" | "upload" | "vector" | "view" | "vintage_phone" | "visa" | "volume_control" | "wallet" | "wallet_1" | "warning" | "warning_briefcase" | "warning_chemistry" | "warning_database" | "warning_dowload" | "warning_folder" | "warning_location" | "warning_mail" | "warning_package" | "warning_search" | "warning_shipped" | "warning_terminal" | "warning_trash" | "web_design" | "web_domain_registration" | "web_search" | "web_search_1" | "website" | "weight" | "whatsapp" | "wheelchair" | "wifi" | "windows" | "wine_cup" | "wordpress" | "worldwide" | "youtube" | "zcash" | "zipped_folder" | "zoom_in" | "zoom_out" | "loading")
				/** Size. */
				'size'?: ("medium" | "extraLarge")| undefined | null
		}

		interface FancyIconSchema extends SpruceSchema.Schema {
			id: 'fancyIcon',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: 'Fancy icon',
			    fields: {
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: 'select',
			                isRequired: true,
			                options: {choices: [{"value":"accesibility","label":"accesibility"},{"value":"add","label":"add"},{"value":"address_book","label":"address_book"},{"value":"administrator","label":"administrator"},{"value":"airbrush","label":"airbrush"},{"value":"airplane","label":"airplane"},{"value":"alarm","label":"alarm"},{"value":"alien","label":"alien"},{"value":"american_express","label":"american_express"},{"value":"analysis","label":"analysis"},{"value":"analysis_1","label":"analysis_1"},{"value":"archive","label":"archive"},{"value":"art_palette","label":"art_palette"},{"value":"artificial_intelligence","label":"artificial_intelligence"},{"value":"artificial_intelligence_1","label":"artificial_intelligence_1"},{"value":"at","label":"at"},{"value":"atm","label":"atm"},{"value":"attachment","label":"attachment"},{"value":"audio","label":"audio"},{"value":"audio_knob","label":"audio_knob"},{"value":"auricular_phone","label":"auricular_phone"},{"value":"back","label":"back"},{"value":"backup","label":"backup"},{"value":"balance","label":"balance"},{"value":"band_aid","label":"band_aid"},{"value":"bank","label":"bank"},{"value":"barcode","label":"barcode"},{"value":"basketball","label":"basketball"},{"value":"battery","label":"battery"},{"value":"beer","label":"beer"},{"value":"bell","label":"bell"},{"value":"bicycle","label":"bicycle"},{"value":"bill","label":"bill"},{"value":"binoculars","label":"binoculars"},{"value":"birthday","label":"birthday"},{"value":"bitcoin","label":"bitcoin"},{"value":"blog","label":"blog"},{"value":"bluetooth","label":"bluetooth"},{"value":"bomb","label":"bomb"},{"value":"book","label":"book"},{"value":"bookmark","label":"bookmark"},{"value":"box","label":"box"},{"value":"brain","label":"brain"},{"value":"brainstorm","label":"brainstorm"},{"value":"briefcase","label":"briefcase"},{"value":"briefcase_money","label":"briefcase_money"},{"value":"broken_heart","label":"broken_heart"},{"value":"broken_link","label":"broken_link"},{"value":"brush_tip","label":"brush_tip"},{"value":"bus","label":"bus"},{"value":"cake","label":"cake"},{"value":"calculator","label":"calculator"},{"value":"calendar","label":"calendar"},{"value":"car","label":"car"},{"value":"cat","label":"cat"},{"value":"certificate","label":"certificate"},{"value":"champagne","label":"champagne"},{"value":"chat","label":"chat"},{"value":"chat_1","label":"chat_1"},{"value":"check","label":"check"},{"value":"check_1","label":"check_1"},{"value":"chip","label":"chip"},{"value":"cirrus","label":"cirrus"},{"value":"city","label":"city"},{"value":"city_1","label":"city_1"},{"value":"citybank","label":"citybank"},{"value":"clicker","label":"clicker"},{"value":"clip","label":"clip"},{"value":"clipboard","label":"clipboard"},{"value":"clock","label":"clock"},{"value":"cloud","label":"cloud"},{"value":"cloud_1","label":"cloud_1"},{"value":"cloud_computing","label":"cloud_computing"},{"value":"cloud_computing_1","label":"cloud_computing_1"},{"value":"cloudy","label":"cloudy"},{"value":"cocktail","label":"cocktail"},{"value":"code","label":"code"},{"value":"coffee_cup","label":"coffee_cup"},{"value":"coin_dollar","label":"coin_dollar"},{"value":"coin_pound","label":"coin_pound"},{"value":"coins","label":"coins"},{"value":"coinstack","label":"coinstack"},{"value":"collaboration","label":"collaboration"},{"value":"command","label":"command"},{"value":"company","label":"company"},{"value":"compass","label":"compass"},{"value":"compose","label":"compose"},{"value":"computer_graphics","label":"computer_graphics"},{"value":"connection","label":"connection"},{"value":"contract","label":"contract"},{"value":"contract_1","label":"contract_1"},{"value":"contrast","label":"contrast"},{"value":"control","label":"control"},{"value":"control_game","label":"control_game"},{"value":"copy","label":"copy"},{"value":"costumer","label":"costumer"},{"value":"coupon","label":"coupon"},{"value":"crash","label":"crash"},{"value":"creative","label":"creative"},{"value":"credit_card","label":"credit_card"},{"value":"credit_card1","label":"credit_card1"},{"value":"credit_card_2","label":"credit_card_2"},{"value":"cross","label":"cross"},{"value":"cursor","label":"cursor"},{"value":"dashboard","label":"dashboard"},{"value":"database","label":"database"},{"value":"delete","label":"delete"},{"value":"dentistry","label":"dentistry"},{"value":"diary","label":"diary"},{"value":"diet","label":"diet"},{"value":"digital_campaing","label":"digital_campaing"},{"value":"digital_key","label":"digital_key"},{"value":"diners_club","label":"diners_club"},{"value":"disc","label":"disc"},{"value":"discount","label":"discount"},{"value":"dish","label":"dish"},{"value":"dish_1","label":"dish_1"},{"value":"dislike","label":"dislike"},{"value":"divider","label":"divider"},{"value":"doctor","label":"doctor"},{"value":"dog","label":"dog"},{"value":"dollar_coin","label":"dollar_coin"},{"value":"dollar_sign","label":"dollar_sign"},{"value":"dowload","label":"dowload"},{"value":"down_arrow","label":"down_arrow"},{"value":"download","label":"download"},{"value":"edit","label":"edit"},{"value":"edit_file","label":"edit_file"},{"value":"editor","label":"editor"},{"value":"education","label":"education"},{"value":"eject","label":"eject"},{"value":"emergency","label":"emergency"},{"value":"employed","label":"employed"},{"value":"encrypted_database","label":"encrypted_database"},{"value":"encrypted_folder","label":"encrypted_folder"},{"value":"encrypted_internet_conection","label":"encrypted_internet_conection"},{"value":"encrypted_mail","label":"encrypted_mail"},{"value":"encryption","label":"encryption"},{"value":"encypted_terminal","label":"encypted_terminal"},{"value":"enterprice","label":"enterprice"},{"value":"equal","label":"equal"},{"value":"erase_file","label":"erase_file"},{"value":"erase_sabe","label":"erase_sabe"},{"value":"error_database","label":"error_database"},{"value":"error_search","label":"error_search"},{"value":"error_terminal","label":"error_terminal"},{"value":"euro_sign","label":"euro_sign"},{"value":"exit","label":"exit"},{"value":"external_link","label":"external_link"},{"value":"facebook","label":"facebook"},{"value":"feedback","label":"feedback"},{"value":"file","label":"file"},{"value":"fill","label":"fill"},{"value":"finger_print","label":"finger_print"},{"value":"firewall","label":"firewall"},{"value":"flag","label":"flag"},{"value":"flash","label":"flash"},{"value":"flash_auto","label":"flash_auto"},{"value":"flash_red_eye","label":"flash_red_eye"},{"value":"flashlight","label":"flashlight"},{"value":"folder_gallery","label":"folder_gallery"},{"value":"folder","label":"folder"},{"value":"football","label":"football"},{"value":"forbidden","label":"forbidden"},{"value":"french_fries","label":"french_fries"},{"value":"funnel","label":"funnel"},{"value":"gallery","label":"gallery"},{"value":"game_control","label":"game_control"},{"value":"games_card_clubs","label":"games_card_clubs"},{"value":"games_card_diamonds","label":"games_card_diamonds"},{"value":"games_card_hearts","label":"games_card_hearts"},{"value":"games_card_spades","label":"games_card_spades"},{"value":"gift","label":"gift"},{"value":"girl","label":"girl"},{"value":"gmail","label":"gmail"},{"value":"gold","label":"gold"},{"value":"graduated","label":"graduated"},{"value":"group","label":"group"},{"value":"hamburguer","label":"hamburguer"},{"value":"hand","label":"hand"},{"value":"hand_note","label":"hand_note"},{"value":"hand_point","label":"hand_point"},{"value":"hand_shake","label":"hand_shake"},{"value":"headphones","label":"headphones"},{"value":"heart","label":"heart"},{"value":"heart_1","label":"heart_1"},{"value":"help","label":"help"},{"value":"hide","label":"hide"},{"value":"high_five","label":"high_five"},{"value":"hold","label":"hold"},{"value":"home","label":"home"},{"value":"homework","label":"homework"},{"value":"hotel","label":"hotel"},{"value":"hourglass","label":"hourglass"},{"value":"house","label":"house"},{"value":"icon","label":"icon"},{"value":"id_card","label":"id_card"},{"value":"idea","label":"idea"},{"value":"infinity","label":"infinity"},{"value":"info","label":"info"},{"value":"information","label":"information"},{"value":"innovation","label":"innovation"},{"value":"instagram","label":"instagram"},{"value":"internet","label":"internet"},{"value":"internet_1","label":"internet_1"},{"value":"internet_error","label":"internet_error"},{"value":"key","label":"key"},{"value":"key_1","label":"key_1"},{"value":"kiss","label":"kiss"},{"value":"lamp","label":"lamp"},{"value":"laptop","label":"laptop"},{"value":"layers","label":"layers"},{"value":"layers_1","label":"layers_1"},{"value":"layout","label":"layout"},{"value":"left_arrow","label":"left_arrow"},{"value":"light_bulb","label":"light_bulb"},{"value":"like","label":"like"},{"value":"like_1","label":"like_1"},{"value":"line_chart","label":"line_chart"},{"value":"link","label":"link"},{"value":"linkeding","label":"linkeding"},{"value":"list","label":"list"},{"value":"local_network","label":"local_network"},{"value":"location","label":"location"},{"value":"locked","label":"locked"},{"value":"magazine","label":"magazine"},{"value":"magic_wand","label":"magic_wand"},{"value":"magnet","label":"magnet"},{"value":"mail","label":"mail"},{"value":"mail_account","label":"mail_account"},{"value":"mail_error","label":"mail_error"},{"value":"map_location","label":"map_location"},{"value":"maps","label":"maps"},{"value":"marker","label":"marker"},{"value":"master_data","label":"master_data"},{"value":"mastercard","label":"mastercard"},{"value":"medicine","label":"medicine"},{"value":"menu","label":"menu"},{"value":"mic","label":"mic"},{"value":"microphone","label":"microphone"},{"value":"microphone_1","label":"microphone_1"},{"value":"microscope","label":"microscope"},{"value":"money_bag","label":"money_bag"},{"value":"money","label":"money"},{"value":"money_1","label":"money_1"},{"value":"money_report","label":"money_report"},{"value":"money_report_1","label":"money_report_1"},{"value":"monitor","label":"monitor"},{"value":"more","label":"more"},{"value":"multiple_user","label":"multiple_user"},{"value":"multiple_users","label":"multiple_users"},{"value":"music_library","label":"music_library"},{"value":"music_player","label":"music_player"},{"value":"music_volume_high","label":"music_volume_high"},{"value":"music_volume_low","label":"music_volume_low"},{"value":"music_volume_medium","label":"music_volume_medium"},{"value":"music_volume_mute","label":"music_volume_mute"},{"value":"musical_note","label":"musical_note"},{"value":"mute_mic","label":"mute_mic"},{"value":"network","label":"network"},{"value":"newspaper","label":"newspaper"},{"value":"note","label":"note"},{"value":"notebook","label":"notebook"},{"value":"notification","label":"notification"},{"value":"old_phone","label":"old_phone"},{"value":"online_pay","label":"online_pay"},{"value":"open_book","label":"open_book"},{"value":"open_box","label":"open_box"},{"value":"open_hand","label":"open_hand"},{"value":"p2p","label":"p2p"},{"value":"pallete","label":"pallete"},{"value":"paper_plane","label":"paper_plane"},{"value":"paper_plane_1","label":"paper_plane_1"},{"value":"passage_of_time","label":"passage_of_time"},{"value":"pause","label":"pause"},{"value":"payment","label":"payment"},{"value":"paypal","label":"paypal"},{"value":"pen_drive","label":"pen_drive"},{"value":"perspective","label":"perspective"},{"value":"pet_paw_print","label":"pet_paw_print"},{"value":"phone_book","label":"phone_book"},{"value":"phone_receiver","label":"phone_receiver"},{"value":"photo_camera","label":"photo_camera"},{"value":"picture","label":"picture"},{"value":"pie_chart","label":"pie_chart"},{"value":"piggy_bank","label":"piggy_bank"},{"value":"pinterest","label":"pinterest"},{"value":"piracy","label":"piracy"},{"value":"pizza","label":"pizza"},{"value":"placeholder","label":"placeholder"},{"value":"plan","label":"plan"},{"value":"plane","label":"plane"},{"value":"play_buttom","label":"play_buttom"},{"value":"plus","label":"plus"},{"value":"police_car","label":"police_car"},{"value":"power_on_off","label":"power_on_off"},{"value":"presentation","label":"presentation"},{"value":"preview","label":"preview"},{"value":"preview_1","label":"preview_1"},{"value":"previous","label":"previous"},{"value":"price_tag","label":"price_tag"},{"value":"print_fax","label":"print_fax"},{"value":"project_management","label":"project_management"},{"value":"project_management_1","label":"project_management_1"},{"value":"promotion","label":"promotion"},{"value":"purse","label":"purse"},{"value":"quality","label":"quality"},{"value":"radar","label":"radar"},{"value":"radioactive","label":"radioactive"},{"value":"rainy","label":"rainy"},{"value":"rating","label":"rating"},{"value":"receipt","label":"receipt"},{"value":"recluitment","label":"recluitment"},{"value":"recognition","label":"recognition"},{"value":"record","label":"record"},{"value":"recycle","label":"recycle"},{"value":"red_eye","label":"red_eye"},{"value":"reload","label":"reload"},{"value":"reload_1","label":"reload_1"},{"value":"repair","label":"repair"},{"value":"report","label":"report"},{"value":"research","label":"research"},{"value":"responsive","label":"responsive"},{"value":"restaurant","label":"restaurant"},{"value":"resume","label":"resume"},{"value":"reunion","label":"reunion"},{"value":"right_arrow","label":"right_arrow"},{"value":"risk","label":"risk"},{"value":"rotate","label":"rotate"},{"value":"route","label":"route"},{"value":"runner_man","label":"runner_man"},{"value":"sabe","label":"sabe"},{"value":"sabe_error","label":"sabe_error"},{"value":"safety_box_open","label":"safety_box_open"},{"value":"satellite","label":"satellite"},{"value":"school","label":"school"},{"value":"scissors","label":"scissors"},{"value":"screw","label":"screw"},{"value":"search","label":"search"},{"value":"send","label":"send"},{"value":"send_file","label":"send_file"},{"value":"send_file_1","label":"send_file_1"},{"value":"send_money","label":"send_money"},{"value":"send_package","label":"send_package"},{"value":"server","label":"server"},{"value":"settings","label":"settings"},{"value":"settings_1","label":"settings_1"},{"value":"share","label":"share"},{"value":"shield","label":"shield"},{"value":"ship","label":"ship"},{"value":"shipped","label":"shipped"},{"value":"shop","label":"shop"},{"value":"shopping","label":"shopping"},{"value":"shopping_bag","label":"shopping_bag"},{"value":"shopping_car","label":"shopping_car"},{"value":"shuffle","label":"shuffle"},{"value":"sign","label":"sign"},{"value":"sketch","label":"sketch"},{"value":"sketch_1","label":"sketch_1"},{"value":"skip","label":"skip"},{"value":"smartphone","label":"smartphone"},{"value":"snapchat","label":"snapchat"},{"value":"sniffer","label":"sniffer"},{"value":"social_media","label":"social_media"},{"value":"spam","label":"spam"},{"value":"speech_bubble","label":"speech_bubble"},{"value":"spray","label":"spray"},{"value":"star","label":"star"},{"value":"start_up","label":"start_up"},{"value":"stats_line_chart","label":"stats_line_chart"},{"value":"stethoscope","label":"stethoscope"},{"value":"stop","label":"stop"},{"value":"stop_watch","label":"stop_watch"},{"value":"storage","label":"storage"},{"value":"street","label":"street"},{"value":"student","label":"student"},{"value":"study","label":"study"},{"value":"sun_glasses","label":"sun_glasses"},{"value":"suppport","label":"suppport"},{"value":"switch","label":"switch"},{"value":"tablet","label":"tablet"},{"value":"tabs","label":"tabs"},{"value":"tap_gesture","label":"tap_gesture"},{"value":"target","label":"target"},{"value":"telephone_call","label":"telephone_call"},{"value":"television","label":"television"},{"value":"terminal","label":"terminal"},{"value":"terminal_2","label":"terminal_2"},{"value":"think","label":"think"},{"value":"toast","label":"toast"},{"value":"toast_1","label":"toast_1"},{"value":"tools","label":"tools"},{"value":"traffic_light","label":"traffic_light"},{"value":"transfer_data","label":"transfer_data"},{"value":"trash","label":"trash"},{"value":"treasure_chest","label":"treasure_chest"},{"value":"trojan","label":"trojan"},{"value":"twitter","label":"twitter"},{"value":"two_players","label":"two_players"},{"value":"university","label":"university"},{"value":"unlock","label":"unlock"},{"value":"up_arrow","label":"up_arrow"},{"value":"upload","label":"upload"},{"value":"vector","label":"vector"},{"value":"view","label":"view"},{"value":"vintage_phone","label":"vintage_phone"},{"value":"visa","label":"visa"},{"value":"volume_control","label":"volume_control"},{"value":"wallet","label":"wallet"},{"value":"wallet_1","label":"wallet_1"},{"value":"warning","label":"warning"},{"value":"warning_briefcase","label":"warning_briefcase"},{"value":"warning_chemistry","label":"warning_chemistry"},{"value":"warning_database","label":"warning_database"},{"value":"warning_dowload","label":"warning_dowload"},{"value":"warning_folder","label":"warning_folder"},{"value":"warning_location","label":"warning_location"},{"value":"warning_mail","label":"warning_mail"},{"value":"warning_package","label":"warning_package"},{"value":"warning_search","label":"warning_search"},{"value":"warning_shipped","label":"warning_shipped"},{"value":"warning_terminal","label":"warning_terminal"},{"value":"warning_trash","label":"warning_trash"},{"value":"web_design","label":"web_design"},{"value":"web_domain_registration","label":"web_domain_registration"},{"value":"web_search","label":"web_search"},{"value":"web_search_1","label":"web_search_1"},{"value":"website","label":"website"},{"value":"weight","label":"weight"},{"value":"whatsapp","label":"whatsapp"},{"value":"wheelchair","label":"wheelchair"},{"value":"wifi","label":"wifi"},{"value":"windows","label":"windows"},{"value":"wine_cup","label":"wine_cup"},{"value":"wordpress","label":"wordpress"},{"value":"worldwide","label":"worldwide"},{"value":"youtube","label":"youtube"},{"value":"zcash","label":"zcash"},{"value":"zipped_folder","label":"zipped_folder"},{"value":"zoom_in","label":"zoom_in"},{"value":"zoom_out","label":"zoom_out"},{"value":"loading","label":"loading"}],}
			            },
			            /** Size. */
			            'size': {
			                label: 'Size',
			                type: 'select',
			                options: {choices: [{"value":"medium","label":"medium"},{"value":"extraLarge","label":"Extra lange"}],}
			            },
			    }
		}

		type FancyIconEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.FancyIconSchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface CardFooter {
			
				/** Controller. */
				'controller'?: (HeartwoodTypes.ViewController<SpruceSchemas.Heartwood.v2021_02_11.CardFooter>)| undefined | null
				/** Buttons. */
				'buttons'?: SpruceSchemas.Heartwood.v2021_02_11.Button[]| undefined | null
				/** Loading. */
				'isLoading'?: boolean| undefined | null
				/** Loading. */
				'isEnabled'?: boolean| undefined | null
				/** Show border. */
				'shouldRenderBorder'?: boolean| undefined | null
		}

		interface CardFooterSchema extends SpruceSchema.Schema {
			id: 'cardFooter',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** Controller. */
			            'controller': {
			                label: 'Controller',
			                type: 'raw',
			                options: {valueType: `HeartwoodTypes.ViewController<SpruceSchemas.Heartwood.v2021_02_11.CardFooter>`,}
			            },
			            /** Buttons. */
			            'buttons': {
			                label: 'Buttons',
			                type: 'schema',
			                isArray: true,
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.ButtonSchema,}
			            },
			            /** Loading. */
			            'isLoading': {
			                label: 'Loading',
			                type: 'boolean',
			                options: undefined
			            },
			            /** Loading. */
			            'isEnabled': {
			                label: 'Loading',
			                type: 'boolean',
			                defaultValue: true,
			                options: undefined
			            },
			            /** Show border. */
			            'shouldRenderBorder': {
			                label: 'Show border',
			                type: 'boolean',
			                defaultValue: true,
			                options: undefined
			            },
			    }
		}

		type CardFooterEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.CardFooterSchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface Dialog {
			
				
				'className'?: string| undefined | null
				/** Controller. */
				'controller'?: (HeartwoodTypes.ViewController<SpruceSchemas.Heartwood.v2021_02_11.Dialog>)| undefined | null
				/** Header. */
				'header'?: SpruceSchemas.Heartwood.v2021_02_11.CardHeader| undefined | null
				/** Fade in. */
				'shouldFadeIn'?: boolean| undefined | null
				/** Body. Card bodies are comprised of sections. You will want at least 1 to get started. */
				'body'?: SpruceSchemas.Heartwood.v2021_02_11.CardBody| undefined | null
				/** Footer. */
				'footer'?: SpruceSchemas.Heartwood.v2021_02_11.CardFooter| undefined | null
				/** Visible. */
				'isVisible'?: boolean| undefined | null
				/** Show close button. */
				'shouldShowCloseButton'?: boolean| undefined | null
				/** Close callback. */
				'onClose'?: (() => Promise<void | boolean> | void | boolean)| undefined | null
		}

		interface DialogSchema extends SpruceSchema.Schema {
			id: 'dialog',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: 'Dialog',
			    fields: {
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
			                options: {valueType: `HeartwoodTypes.ViewController<SpruceSchemas.Heartwood.v2021_02_11.Dialog>`,}
			            },
			            /** Header. */
			            'header': {
			                label: 'Header',
			                type: 'schema',
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.CardHeaderSchema,}
			            },
			            /** Fade in. */
			            'shouldFadeIn': {
			                label: 'Fade in',
			                type: 'boolean',
			                defaultValue: true,
			                options: undefined
			            },
			            /** Body. Card bodies are comprised of sections. You will want at least 1 to get started. */
			            'body': {
			                label: 'Body',
			                type: 'schema',
			                hint: 'Card bodies are comprised of sections. You will want at least 1 to get started.',
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.CardBodySchema,}
			            },
			            /** Footer. */
			            'footer': {
			                label: 'Footer',
			                type: 'schema',
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.CardFooterSchema,}
			            },
			            /** Visible. */
			            'isVisible': {
			                label: 'Visible',
			                type: 'boolean',
			                options: undefined
			            },
			            /** Show close button. */
			            'shouldShowCloseButton': {
			                label: 'Show close button',
			                type: 'boolean',
			                options: undefined
			            },
			            /** Close callback. */
			            'onClose': {
			                label: 'Close callback',
			                type: 'raw',
			                options: {valueType: `() => Promise<void | boolean> | void | boolean`,}
			            },
			    }
		}

		type DialogEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.DialogSchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface CardSection {
			
				/** Title. */
				'title'?: string| undefined | null
				/** Complete. When being rendered as a slide, this will signify the step is complete. */
				'isComplete'?: boolean| undefined | null
				/** Controller. */
				'controller'?: (HeartwoodTypes.ViewController<SpruceSchemas.Heartwood.v2021_02_11.CardSection>)| undefined | null
				/** Padding. */
				'shouldBePadded'?: boolean| undefined | null
				/** Center content. */
				'shouldContentBeCentered'?: boolean| undefined | null
				/** Card section item. */
				'text'?: SpruceSchemas.Heartwood.v2021_02_11.Text| undefined | null
				/** Image. */
				'image'?: string| undefined | null
				/** Form. */
				'form'?: SpruceSchemas.Heartwood.v2021_02_11.Form<SpruceSchema.Schema>| undefined | null
				/** Talking Sprucebot. */
				'talkingSprucebot'?: SpruceSchemas.Heartwood.v2021_02_11.TalkingSprucebot| undefined | null
				/** Big form. */
				'bigForm'?: SpruceSchemas.Heartwood.v2021_02_11.BigForm<SpruceSchema.Schema>| undefined | null
				/** Buttons. */
				'buttons'?: SpruceSchemas.Heartwood.v2021_02_11.Button[]| undefined | null
				/** Grid. */
				'shouldRenderContentsAsGrid'?: boolean| undefined | null
				/** Alignment. */
				'alignment'?: ("left" | "center" | "right")| undefined | null
		}

		interface CardSectionSchema extends SpruceSchema.Schema {
			id: 'cardSection',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** Title. */
			            'title': {
			                label: 'Title',
			                type: 'text',
			                options: undefined
			            },
			            /** Complete. When being rendered as a slide, this will signify the step is complete. */
			            'isComplete': {
			                label: 'Complete',
			                type: 'boolean',
			                hint: 'When being rendered as a slide, this will signify the step is complete.',
			                options: undefined
			            },
			            /** Controller. */
			            'controller': {
			                label: 'Controller',
			                type: 'raw',
			                isPrivate: true,
			                options: {valueType: `HeartwoodTypes.ViewController<SpruceSchemas.Heartwood.v2021_02_11.CardSection>`,}
			            },
			            /** Padding. */
			            'shouldBePadded': {
			                label: 'Padding',
			                type: 'boolean',
			                defaultValue: true,
			                options: undefined
			            },
			            /** Center content. */
			            'shouldContentBeCentered': {
			                label: 'Center content',
			                type: 'boolean',
			                defaultValue: false,
			                options: undefined
			            },
			            /** Card section item. */
			            'text': {
			                label: 'Card section item',
			                type: 'schema',
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.TextSchema,}
			            },
			            /** Image. */
			            'image': {
			                label: 'Image',
			                type: 'text',
			                options: undefined
			            },
			            /** Form. */
			            'form': {
			                label: 'Form',
			                type: 'schema',
			                options: {typeSuffix: `<SpruceSchema.Schema>`,schema: SpruceSchemas.Heartwood.v2021_02_11.FormSchema,}
			            },
			            /** Talking Sprucebot. */
			            'talkingSprucebot': {
			                label: 'Talking Sprucebot',
			                type: 'schema',
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.TalkingSprucebotSchema,}
			            },
			            /** Big form. */
			            'bigForm': {
			                label: 'Big form',
			                type: 'schema',
			                options: {typeSuffix: `<SpruceSchema.Schema>`,schema: SpruceSchemas.Heartwood.v2021_02_11.BigFormSchema,}
			            },
			            /** Buttons. */
			            'buttons': {
			                label: 'Buttons',
			                type: 'schema',
			                isArray: true,
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.ButtonSchema,}
			            },
			            /** Grid. */
			            'shouldRenderContentsAsGrid': {
			                label: 'Grid',
			                type: 'boolean',
			                defaultValue: false,
			                options: undefined
			            },
			            /** Alignment. */
			            'alignment': {
			                label: 'Alignment',
			                type: 'select',
			                defaultValue: "left",
			                options: {choices: [{"value":"left","label":"Left"},{"value":"center","label":"Center"},{"value":"right","label":"Right"}],}
			            },
			    }
		}

		type CardSectionEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.CardSectionSchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface CardBody {
			
				/** Show section separators. This will make each section render with a border. */
				'shouldShowSectionSeparators'?: boolean| undefined | null
				/** Disable. */
				'shouldDisable'?: boolean| undefined | null
				/** Swipe controller. */
				'swipeController'?: ((controller: HeartwoodTypes.SwipeController) => void)| undefined | null
				/** Swipe. */
				'shouldEnableSectionSwiping'?: boolean| undefined | null
				/** Select slide title handler. */
				'onSelectSlideTitle'?: ((id: number) => void)| undefined | null
				/** Slide change callback. */
				'onChangeSlide'?: ((slide: number) => void)| undefined | null
				/** Sections. */
				'sections'?: SpruceSchemas.Heartwood.v2021_02_11.CardSection[]| undefined | null
		}

		interface CardBodySchema extends SpruceSchema.Schema {
			id: 'cardBody',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** Show section separators. This will make each section render with a border. */
			            'shouldShowSectionSeparators': {
			                label: 'Show section separators',
			                type: 'boolean',
			                hint: 'This will make each section render with a border.',
			                options: undefined
			            },
			            /** Disable. */
			            'shouldDisable': {
			                label: 'Disable',
			                type: 'boolean',
			                options: undefined
			            },
			            /** Swipe controller. */
			            'swipeController': {
			                label: 'Swipe controller',
			                type: 'raw',
			                options: {valueType: `(controller: HeartwoodTypes.SwipeController) => void`,}
			            },
			            /** Swipe. */
			            'shouldEnableSectionSwiping': {
			                label: 'Swipe',
			                type: 'boolean',
			                options: undefined
			            },
			            /** Select slide title handler. */
			            'onSelectSlideTitle': {
			                label: 'Select slide title handler',
			                type: 'raw',
			                options: {valueType: `(id: number) => void`,}
			            },
			            /** Slide change callback. */
			            'onChangeSlide': {
			                label: 'Slide change callback',
			                type: 'raw',
			                options: {valueType: `(slide: number) => void`,}
			            },
			            /** Sections. */
			            'sections': {
			                label: 'Sections',
			                type: 'schema',
			                isArray: true,
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.CardSectionSchema,}
			            },
			    }
		}

		type CardBodyEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.CardBodySchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface Card {
			
				
				'className'?: string| undefined | null
				/** Controller. */
				'controller'?: (HeartwoodTypes.CardViewController)| undefined | null
				/** Header. */
				'header'?: SpruceSchemas.Heartwood.v2021_02_11.CardHeader| undefined | null
				/** Fade in. */
				'shouldFadeIn'?: boolean| undefined | null
				/** Body. Card bodies are comprised of sections. You will want at least 1 to get started. */
				'body'?: SpruceSchemas.Heartwood.v2021_02_11.CardBody| undefined | null
				/** Footer. */
				'footer'?: SpruceSchemas.Heartwood.v2021_02_11.CardFooter| undefined | null
		}

		interface CardSchema extends SpruceSchema.Schema {
			id: 'card',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: 'Card',
			    fields: {
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
			                options: {valueType: `HeartwoodTypes.CardViewController`,}
			            },
			            /** Header. */
			            'header': {
			                label: 'Header',
			                type: 'schema',
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.CardHeaderSchema,}
			            },
			            /** Fade in. */
			            'shouldFadeIn': {
			                label: 'Fade in',
			                type: 'boolean',
			                defaultValue: true,
			                options: undefined
			            },
			            /** Body. Card bodies are comprised of sections. You will want at least 1 to get started. */
			            'body': {
			                label: 'Body',
			                type: 'schema',
			                hint: 'Card bodies are comprised of sections. You will want at least 1 to get started.',
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.CardBodySchema,}
			            },
			            /** Footer. */
			            'footer': {
			                label: 'Footer',
			                type: 'schema',
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.CardFooterSchema,}
			            },
			    }
		}

		type CardEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.CardSchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface BigFormSection<S extends SpruceSchema.Schema = SpruceSchema.Schema> {
			
				
				'className'?: string| undefined | null
				/** Initial values. */
				'values'?: (SpruceSchema.SchemaPartialValues<S>)| undefined | null
				/** Title. */
				'title'?: string| undefined | null
				/** Form fields. Put any fields from the schema you provided to be shown in this section. Can be array of field names or objects with a key of name. */
				'fields': (SpruceSchema.SchemaFieldNames<S> | HeartwoodTypes.FieldRenderOptions<S>)[]
				
				'shouldShowSubmitButton'?: boolean| undefined | null
		}

		interface BigFormSectionSchema extends SpruceSchema.Schema {
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
			            /** Form fields. Put any fields from the schema you provided to be shown in this section. Can be array of field names or objects with a key of name. */
			            'fields': {
			                label: 'Form fields',
			                type: 'raw',
			                isRequired: true,
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

		type BigFormSectionEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.BigFormSectionSchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface BigForm<S extends SpruceSchema.Schema = SpruceSchema.Schema> {
			
				
				'id': string
				
				'className'?: string| undefined | null
				/** Controller. */
				'controller'?: (HeartwoodTypes.BigFormViewController<S>)| undefined | null
				
				'schema': (S)
				/** Submit handler. */
				'onSubmit'?: (HeartwoodTypes.SubmitHandler<S>)| undefined | null
				/** Change handler. */
				'onChange'?: ((options: HeartwoodTypes.FormOnChangeOptions<S>) => Promise<void> | void)| undefined | null
				/** Values. The values you want the form to have. Control is given to the FormViewController after render. */
				'values'?: (SpruceSchema.SchemaPartialValues<S>)| undefined | null
				/** Errors by field. */
				'errorsByField'?: (HeartwoodTypes.FormErrorsByField<S>)| undefined | null
				/** Show submit controls. */
				'shouldShowSubmitControls'?: boolean| undefined | null
				/** Show cancel button. */
				'shouldShowCancelButton'?: boolean| undefined | null
				/** Busy. */
				'isBusy'?: boolean| undefined | null
				/** Set value handler. */
				'setValue': ((name: SpruceSchema.SchemaFieldNames<S>, value: any) => void)
				/** Form sections. */
				'sections': SpruceSchemas.Heartwood.v2021_02_11.BigFormSection<S>[]
				/** Present slide. The slide showing now! */
				'presentSlide'?: number| undefined | null
				/** Submit handler. */
				'onSubmitSlide'?: (HeartwoodTypes.SubmitHandler<S, { presentSlide: number }>)| undefined | null
		}

		interface BigFormSchema extends SpruceSchema.Schema {
			id: 'bigForm',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: 'Big form',
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
			                options: {valueType: `HeartwoodTypes.BigFormViewController<S>`,}
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
			                options: {typeSuffix: `<S>`,schema: SpruceSchemas.Heartwood.v2021_02_11.BigFormSectionSchema,}
			            },
			            /** Present slide. The slide showing now! */
			            'presentSlide': {
			                label: 'Present slide',
			                type: 'number',
			                hint: 'The slide showing now!',
			                defaultValue: 0,
			                options: undefined
			            },
			            /** Submit handler. */
			            'onSubmitSlide': {
			                label: 'Submit handler',
			                type: 'raw',
			                options: {valueType: `HeartwoodTypes.SubmitHandler<S, { presentSlide: number }>`,}
			            },
			    }
		}

		type BigFormEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.BigFormSchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		/** Avatar that makes size optional for use with the Sprucebot Typed Message component */
		interface SprucebotTypedMessageAvatar {
			
				/** Size. */
				'size'?: ("small" | "medium" | "large")| undefined | null
				/** State of mind. */
				'stateOfMind': ("chill" | "contemplative" | "accomplished")
		}

		interface SprucebotTypedMessageAvatarSchema extends SpruceSchema.Schema {
			id: 'sprucebotTypedMessageAvatar',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: 'Typed message avatar',
			description: 'Avatar that makes size optional for use with the Sprucebot Typed Message component',
			    fields: {
			            /** Size. */
			            'size': {
			                label: 'Size',
			                type: 'select',
			                defaultValue: "medium",
			                options: {choices: [{"value":"small","label":"Small"},{"value":"medium","label":"Medium"},{"value":"large","label":"Large"}],}
			            },
			            /** State of mind. */
			            'stateOfMind': {
			                label: 'State of mind',
			                type: 'select',
			                isRequired: true,
			                defaultValue: "chill",
			                options: {choices: [{"value":"chill","label":"Chill - Sprucebot is saying something informative or a salutation"},{"value":"contemplative","label":"Contemplative - Sprucebot is loading or sending data"},{"value":"accomplished","label":"Accomplished - Sprucebot is celebrating because a process has finished"}],}
			            },
			    }
		}

		type SprucebotTypedMessageAvatarEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.SprucebotTypedMessageAvatarSchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface TalkingSprucebot {
			
				/** Sentences. Sprucebot will type out these sentences one at a time preserving what is similar between each one (in bold) */
				'sentences': SpruceSchemas.Heartwood.v2021_02_11.SprucebotTypedMessageSentence[]
				/** Default avatar. How should Sprucebot be rendered by default */
				'defaultAvatar'?: SpruceSchemas.Heartwood.v2021_02_11.SprucebotTypedMessageAvatar| undefined | null
				/** Start delay. How long should I wait before starting to type? */
				'startDelay'?: SpruceSchema.DurationFieldValue| undefined | null
				/** Loop. */
				'shouldLoop'?: boolean| undefined | null
				/** Size. */
				'size'?: ("small" | "medium" | "large")| undefined | null
				/** Paused. */
				'isPaused'?: boolean| undefined | null
				/** Completion handler. */
				'onComplete'?: (() => Promise<void> | void)| undefined | null
		}

		interface TalkingSprucebotSchema extends SpruceSchema.Schema {
			id: 'talkingSprucebot',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: 'Talking sprucebot',
			    fields: {
			            /** Sentences. Sprucebot will type out these sentences one at a time preserving what is similar between each one (in bold) */
			            'sentences': {
			                label: 'Sentences',
			                type: 'schema',
			                isRequired: true,
			                hint: 'Sprucebot will type out these sentences one at a time preserving what is similar between each one (in bold)',
			                isArray: true,
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.SprucebotTypedMessageSentenceSchema,}
			            },
			            /** Default avatar. How should Sprucebot be rendered by default */
			            'defaultAvatar': {
			                label: 'Default avatar',
			                type: 'schema',
			                hint: 'How should Sprucebot be rendered by default',
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.SprucebotTypedMessageAvatarSchema,}
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
			            /** Paused. */
			            'isPaused': {
			                label: 'Paused',
			                type: 'boolean',
			                options: undefined
			            },
			            /** Completion handler. */
			            'onComplete': {
			                label: 'Completion handler',
			                type: 'raw',
			                options: {valueType: `() => Promise<void> | void`,}
			            },
			    }
		}

		type TalkingSprucebotEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.TalkingSprucebotSchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface SprucebotAvatar {
			
				/** Size. */
				'size': ("small" | "medium" | "large")
				/** State of mind. */
				'stateOfMind': ("chill" | "contemplative" | "accomplished")
		}

		interface SprucebotAvatarSchema extends SpruceSchema.Schema {
			id: 'sprucebotAvatar',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: 'Sprucebot avatar',
			    fields: {
			            /** Size. */
			            'size': {
			                label: 'Size',
			                type: 'select',
			                isRequired: true,
			                defaultValue: "medium",
			                options: {choices: [{"value":"small","label":"Small"},{"value":"medium","label":"Medium"},{"value":"large","label":"Large"}],}
			            },
			            /** State of mind. */
			            'stateOfMind': {
			                label: 'State of mind',
			                type: 'select',
			                isRequired: true,
			                defaultValue: "chill",
			                options: {choices: [{"value":"chill","label":"Chill - Sprucebot is saying something informative or a salutation"},{"value":"contemplative","label":"Contemplative - Sprucebot is loading or sending data"},{"value":"accomplished","label":"Accomplished - Sprucebot is celebrating because a process has finished"}],}
			            },
			    }
		}

		type SprucebotAvatarEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.SprucebotAvatarSchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface SprucebotTypedMessageSentence {
			
				/** . A way to override the Sprucebot avatar for this sentence */
				'avatar'?: SpruceSchemas.Heartwood.v2021_02_11.SprucebotAvatar| undefined | null
				/** Words. The words being typed out */
				'words': string
				/** End delay. How long should I hold on this sentence after it's typed? */
				'endDelay'?: SpruceSchema.DurationFieldValue| undefined | null
		}

		interface SprucebotTypedMessageSentenceSchema extends SpruceSchema.Schema {
			id: 'sprucebotTypedMessageSentence',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: 'Sprucebot Typed sentence',
			    fields: {
			            /** . A way to override the Sprucebot avatar for this sentence */
			            'avatar': {
			                type: 'schema',
			                hint: 'A way to override the Sprucebot avatar for this sentence',
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.SprucebotAvatarSchema,}
			            },
			            /** Words. The words being typed out */
			            'words': {
			                label: 'Words',
			                type: 'text',
			                isRequired: true,
			                hint: 'The words being typed out',
			                options: undefined
			            },
			            /** End delay. How long should I hold on this sentence after it's typed? */
			            'endDelay': {
			                label: 'End delay',
			                type: 'duration',
			                hint: 'How long should I hold on this sentence after it\'s typed?',
			                options: undefined
			            },
			    }
		}

		type SprucebotTypedMessageSentenceEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.SprucebotTypedMessageSentenceSchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface FormSection<S extends SpruceSchema.Schema = SpruceSchema.Schema> {
			
				
				'className'?: string| undefined | null
				/** Initial values. */
				'values'?: (SpruceSchema.SchemaPartialValues<S>)| undefined | null
				/** Title. */
				'title'?: string| undefined | null
				/** Form fields. Put any fields from the schema you provided to be shown in this section. Can be array of field names or objects with a key of name. */
				'fields': (SpruceSchema.SchemaFieldNames<S> | HeartwoodTypes.FieldRenderOptions<S>)[]
		}

		interface FormSectionSchema extends SpruceSchema.Schema {
			id: 'formSection',
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
			            /** Form fields. Put any fields from the schema you provided to be shown in this section. Can be array of field names or objects with a key of name. */
			            'fields': {
			                label: 'Form fields',
			                type: 'raw',
			                isRequired: true,
			                hint: 'Put any fields from the schema you provided to be shown in this section. Can be array of field names or objects with a key of name.',
			                isArray: true,
			                options: {valueType: `SpruceSchema.SchemaFieldNames<S> | HeartwoodTypes.FieldRenderOptions<S>`,}
			            },
			    }
		}

		type FormSectionEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.FormSectionSchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface Form<S extends SpruceSchema.Schema = SpruceSchema.Schema> {
			
				
				'id': string
				
				'className'?: string| undefined | null
				/** Controller. */
				'controller'?: (HeartwoodTypes.FormViewController<S>)| undefined | null
				
				'schema': (S)
				/** Submit handler. */
				'onSubmit'?: (HeartwoodTypes.SubmitHandler<S>)| undefined | null
				/** Change handler. */
				'onChange'?: ((options: HeartwoodTypes.FormOnChangeOptions<S>) => Promise<void> | void)| undefined | null
				/** Values. The values you want the form to have. Control is given to the FormViewController after render. */
				'values'?: (SpruceSchema.SchemaPartialValues<S>)| undefined | null
				/** Errors by field. */
				'errorsByField'?: (HeartwoodTypes.FormErrorsByField<S>)| undefined | null
				/** Show submit controls. */
				'shouldShowSubmitControls'?: boolean| undefined | null
				/** Show cancel button. */
				'shouldShowCancelButton'?: boolean| undefined | null
				/** Busy. */
				'isBusy'?: boolean| undefined | null
				/** Set value handler. */
				'setValue': ((name: SpruceSchema.SchemaFieldNames<S>, value: any) => void)
				/** Form sections. */
				'sections': SpruceSchemas.Heartwood.v2021_02_11.FormSection<S>[]
		}

		interface FormSchema extends SpruceSchema.Schema {
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
			                options: {typeSuffix: `<S>`,schema: SpruceSchemas.Heartwood.v2021_02_11.FormSectionSchema,}
			            },
			    }
		}

		type FormEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.FormSchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface Text {
			
				
				'className'?: string| undefined | null
				/** Text. */
				'content'?: string| undefined | null
				/** Html. */
				'html'?: string| undefined | null
				/** Align. */
				'align'?: ("left" | "right")| undefined | null
		}

		interface TextSchema extends SpruceSchema.Schema {
			id: 'text',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: 'Text',
			    fields: {
			            /** . */
			            'className': {
			                type: 'text',
			                isPrivate: true,
			                options: undefined
			            },
			            /** Text. */
			            'content': {
			                label: 'Text',
			                type: 'text',
			                options: undefined
			            },
			            /** Html. */
			            'html': {
			                label: 'Html',
			                type: 'text',
			                options: undefined
			            },
			            /** Align. */
			            'align': {
			                label: 'Align',
			                type: 'select',
			                defaultValue: "left",
			                options: {choices: [{"value":"left","label":"Left"},{"value":"right","label":"Right"}],}
			            },
			    }
		}

		type TextEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.TextSchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface CardHeader {
			
				/** Title. */
				'title'?: string| undefined | null
				/** Controller. */
				'controller'?: (HeartwoodTypes.ViewController<SpruceSchemas.Heartwood.v2021_02_11.CardHeader>)| undefined | null
				/** Subtitle. */
				'subtitle'?: string| undefined | null
				/** Icon. */
				'icon'?: ("accesibility" | "add" | "address_book" | "administrator" | "airbrush" | "airplane" | "alarm" | "alien" | "american_express" | "analysis" | "analysis_1" | "archive" | "art_palette" | "artificial_intelligence" | "artificial_intelligence_1" | "at" | "atm" | "attachment" | "audio" | "audio_knob" | "auricular_phone" | "back" | "backup" | "balance" | "band_aid" | "bank" | "barcode" | "basketball" | "battery" | "beer" | "bell" | "bicycle" | "bill" | "binoculars" | "birthday" | "bitcoin" | "blog" | "bluetooth" | "bomb" | "book" | "bookmark" | "box" | "brain" | "brainstorm" | "briefcase" | "briefcase_money" | "broken_heart" | "broken_link" | "brush_tip" | "bus" | "cake" | "calculator" | "calendar" | "car" | "cat" | "certificate" | "champagne" | "chat" | "chat_1" | "check" | "check_1" | "chip" | "cirrus" | "city" | "city_1" | "citybank" | "clicker" | "clip" | "clipboard" | "clock" | "cloud" | "cloud_1" | "cloud_computing" | "cloud_computing_1" | "cloudy" | "cocktail" | "code" | "coffee_cup" | "coin_dollar" | "coin_pound" | "coins" | "coinstack" | "collaboration" | "command" | "company" | "compass" | "compose" | "computer_graphics" | "connection" | "contract" | "contract_1" | "contrast" | "control" | "control_game" | "copy" | "costumer" | "coupon" | "crash" | "creative" | "credit_card" | "credit_card1" | "credit_card_2" | "cross" | "cursor" | "dashboard" | "database" | "delete" | "dentistry" | "diary" | "diet" | "digital_campaing" | "digital_key" | "diners_club" | "disc" | "discount" | "dish" | "dish_1" | "dislike" | "divider" | "doctor" | "dog" | "dollar_coin" | "dollar_sign" | "dowload" | "down_arrow" | "download" | "edit" | "edit_file" | "editor" | "education" | "eject" | "emergency" | "employed" | "encrypted_database" | "encrypted_folder" | "encrypted_internet_conection" | "encrypted_mail" | "encryption" | "encypted_terminal" | "enterprice" | "equal" | "erase_file" | "erase_sabe" | "error_database" | "error_search" | "error_terminal" | "euro_sign" | "exit" | "external_link" | "facebook" | "feedback" | "file" | "fill" | "finger_print" | "firewall" | "flag" | "flash" | "flash_auto" | "flash_red_eye" | "flashlight" | "folder_gallery" | "folder" | "football" | "forbidden" | "french_fries" | "funnel" | "gallery" | "game_control" | "games_card_clubs" | "games_card_diamonds" | "games_card_hearts" | "games_card_spades" | "gift" | "girl" | "gmail" | "gold" | "graduated" | "group" | "hamburguer" | "hand" | "hand_note" | "hand_point" | "hand_shake" | "headphones" | "heart" | "heart_1" | "help" | "hide" | "high_five" | "hold" | "home" | "homework" | "hotel" | "hourglass" | "house" | "icon" | "id_card" | "idea" | "infinity" | "info" | "information" | "innovation" | "instagram" | "internet" | "internet_1" | "internet_error" | "key" | "key_1" | "kiss" | "lamp" | "laptop" | "layers" | "layers_1" | "layout" | "left_arrow" | "light_bulb" | "like" | "like_1" | "line_chart" | "link" | "linkeding" | "list" | "local_network" | "location" | "locked" | "magazine" | "magic_wand" | "magnet" | "mail" | "mail_account" | "mail_error" | "map_location" | "maps" | "marker" | "master_data" | "mastercard" | "medicine" | "menu" | "mic" | "microphone" | "microphone_1" | "microscope" | "money_bag" | "money" | "money_1" | "money_report" | "money_report_1" | "monitor" | "more" | "multiple_user" | "multiple_users" | "music_library" | "music_player" | "music_volume_high" | "music_volume_low" | "music_volume_medium" | "music_volume_mute" | "musical_note" | "mute_mic" | "network" | "newspaper" | "note" | "notebook" | "notification" | "old_phone" | "online_pay" | "open_book" | "open_box" | "open_hand" | "p2p" | "pallete" | "paper_plane" | "paper_plane_1" | "passage_of_time" | "pause" | "payment" | "paypal" | "pen_drive" | "perspective" | "pet_paw_print" | "phone_book" | "phone_receiver" | "photo_camera" | "picture" | "pie_chart" | "piggy_bank" | "pinterest" | "piracy" | "pizza" | "placeholder" | "plan" | "plane" | "play_buttom" | "plus" | "police_car" | "power_on_off" | "presentation" | "preview" | "preview_1" | "previous" | "price_tag" | "print_fax" | "project_management" | "project_management_1" | "promotion" | "purse" | "quality" | "radar" | "radioactive" | "rainy" | "rating" | "receipt" | "recluitment" | "recognition" | "record" | "recycle" | "red_eye" | "reload" | "reload_1" | "repair" | "report" | "research" | "responsive" | "restaurant" | "resume" | "reunion" | "right_arrow" | "risk" | "rotate" | "route" | "runner_man" | "sabe" | "sabe_error" | "safety_box_open" | "satellite" | "school" | "scissors" | "screw" | "search" | "send" | "send_file" | "send_file_1" | "send_money" | "send_package" | "server" | "settings" | "settings_1" | "share" | "shield" | "ship" | "shipped" | "shop" | "shopping" | "shopping_bag" | "shopping_car" | "shuffle" | "sign" | "sketch" | "sketch_1" | "skip" | "smartphone" | "snapchat" | "sniffer" | "social_media" | "spam" | "speech_bubble" | "spray" | "star" | "start_up" | "stats_line_chart" | "stethoscope" | "stop" | "stop_watch" | "storage" | "street" | "student" | "study" | "sun_glasses" | "suppport" | "switch" | "tablet" | "tabs" | "tap_gesture" | "target" | "telephone_call" | "television" | "terminal" | "terminal_2" | "think" | "toast" | "toast_1" | "tools" | "traffic_light" | "transfer_data" | "trash" | "treasure_chest" | "trojan" | "twitter" | "two_players" | "university" | "unlock" | "up_arrow" | "upload" | "vector" | "view" | "vintage_phone" | "visa" | "volume_control" | "wallet" | "wallet_1" | "warning" | "warning_briefcase" | "warning_chemistry" | "warning_database" | "warning_dowload" | "warning_folder" | "warning_location" | "warning_mail" | "warning_package" | "warning_search" | "warning_shipped" | "warning_terminal" | "warning_trash" | "web_design" | "web_domain_registration" | "web_search" | "web_search_1" | "website" | "weight" | "whatsapp" | "wheelchair" | "wifi" | "windows" | "wine_cup" | "wordpress" | "worldwide" | "youtube" | "zcash" | "zipped_folder" | "zoom_in" | "zoom_out" | "loading")| undefined | null
				/** Image. The absolute url to any image you want shown in the header. */
				'image'?: string| undefined | null
				/** Image size. How should the header image be rendered */
				'imageSize'?: ("cover" | "contain")| undefined | null
				/** Close handler. Meant for use inside React components directly. */
				'closeHandler'?: (() => Promise<void> | void)| undefined | null
		}

		interface CardHeaderSchema extends SpruceSchema.Schema {
			id: 'cardHeader',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** Title. */
			            'title': {
			                label: 'Title',
			                type: 'text',
			                options: undefined
			            },
			            /** Controller. */
			            'controller': {
			                label: 'Controller',
			                type: 'raw',
			                options: {valueType: `HeartwoodTypes.ViewController<SpruceSchemas.Heartwood.v2021_02_11.CardHeader>`,}
			            },
			            /** Subtitle. */
			            'subtitle': {
			                label: 'Subtitle',
			                type: 'text',
			                options: undefined
			            },
			            /** Icon. */
			            'icon': {
			                label: 'Icon',
			                type: 'select',
			                options: {choices: [{"value":"accesibility","label":"accesibility"},{"value":"add","label":"add"},{"value":"address_book","label":"address_book"},{"value":"administrator","label":"administrator"},{"value":"airbrush","label":"airbrush"},{"value":"airplane","label":"airplane"},{"value":"alarm","label":"alarm"},{"value":"alien","label":"alien"},{"value":"american_express","label":"american_express"},{"value":"analysis","label":"analysis"},{"value":"analysis_1","label":"analysis_1"},{"value":"archive","label":"archive"},{"value":"art_palette","label":"art_palette"},{"value":"artificial_intelligence","label":"artificial_intelligence"},{"value":"artificial_intelligence_1","label":"artificial_intelligence_1"},{"value":"at","label":"at"},{"value":"atm","label":"atm"},{"value":"attachment","label":"attachment"},{"value":"audio","label":"audio"},{"value":"audio_knob","label":"audio_knob"},{"value":"auricular_phone","label":"auricular_phone"},{"value":"back","label":"back"},{"value":"backup","label":"backup"},{"value":"balance","label":"balance"},{"value":"band_aid","label":"band_aid"},{"value":"bank","label":"bank"},{"value":"barcode","label":"barcode"},{"value":"basketball","label":"basketball"},{"value":"battery","label":"battery"},{"value":"beer","label":"beer"},{"value":"bell","label":"bell"},{"value":"bicycle","label":"bicycle"},{"value":"bill","label":"bill"},{"value":"binoculars","label":"binoculars"},{"value":"birthday","label":"birthday"},{"value":"bitcoin","label":"bitcoin"},{"value":"blog","label":"blog"},{"value":"bluetooth","label":"bluetooth"},{"value":"bomb","label":"bomb"},{"value":"book","label":"book"},{"value":"bookmark","label":"bookmark"},{"value":"box","label":"box"},{"value":"brain","label":"brain"},{"value":"brainstorm","label":"brainstorm"},{"value":"briefcase","label":"briefcase"},{"value":"briefcase_money","label":"briefcase_money"},{"value":"broken_heart","label":"broken_heart"},{"value":"broken_link","label":"broken_link"},{"value":"brush_tip","label":"brush_tip"},{"value":"bus","label":"bus"},{"value":"cake","label":"cake"},{"value":"calculator","label":"calculator"},{"value":"calendar","label":"calendar"},{"value":"car","label":"car"},{"value":"cat","label":"cat"},{"value":"certificate","label":"certificate"},{"value":"champagne","label":"champagne"},{"value":"chat","label":"chat"},{"value":"chat_1","label":"chat_1"},{"value":"check","label":"check"},{"value":"check_1","label":"check_1"},{"value":"chip","label":"chip"},{"value":"cirrus","label":"cirrus"},{"value":"city","label":"city"},{"value":"city_1","label":"city_1"},{"value":"citybank","label":"citybank"},{"value":"clicker","label":"clicker"},{"value":"clip","label":"clip"},{"value":"clipboard","label":"clipboard"},{"value":"clock","label":"clock"},{"value":"cloud","label":"cloud"},{"value":"cloud_1","label":"cloud_1"},{"value":"cloud_computing","label":"cloud_computing"},{"value":"cloud_computing_1","label":"cloud_computing_1"},{"value":"cloudy","label":"cloudy"},{"value":"cocktail","label":"cocktail"},{"value":"code","label":"code"},{"value":"coffee_cup","label":"coffee_cup"},{"value":"coin_dollar","label":"coin_dollar"},{"value":"coin_pound","label":"coin_pound"},{"value":"coins","label":"coins"},{"value":"coinstack","label":"coinstack"},{"value":"collaboration","label":"collaboration"},{"value":"command","label":"command"},{"value":"company","label":"company"},{"value":"compass","label":"compass"},{"value":"compose","label":"compose"},{"value":"computer_graphics","label":"computer_graphics"},{"value":"connection","label":"connection"},{"value":"contract","label":"contract"},{"value":"contract_1","label":"contract_1"},{"value":"contrast","label":"contrast"},{"value":"control","label":"control"},{"value":"control_game","label":"control_game"},{"value":"copy","label":"copy"},{"value":"costumer","label":"costumer"},{"value":"coupon","label":"coupon"},{"value":"crash","label":"crash"},{"value":"creative","label":"creative"},{"value":"credit_card","label":"credit_card"},{"value":"credit_card1","label":"credit_card1"},{"value":"credit_card_2","label":"credit_card_2"},{"value":"cross","label":"cross"},{"value":"cursor","label":"cursor"},{"value":"dashboard","label":"dashboard"},{"value":"database","label":"database"},{"value":"delete","label":"delete"},{"value":"dentistry","label":"dentistry"},{"value":"diary","label":"diary"},{"value":"diet","label":"diet"},{"value":"digital_campaing","label":"digital_campaing"},{"value":"digital_key","label":"digital_key"},{"value":"diners_club","label":"diners_club"},{"value":"disc","label":"disc"},{"value":"discount","label":"discount"},{"value":"dish","label":"dish"},{"value":"dish_1","label":"dish_1"},{"value":"dislike","label":"dislike"},{"value":"divider","label":"divider"},{"value":"doctor","label":"doctor"},{"value":"dog","label":"dog"},{"value":"dollar_coin","label":"dollar_coin"},{"value":"dollar_sign","label":"dollar_sign"},{"value":"dowload","label":"dowload"},{"value":"down_arrow","label":"down_arrow"},{"value":"download","label":"download"},{"value":"edit","label":"edit"},{"value":"edit_file","label":"edit_file"},{"value":"editor","label":"editor"},{"value":"education","label":"education"},{"value":"eject","label":"eject"},{"value":"emergency","label":"emergency"},{"value":"employed","label":"employed"},{"value":"encrypted_database","label":"encrypted_database"},{"value":"encrypted_folder","label":"encrypted_folder"},{"value":"encrypted_internet_conection","label":"encrypted_internet_conection"},{"value":"encrypted_mail","label":"encrypted_mail"},{"value":"encryption","label":"encryption"},{"value":"encypted_terminal","label":"encypted_terminal"},{"value":"enterprice","label":"enterprice"},{"value":"equal","label":"equal"},{"value":"erase_file","label":"erase_file"},{"value":"erase_sabe","label":"erase_sabe"},{"value":"error_database","label":"error_database"},{"value":"error_search","label":"error_search"},{"value":"error_terminal","label":"error_terminal"},{"value":"euro_sign","label":"euro_sign"},{"value":"exit","label":"exit"},{"value":"external_link","label":"external_link"},{"value":"facebook","label":"facebook"},{"value":"feedback","label":"feedback"},{"value":"file","label":"file"},{"value":"fill","label":"fill"},{"value":"finger_print","label":"finger_print"},{"value":"firewall","label":"firewall"},{"value":"flag","label":"flag"},{"value":"flash","label":"flash"},{"value":"flash_auto","label":"flash_auto"},{"value":"flash_red_eye","label":"flash_red_eye"},{"value":"flashlight","label":"flashlight"},{"value":"folder_gallery","label":"folder_gallery"},{"value":"folder","label":"folder"},{"value":"football","label":"football"},{"value":"forbidden","label":"forbidden"},{"value":"french_fries","label":"french_fries"},{"value":"funnel","label":"funnel"},{"value":"gallery","label":"gallery"},{"value":"game_control","label":"game_control"},{"value":"games_card_clubs","label":"games_card_clubs"},{"value":"games_card_diamonds","label":"games_card_diamonds"},{"value":"games_card_hearts","label":"games_card_hearts"},{"value":"games_card_spades","label":"games_card_spades"},{"value":"gift","label":"gift"},{"value":"girl","label":"girl"},{"value":"gmail","label":"gmail"},{"value":"gold","label":"gold"},{"value":"graduated","label":"graduated"},{"value":"group","label":"group"},{"value":"hamburguer","label":"hamburguer"},{"value":"hand","label":"hand"},{"value":"hand_note","label":"hand_note"},{"value":"hand_point","label":"hand_point"},{"value":"hand_shake","label":"hand_shake"},{"value":"headphones","label":"headphones"},{"value":"heart","label":"heart"},{"value":"heart_1","label":"heart_1"},{"value":"help","label":"help"},{"value":"hide","label":"hide"},{"value":"high_five","label":"high_five"},{"value":"hold","label":"hold"},{"value":"home","label":"home"},{"value":"homework","label":"homework"},{"value":"hotel","label":"hotel"},{"value":"hourglass","label":"hourglass"},{"value":"house","label":"house"},{"value":"icon","label":"icon"},{"value":"id_card","label":"id_card"},{"value":"idea","label":"idea"},{"value":"infinity","label":"infinity"},{"value":"info","label":"info"},{"value":"information","label":"information"},{"value":"innovation","label":"innovation"},{"value":"instagram","label":"instagram"},{"value":"internet","label":"internet"},{"value":"internet_1","label":"internet_1"},{"value":"internet_error","label":"internet_error"},{"value":"key","label":"key"},{"value":"key_1","label":"key_1"},{"value":"kiss","label":"kiss"},{"value":"lamp","label":"lamp"},{"value":"laptop","label":"laptop"},{"value":"layers","label":"layers"},{"value":"layers_1","label":"layers_1"},{"value":"layout","label":"layout"},{"value":"left_arrow","label":"left_arrow"},{"value":"light_bulb","label":"light_bulb"},{"value":"like","label":"like"},{"value":"like_1","label":"like_1"},{"value":"line_chart","label":"line_chart"},{"value":"link","label":"link"},{"value":"linkeding","label":"linkeding"},{"value":"list","label":"list"},{"value":"local_network","label":"local_network"},{"value":"location","label":"location"},{"value":"locked","label":"locked"},{"value":"magazine","label":"magazine"},{"value":"magic_wand","label":"magic_wand"},{"value":"magnet","label":"magnet"},{"value":"mail","label":"mail"},{"value":"mail_account","label":"mail_account"},{"value":"mail_error","label":"mail_error"},{"value":"map_location","label":"map_location"},{"value":"maps","label":"maps"},{"value":"marker","label":"marker"},{"value":"master_data","label":"master_data"},{"value":"mastercard","label":"mastercard"},{"value":"medicine","label":"medicine"},{"value":"menu","label":"menu"},{"value":"mic","label":"mic"},{"value":"microphone","label":"microphone"},{"value":"microphone_1","label":"microphone_1"},{"value":"microscope","label":"microscope"},{"value":"money_bag","label":"money_bag"},{"value":"money","label":"money"},{"value":"money_1","label":"money_1"},{"value":"money_report","label":"money_report"},{"value":"money_report_1","label":"money_report_1"},{"value":"monitor","label":"monitor"},{"value":"more","label":"more"},{"value":"multiple_user","label":"multiple_user"},{"value":"multiple_users","label":"multiple_users"},{"value":"music_library","label":"music_library"},{"value":"music_player","label":"music_player"},{"value":"music_volume_high","label":"music_volume_high"},{"value":"music_volume_low","label":"music_volume_low"},{"value":"music_volume_medium","label":"music_volume_medium"},{"value":"music_volume_mute","label":"music_volume_mute"},{"value":"musical_note","label":"musical_note"},{"value":"mute_mic","label":"mute_mic"},{"value":"network","label":"network"},{"value":"newspaper","label":"newspaper"},{"value":"note","label":"note"},{"value":"notebook","label":"notebook"},{"value":"notification","label":"notification"},{"value":"old_phone","label":"old_phone"},{"value":"online_pay","label":"online_pay"},{"value":"open_book","label":"open_book"},{"value":"open_box","label":"open_box"},{"value":"open_hand","label":"open_hand"},{"value":"p2p","label":"p2p"},{"value":"pallete","label":"pallete"},{"value":"paper_plane","label":"paper_plane"},{"value":"paper_plane_1","label":"paper_plane_1"},{"value":"passage_of_time","label":"passage_of_time"},{"value":"pause","label":"pause"},{"value":"payment","label":"payment"},{"value":"paypal","label":"paypal"},{"value":"pen_drive","label":"pen_drive"},{"value":"perspective","label":"perspective"},{"value":"pet_paw_print","label":"pet_paw_print"},{"value":"phone_book","label":"phone_book"},{"value":"phone_receiver","label":"phone_receiver"},{"value":"photo_camera","label":"photo_camera"},{"value":"picture","label":"picture"},{"value":"pie_chart","label":"pie_chart"},{"value":"piggy_bank","label":"piggy_bank"},{"value":"pinterest","label":"pinterest"},{"value":"piracy","label":"piracy"},{"value":"pizza","label":"pizza"},{"value":"placeholder","label":"placeholder"},{"value":"plan","label":"plan"},{"value":"plane","label":"plane"},{"value":"play_buttom","label":"play_buttom"},{"value":"plus","label":"plus"},{"value":"police_car","label":"police_car"},{"value":"power_on_off","label":"power_on_off"},{"value":"presentation","label":"presentation"},{"value":"preview","label":"preview"},{"value":"preview_1","label":"preview_1"},{"value":"previous","label":"previous"},{"value":"price_tag","label":"price_tag"},{"value":"print_fax","label":"print_fax"},{"value":"project_management","label":"project_management"},{"value":"project_management_1","label":"project_management_1"},{"value":"promotion","label":"promotion"},{"value":"purse","label":"purse"},{"value":"quality","label":"quality"},{"value":"radar","label":"radar"},{"value":"radioactive","label":"radioactive"},{"value":"rainy","label":"rainy"},{"value":"rating","label":"rating"},{"value":"receipt","label":"receipt"},{"value":"recluitment","label":"recluitment"},{"value":"recognition","label":"recognition"},{"value":"record","label":"record"},{"value":"recycle","label":"recycle"},{"value":"red_eye","label":"red_eye"},{"value":"reload","label":"reload"},{"value":"reload_1","label":"reload_1"},{"value":"repair","label":"repair"},{"value":"report","label":"report"},{"value":"research","label":"research"},{"value":"responsive","label":"responsive"},{"value":"restaurant","label":"restaurant"},{"value":"resume","label":"resume"},{"value":"reunion","label":"reunion"},{"value":"right_arrow","label":"right_arrow"},{"value":"risk","label":"risk"},{"value":"rotate","label":"rotate"},{"value":"route","label":"route"},{"value":"runner_man","label":"runner_man"},{"value":"sabe","label":"sabe"},{"value":"sabe_error","label":"sabe_error"},{"value":"safety_box_open","label":"safety_box_open"},{"value":"satellite","label":"satellite"},{"value":"school","label":"school"},{"value":"scissors","label":"scissors"},{"value":"screw","label":"screw"},{"value":"search","label":"search"},{"value":"send","label":"send"},{"value":"send_file","label":"send_file"},{"value":"send_file_1","label":"send_file_1"},{"value":"send_money","label":"send_money"},{"value":"send_package","label":"send_package"},{"value":"server","label":"server"},{"value":"settings","label":"settings"},{"value":"settings_1","label":"settings_1"},{"value":"share","label":"share"},{"value":"shield","label":"shield"},{"value":"ship","label":"ship"},{"value":"shipped","label":"shipped"},{"value":"shop","label":"shop"},{"value":"shopping","label":"shopping"},{"value":"shopping_bag","label":"shopping_bag"},{"value":"shopping_car","label":"shopping_car"},{"value":"shuffle","label":"shuffle"},{"value":"sign","label":"sign"},{"value":"sketch","label":"sketch"},{"value":"sketch_1","label":"sketch_1"},{"value":"skip","label":"skip"},{"value":"smartphone","label":"smartphone"},{"value":"snapchat","label":"snapchat"},{"value":"sniffer","label":"sniffer"},{"value":"social_media","label":"social_media"},{"value":"spam","label":"spam"},{"value":"speech_bubble","label":"speech_bubble"},{"value":"spray","label":"spray"},{"value":"star","label":"star"},{"value":"start_up","label":"start_up"},{"value":"stats_line_chart","label":"stats_line_chart"},{"value":"stethoscope","label":"stethoscope"},{"value":"stop","label":"stop"},{"value":"stop_watch","label":"stop_watch"},{"value":"storage","label":"storage"},{"value":"street","label":"street"},{"value":"student","label":"student"},{"value":"study","label":"study"},{"value":"sun_glasses","label":"sun_glasses"},{"value":"suppport","label":"suppport"},{"value":"switch","label":"switch"},{"value":"tablet","label":"tablet"},{"value":"tabs","label":"tabs"},{"value":"tap_gesture","label":"tap_gesture"},{"value":"target","label":"target"},{"value":"telephone_call","label":"telephone_call"},{"value":"television","label":"television"},{"value":"terminal","label":"terminal"},{"value":"terminal_2","label":"terminal_2"},{"value":"think","label":"think"},{"value":"toast","label":"toast"},{"value":"toast_1","label":"toast_1"},{"value":"tools","label":"tools"},{"value":"traffic_light","label":"traffic_light"},{"value":"transfer_data","label":"transfer_data"},{"value":"trash","label":"trash"},{"value":"treasure_chest","label":"treasure_chest"},{"value":"trojan","label":"trojan"},{"value":"twitter","label":"twitter"},{"value":"two_players","label":"two_players"},{"value":"university","label":"university"},{"value":"unlock","label":"unlock"},{"value":"up_arrow","label":"up_arrow"},{"value":"upload","label":"upload"},{"value":"vector","label":"vector"},{"value":"view","label":"view"},{"value":"vintage_phone","label":"vintage_phone"},{"value":"visa","label":"visa"},{"value":"volume_control","label":"volume_control"},{"value":"wallet","label":"wallet"},{"value":"wallet_1","label":"wallet_1"},{"value":"warning","label":"warning"},{"value":"warning_briefcase","label":"warning_briefcase"},{"value":"warning_chemistry","label":"warning_chemistry"},{"value":"warning_database","label":"warning_database"},{"value":"warning_dowload","label":"warning_dowload"},{"value":"warning_folder","label":"warning_folder"},{"value":"warning_location","label":"warning_location"},{"value":"warning_mail","label":"warning_mail"},{"value":"warning_package","label":"warning_package"},{"value":"warning_search","label":"warning_search"},{"value":"warning_shipped","label":"warning_shipped"},{"value":"warning_terminal","label":"warning_terminal"},{"value":"warning_trash","label":"warning_trash"},{"value":"web_design","label":"web_design"},{"value":"web_domain_registration","label":"web_domain_registration"},{"value":"web_search","label":"web_search"},{"value":"web_search_1","label":"web_search_1"},{"value":"website","label":"website"},{"value":"weight","label":"weight"},{"value":"whatsapp","label":"whatsapp"},{"value":"wheelchair","label":"wheelchair"},{"value":"wifi","label":"wifi"},{"value":"windows","label":"windows"},{"value":"wine_cup","label":"wine_cup"},{"value":"wordpress","label":"wordpress"},{"value":"worldwide","label":"worldwide"},{"value":"youtube","label":"youtube"},{"value":"zcash","label":"zcash"},{"value":"zipped_folder","label":"zipped_folder"},{"value":"zoom_in","label":"zoom_in"},{"value":"zoom_out","label":"zoom_out"},{"value":"loading","label":"loading"}],}
			            },
			            /** Image. The absolute url to any image you want shown in the header. */
			            'image': {
			                label: 'Image',
			                type: 'text',
			                hint: 'The absolute url to any image you want shown in the header.',
			                options: undefined
			            },
			            /** Image size. How should the header image be rendered */
			            'imageSize': {
			                label: 'Image size',
			                type: 'select',
			                hint: 'How should the header image be rendered',
			                defaultValue: "cover",
			                options: {choices: [{"value":"cover","label":"Cover"},{"value":"contain","label":"Contain"}],}
			            },
			            /** Close handler. Meant for use inside React components directly. */
			            'closeHandler': {
			                label: 'Close handler',
			                type: 'raw',
			                isPrivate: true,
			                hint: 'Meant for use inside React components directly.',
			                options: {valueType: `() => Promise<void> | void`,}
			            },
			    }
		}

		type CardHeaderEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.CardHeaderSchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface Dropdown {
			
				/** Position. */
				'position'?: ("bottom" | "top" | "right")| undefined | null
				
				'items'?: SpruceSchemas.Heartwood.v2021_02_11.Button[]| undefined | null
				
				'card'?: SpruceSchemas.Heartwood.v2021_02_11.Card| undefined | null
		}

		interface DropdownSchema extends SpruceSchema.Schema {
			id: 'dropdown',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: 'Dropdown',
			    fields: {
			            /** Position. */
			            'position': {
			                label: 'Position',
			                type: 'select',
			                options: {choices: [{"label":"Bottom","value":"bottom"},{"label":"Top","value":"top"},{"label":"Right","value":"right"}],}
			            },
			            /** . */
			            'items': {
			                type: 'schema',
			                isArray: true,
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.ButtonSchema,}
			            },
			            /** . */
			            'card': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.CardSchema,}
			            },
			    }
		}

		type DropdownEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.DropdownSchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface Button {
			
				/** Label. */
				'label'?: string| undefined | null
				
				'controller'?: (HeartwoodTypes.ButtonController)| undefined | null
				/** Selected. */
				'isSelected'?: boolean| undefined | null
				/** Selected. */
				'isEnabled'?: boolean| undefined | null
				/** Add to fade-in queue.. Fade in effect could change. */
				'shouldQueueShow'?: boolean| undefined | null
				/** Show hint icon. */
				'shouldShowHintIcon'?: boolean| undefined | null
				/** Click handler for hint icon. */
				'onClickHintIcon'?: (() => Promise<void> | void)| undefined | null
				/** Type. */
				'type'?: ("primary" | "secondary")| undefined | null
				/** Image. */
				'image'?: string| undefined | null
				/** Dropdown. */
				'dropdown'?: SpruceSchemas.Heartwood.v2021_02_11.Dropdown| undefined | null
				/** Click handler. */
				'onClick'?: (() => Promise<void> | void)| undefined | null
		}

		interface ButtonSchema extends SpruceSchema.Schema {
			id: 'button',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: 'Button',
			    fields: {
			            /** Label. */
			            'label': {
			                label: 'Label',
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'controller': {
			                type: 'raw',
			                options: {valueType: `HeartwoodTypes.ButtonController`,}
			            },
			            /** Selected. */
			            'isSelected': {
			                label: 'Selected',
			                type: 'boolean',
			                options: undefined
			            },
			            /** Selected. */
			            'isEnabled': {
			                label: 'Selected',
			                type: 'boolean',
			                defaultValue: true,
			                options: undefined
			            },
			            /** Add to fade-in queue.. Fade in effect could change. */
			            'shouldQueueShow': {
			                label: 'Add to fade-in queue.',
			                type: 'boolean',
			                hint: 'Fade in effect could change.',
			                options: undefined
			            },
			            /** Show hint icon. */
			            'shouldShowHintIcon': {
			                label: 'Show hint icon',
			                type: 'boolean',
			                options: undefined
			            },
			            /** Click handler for hint icon. */
			            'onClickHintIcon': {
			                label: 'Click handler for hint icon',
			                type: 'raw',
			                options: {valueType: `() => Promise<void> | void`,}
			            },
			            /** Type. */
			            'type': {
			                label: 'Type',
			                type: 'select',
			                defaultValue: "secondary",
			                options: {choices: [{"value":"primary","label":"Primary"},{"value":"secondary","label":"Secondary"}],}
			            },
			            /** Image. */
			            'image': {
			                label: 'Image',
			                type: 'text',
			                options: undefined
			            },
			            /** Dropdown. */
			            'dropdown': {
			                label: 'Dropdown',
			                type: 'schema',
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.DropdownSchema,}
			            },
			            /** Click handler. */
			            'onClick': {
			                label: 'Click handler',
			                type: 'raw',
			                options: {valueType: `() => Promise<void> | void`,}
			            },
			    }
		}

		type ButtonEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.ButtonSchema>

	}

}
