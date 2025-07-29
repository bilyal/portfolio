/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				background: 'var(--color-background)',
				border: 'var(--color-border)',
				button: 'var(--color-button-bg)',
				buttonHover: 'var(--color-button-hover)',
				buttonText: 'var(--color-button-text)',
				card: 'rgb(var(--color-card-bg) / <alpha-value>)',
				text: 'var(--color-text-primary)',
			},
			boxShadow: {
				card: '0 2px 8px rgba(0, 0, 0, 0.4)',
				cardHover: '0 4px 12px rgba(0, 0, 0, 0.6)',
			},
			borderRadius: {
				card: '12px',
				button: '6px',
			},
			spacing: {
				sectionGap: '160px',
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			transitionProperty: {
				bg: 'background-color',
				shadow: 'box-shadow',
				color: 'color',
			},
			transitionDuration: {
				DEFAULT: '300ms',
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out',
			},
		},
	},
	plugins: [],
}
