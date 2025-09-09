<script setup lang="ts">
import PrepareMoney from './components/PrepareMoney.vue';
import { userData } from '@/services/userData'

const profileUser = userData.getUserProfile();
</script>

<template>
    <PrepareMoney 
        :namePrepare="profileUser.name" 
        :emailPrepare="profileUser.email" 
        :rolePrepare="profileUser.role" 
        
        dashboard="#"
        transactions="#"
        reports="#"
        salary="#"
    />
</template>

<style scoped>
/* Remove unused styles */
</style>
