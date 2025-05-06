<template>
  <div class="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

    <div class="mb-6">
      <label class="block text-white mb-2">Tamaño de avatar: {{ imageSize }}px</label>
      <input type="range" min="100" max="400" v-model="imageSize" class="w-full max-w-md"/>
    </div>


      <ProductCard
          v-for="user in users"
          :key="user.name"
          :avatar="user.avatar"
          :name="user.name"
          :position="user.position"
          :role="user.role"
          :size="imageSize"
      />

  </div>

  <TestMe></TestMe>
</template>

<script setup>

import ProductCard from "~/components/layout/ProductCard.vue";

const imageSize = ref(100)

const users = [
  {
    name: 'Jane Cooper',
    position: 'Paradigm Representative',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    role: 'Admin'
  },
  {
    name: 'Cody Fisher',
    position: 'Lead Security Associate',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    role: 'Admin'
  },
]
</script>
