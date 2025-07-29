import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
	const theme = ref<'light' | 'dark'>('dark')

	function toggleTheme() {
		theme.value = theme.value === 'dark' ? 'light' : 'dark'
		document.documentElement.classList.toggle('dark', theme.value === 'dark')
		localStorage.setItem('theme', theme.value)
	}

	function initTheme() {
		const saved = localStorage.getItem('theme')
		if (saved === 'light' || saved === 'dark') {
			theme.value = saved
		}
		document.documentElement.classList.toggle('dark', theme.value === 'dark')
	}

	return {
		theme,
		toggleTheme,
		initTheme,
	}
})


// // On page load or when changing themes, best to add inline in `head` to avoid FOUC
// document.documentElement.classList.toggle(
//   "dark",
//   localStorage.theme === "dark" ||
//     (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
// );
// // Whenever the user explicitly chooses light mode
// localStorage.theme = "light";
// // Whenever the user explicitly chooses dark mode
// localStorage.theme = "dark";
// // Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem("theme");