<script setup lang="ts">
import DashboardMoney from '@/components/Dashboard/DashboardMoney.vue';
import { userData } from '@/services/userData';

const profileUser = userData.getUserProfile();
</script>

<template>
  <DashboardMoney 
    :name="profileUser.name" 
    :email="profileUser.email" 
    :role="profileUser.role"
  />
</template>