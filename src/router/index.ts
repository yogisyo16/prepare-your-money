import { createRouter, createWebHistory } from "vue-router";
import DashboardView from '../views/DashboardView.vue';
import TransactionsView from '../views/TransactionsView.vue';

const routes = [
    {
        path: '/',
        redirect: '/dashboard' // Redirect the homepage to the dashboard
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardView
    },
    {
        path: '/transactions',
        name: 'Transactions',
        component: TransactionsView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router