import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Jobs from '@/pages/Jobs.vue'
import Projects from '@/pages/Projects.vue'
import Contact from '@/pages/Contact.vue'

const routes = [
	{ path: '/', name: 'Home', component: Home },
	{ path: '/jobs', name: 'Jobs', component: Jobs },
	{ path: '/projects', name: 'Projects', component: Projects },
	{ path: '/contact', name: 'Contact', component: Contact },
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
})

export default router
