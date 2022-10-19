import { createWebHistory, createRouter } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Education from '../components/Education.vue';
import Skills from '../components/Skills.vue';
import Projects from '../components/Projects.vue';
import Contact from '../components/Contact.vue';

const routes = [
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/education',
        name: 'education',
        component: Education
    },
    {
        path: '/skills',
        name: 'skills',
        component: Skills
    },
    {
        path: '/projects',
        name: 'projects',
        component: Projects
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/',
        redirect: '/home'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;