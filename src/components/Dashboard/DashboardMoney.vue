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
    <section>
        <div class="flex items-center">
            <div class="flex items-center">
                <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/src/assets/char-face.jpg" alt="">
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>