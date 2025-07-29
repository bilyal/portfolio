import { HomeIcon, BriefcaseIcon, FolderIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'
import type { Job } from '@/types/common'
import { i18nKeys } from './i18n-keys'

const { jobs, techStack } = i18nKeys;

export const CONTACT_EMAIL = "bilyal.abdulganiev@gmail.com"
export const CONTACT_GITHUB = "https://github.com/bilyal"
export const CONTACT_LINKEDIN = "https://www.linkedin.com/in/bilyal-abdulganiev/"

export const TECH_STACK = [
	{
		label: techStack.languages,
		values: [
			"JavaScript",
			"TypeScript",
			"HTML",
			"CSS",
			"JSON",
		]
	},
	{
		label: techStack.frontend,
		values: [
			"React.js",
			"Vue.js",
			"Redux",
			"React Router",
			"React Hook Form",
			"Formik",
			"Next.js",
			"Tailwind CSS",
			"Canvas API",
			"Media API"
		]
	},
	{
		label: techStack.state,
		values: [
			"Redux Toolkit",
			"Context API",
			"Pinia",
		]
	},
	{
		label: techStack.backend,
		values: [
			"Node.js",
			"Express",
			"PostgreSQL",
			"Redis",
			"REST API",
			"OpenAPI",
			"WebSocket",
			"Axios",
		]
	},
	{
		label: techStack.testing,
		values: [
			"Jest",
			"React testing library",
			"Cypress"
		]
	},
	{
		label: techStack.infrastructure,
		values: [
			"Git",
			"Docker",
			"Webpack",
			"Vite",
			"CI/CD",
		]
	},
	{
		label: techStack.other,
		values: [
			"C++",
			"C#",
			"Java",
			"Golang",
		]
	},
]

export const JOBS: Job[] = [
	{
		company: 'Thrive.io',
		period: jobs.thr.period,
		description: jobs.thr.description,
		contribution: jobs.thr.contribution,
		tasks: jobs.thr.tasks,
		technologies: ['React.js', 'Vue.js', 'Javascript', 'TypeScript', 'Golang', 'PostgreSQL', 'RESTful APIs', 'Docker', 'Git', 'GitLab']
	},
	{
		company: 'One Auction View®',
		period: jobs.oav.period,
		description: jobs.oav.description,
		contribution: jobs.oav.contribution,
		tasks: jobs.oav.tasks,
		technologies: ['JavaScript', 'TypeScript', 'Git']
	},
	{
		company: 'Fluency Academy',
		period: jobs.flu.period,
		description: jobs.flu.description,
		contribution: jobs.flu.contribution,
		tasks: jobs.flu.tasks,
		technologies: ['React.js', 'TypeScript', 'Chart.js', 'Git', 'i18n']
	},
	{
		company: 'Finch Genetics',
		period: jobs.fgen.period,
		description: jobs.fgen.description,
		contribution: jobs.fgen.contribution,
		tasks: jobs.fgen.tasks,
		technologies: ['React.js', 'TypeScript', 'Redux-Saga', 'Socket.IO', 'Redis', 'WYSIWIG', 'AntV G6']
	},
	{
		company: 'Right&Above',
		period: jobs.raa.period,
		description: jobs.raa.description,
		contribution: jobs.raa.contribution,
		tasks: jobs.raa.tasks,
		technologies: ['C#', 'PostgreSQL', 'ASP .NET Core', 'Jenkins']
	},
]

export const LANGUAGES = [
	{ code: 'en', label: 'English', flag: '🇬🇧' },
	{ code: 'de', label: 'Deutsch', flag: '🇩🇪' },
	{ code: 'ru', label: 'Русский', flag: '🇷🇺' },
	// { code: 'fr', label: 'Français', flag: '🇫🇷' },
	// { code: 'es', label: 'Español', flag: '🇪🇸' },
]

export const NAV_BTNS = [
	{ name: i18nKeys.nav.home, to: '/', icon: HomeIcon },
	{ name: i18nKeys.nav.workExperience, to: '/jobs', icon: BriefcaseIcon },
	{ name: i18nKeys.nav.myProjects, to: '/projects', icon: FolderIcon },
	{ name: i18nKeys.nav.contactMe, to: '/contact', icon: EnvelopeIcon },
]
