<template>
  <div class="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
    <img :src="avatar" class="w-24 h-24 rounded-full object-cover mb-4"/>
    <h2 class="text-lg font-semibold text-gray-800">{{ name }}</h2>
    <p class="text-sm text-gray-500 mb-2">{{ position }}</p>
    <span class="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
      {{ role }}
    </span>
    <div class="flex gap-4 border-t w-full pt-4 justify-center">
      <button class="flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 12H8m8 0a4 4 0 10-8 0 4 4 0 008 0z" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Email
      </button>
      <button class="flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M3 5a2 2 0 012-2h2l1.29 1.29a1 1 0 001.41 0L10 3h4l1.29 1.29a1 1 0 001.41 0L19 3h2a2 2 0 012 2v14a2 2 0 01-2 2h-2l-1.29-1.29a1 1 0 00-1.41 0L14 21h-4l-1.29-1.29a1 1 0 00-1.41 0L5 21H3a2 2 0 01-2-2V5z"
              stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Call
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  avatar: {type: String, required: true},
  name: {type: String, required: true},
  position: {type: String, required: true},
  role: {type: String, default: 'Admin'}
})
</script>
