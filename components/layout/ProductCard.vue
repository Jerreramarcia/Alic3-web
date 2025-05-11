<template>
  <div class="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
    <img
        :src="thumbnail"
        :style="{ width: size + 'px', height: size + 'px' }"
        class="object-cover mb-4 transition-all duration-300"
        alt="Avatar"
    />

    <h2 class="text-lg font-semibold text-gray-800">{{ displayName }}</h2>
    <p class="text-sm text-gray-500 mb-2">{{ info }}</p>
    <span class="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
      {{ quantity }} unidades
    </span>

    <div class="flex gap-4 border-t w-full pt-4 justify-center text-sm text-gray-600">
      <span class="flex items-center gap-1">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 12H8m8 0a4 4 0 10-8 0 4 4 0 008 0z" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        ID: {{ userId }}
      </span>
      <span class="flex items-center gap-1">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M3 5a2 2 0 012-2h2l1.29 1.29a1 1 0 001.41 0L10 3h4l1.29 1.29a1 1 0 001.41 0L19 3h2a2 2 0 012 2v14a2 2 0 01-2 2h-2l-1.29-1.29a1 1 0 00-1.41 0L14 21h-4l-1.29-1.29a1 1 0 00-1.41 0L5 21H3a2 2 0 01-2-2V5z"
              stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        {{ new Date(createdAt).toLocaleDateString() }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  id: { type: Number, required: true },
  userId: { type: Number, required: true },
  displayName: { type: String, required: true },
  thumbnail: { type: String, required: true },
  info: { type: String, required: true },
  createdAt: { type: String, required: true },
  quantity: { type: Number, required: true },
  size: { type: Number, default: 100 }
})
</script>
