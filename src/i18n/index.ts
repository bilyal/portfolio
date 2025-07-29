
import { createI18n } from 'vue-i18n'

function loadLocaleMessages() {
	const locales = import.meta.glob('@/i18n/locales/*.json', { eager: true })
	const messages: Record<string, Record<string, string>> = {}
	for (const path in locales) {
		const matched = path.match(/\/([A-Za-z0-9-_]+)\.json$/i)
		if (matched && matched[1]) {
			const locale = matched[1]
			messages[locale] = (locales[path] as any).default
		}
	}
	return messages
}

export default createI18n({
	legacy: false,
	globalInjection: true,
	locale: localStorage.getItem('lang') || 'en',
	fallbackLocale: 'en',
	messages: loadLocaleMessages(),
})
