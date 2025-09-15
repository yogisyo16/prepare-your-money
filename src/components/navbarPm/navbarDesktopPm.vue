<script setup lang="ts">
import { RouterLink } from 'vue-router';
defineProps({
    name: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, required: true },
    
    // Make 'image' optional using the object syntax
    image: { 
        type: String, 
        required: false 
    },
    dashboard: { type: String, required: false, default: '/' },
    transactions: { type: String, required: false, default: '#' },
    reports: { type: String, required: false, default: '#' },
    salary: { type: String, required: false, default: '#' },
})
</script>

<template>
    <nav class="bg-white shadow-lg">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex justify-between h-16">
                <!-- Logo Section -->
                <div class="flex-shrink-0 flex items-center">
                    <span class="text-xl font-bold text-gray-800">MoneyPrep</span>
                </div>

                <!-- Navigation Links -->
                <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <RouterLink 
                        :to="dashboard"
                        class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        active-class="border-indigo-500 text-gray-900"
                    >
                        Dashboard
                    </RouterLink>
                    <RouterLink 
                        :to="transactions"
                        class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        active-class="border-indigo-500 text-gray-900"
                    >
                        Transactions
                    </RouterLink>
                    <RouterLink 
                        :to="reports"
                        class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        active-class="border-indigo-500 text-gray-900"
                    >
                        Reports
                    </RouterLink>
                    <RouterLink 
                        :to="salary"
                        class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        active-class="border-indigo-500 text-gray-900"
                    >
                        Salary
                    </RouterLink>
                </div>

                <!-- User Profile Section -->
                <div class="flex items-center">
                    <div class="flex items-center">
                        <img class="rounded-full mr-2" :src="image" alt="Avatar of user" />
                        <div class="text-sm">
                            <p class="text-gray-700 font-medium">{{ name }}</p>
                            <p class="text-gray-500 text-xs">{{ role }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>