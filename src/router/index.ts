import { createRouter, createWebHistory } from "vue-router";
import DashboardView from '../views/DashboardView.vue';
import TransactionsView from '../views/TransactionsView.vue';
import ReportView from "@/views/ReportView.vue";
import SalaryView from "@/views/SalaryView.vue";

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
    },
    {
        path: '/report',
        name: 'Report',
        component: ReportView
    },
    {
        path: '/salary',
        name: 'Salary',
        component: SalaryView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router