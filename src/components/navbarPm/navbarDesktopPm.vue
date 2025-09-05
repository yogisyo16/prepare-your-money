<script setup lang="ts">
defineProps({
    name: String,
    email: String,
    image: String,
    role: String
})
</script>

<template>
    <div class="flex items-center">
        <img class="w-10 h-10 rounded-full mr-4" :src="image" alt="Avatar of user" />
        <div class="text-sm">
            <p class="text-gray-900 whitespace-no-wrap">
                {{ name }}
            </p>
            <p class="text-gray-600 whitespace-no-wrap">
                {{ email }}
            </p>
            <p class="text-gray-600 whitespace-no-wrap">
                {{ role }}
            </p>
        </div>
    </div>
</template>