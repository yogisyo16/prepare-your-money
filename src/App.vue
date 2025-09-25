<script setup lang="ts">
import PrepareMoney from './components/PrepareMoney.vue';
import { userData } from '@/services/userData'

const profileUser = userData.getUserProfile();
console.log("Image URL:", profileUser.image);
</script>

<template>
    <PrepareMoney 
        :namePrepare="profileUser.name" 
        :emailPrepare="profileUser.email" 
        :rolePrepare="profileUser.role" 
        :imagePrepare="profileUser.image"
        
        dashboard="/dashboard"
        transactions="/transactions"
        reports="/report"
        salary="/salary"
    >
        <router-view/>
    </PrepareMoney>
</template>
