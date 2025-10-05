<script setup lang="ts">
    defineProps({
        name: { type: String, required: false },
        email: { type: String, required: false },
        role: { type: String, required: false },
        image: { type: String, required: false },
        dashboard: { type: String, required: false },
        transactions: { type: String, required: false },
        reports: { type: String, required: false },
        salary: { type: String, required: false },
        
        // Card
        cardName: { type: String, required: false },
        cardNumber: { type: Number, required: false },
        cardMonth: { type: String, required: false },
        cardYear: { type: String, required: false },
        cardCVV: { type: String, required: false },

        // Dashboard information
        totalSpending: { type: Number, required: false },
        totalIncome: { type: Number, required: false },
        totalBalance: { type: Number, required: false },

        // Button Interaction
        buttonAddIncome: { type: String, required: false },
        buttonAddDetailsSpending: { type: String, required: false },
    })
</script>

<template>
    <div class="flex flex-col items-center md:items-start gap-2 md:gap-10">
        <div class="flex flex-col md:flex-row gap-1 md:gap-4">
            <div class="flex flex-col items-start gap-4">
                <h1 class="text-2xl font-bold">Dashboard</h1>
                <div class="flex flex-row gap-2">
                    <div class="flex flex-col items-start border-2 rounded-2xl p-4">
                        <h1 class="text-2xl font-bold">Card</h1>
                        <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/src/assets/char-face.jpg" alt="">
                            <div class="flex flex-col justify-between p-4 leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ cardName }}</h5>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ cardNumber }}</p>
                            </div>
                        </a>
                    </div>
                    <div class="flex flex-col items-start border-2 rounded-2xl p-4">
                        <h1 class="text-2xl font-bold">Income</h1>
                        <p>Rp. {{ totalIncome }}</p>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onclick="{{ buttonAddIncome }}">Add</button>
                    </div>
                    <div class="flex flex-col items-start border-2 rounded-2xl p-4">
                        <h1 class="text-2xl font-bold">Expenses</h1>
                        <p>Rp. {{ totalSpending }}</p>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onclick="{{ buttonAddDetailsSpending }}">Add Details</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>