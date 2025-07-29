import './tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { registerSW } from 'virtual:pwa-register'

import App from './App.vue'
import router from './router'
import i18n from './i18n'
import { i18nKeys } from './i18n-keys'


function callAllKeys(obj: any) {
	for (const key in obj) {
		const value = obj[key]
		if (typeof value === 'string') {
			i18n.global.t(value)
		} else if (typeof value === 'object' && value !== null) {
			callAllKeys(value)
		}
	}
}


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

callAllKeys(i18nKeys)

app.mount('#app')

registerSW({
	onNeedRefresh() {
		console.log('Есть новая версия приложения')
	},
	onOfflineReady() {
		console.log('Приложение готово к оффлайн-работе')
	}
})
