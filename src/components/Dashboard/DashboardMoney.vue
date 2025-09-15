<script setup lang="ts">
    defineProps({
        name: { type: String, required: true },
        email: { type: String, required: true },
        role: { type: String, required: true },
        
        // Make 'image' optional using the object syntax
        image: { 
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
    <div>
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
</template>