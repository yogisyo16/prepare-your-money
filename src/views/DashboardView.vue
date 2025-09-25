<script setup lang="ts">
import DashboardMoney from '@/components/Dashboard/DashboardMoney.vue';
import { userData } from '@/services/userData';

const profileUser = userData.getUserProfile();
</script>

<template>
  <DashboardMoney 
    :card-name="profileUser.name"
    :card-number="22222222222222222"
  />
</template>