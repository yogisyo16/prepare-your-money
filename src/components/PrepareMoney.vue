<script setup lang="ts">
import navbarDesktopPm from './navbarPm/navbarDesktopPm.vue'

defineProps({
    namePrepare: { type: String, required: true },
    emailPrepare: { type: String, required: true },
    rolePrepare: { type: String, required: true },
    imagePrepare: { 
        type: String, 
        required: false 
    },
    dashboard: { type: String, required: false },
    transactions: { type: String, required: false },
    reports: { type: String, required: false },
    salary: { type: String, required: false },
})
</script>

<template>
    <header>
        <navbarDesktopPm 
            :name="namePrepare"
            :email="emailPrepare"
            :role="rolePrepare"
            :image="imagePrepare"
            :dashboard="dashboard"
            :transactions="transactions"
            :reports="reports"
            :salary="salary"
        />
    </header>
</template>

<style scoped>
/* Remove unused styles */
</style>