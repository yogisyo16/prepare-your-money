<script setup lang="ts">
    defineProps({
        labelName: String,
        valueText: String
    })
</script>

<template>
    <label for="text" class="block text-sm font-medium text-gray-700">{{ labelName }}</label>
    <input type="text" :value="valueText" class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
</template>