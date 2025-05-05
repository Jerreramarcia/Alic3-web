<template>
  <div class="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <UserCard
        v-for="user in users"
        :key="user.name"
        :avatar="user.avatar"
        :name="user.name"
        :position="user.position"
        :role="user.role"
    />
  </div>
</template>

<script setup>

import UserCard from "~/components/layout/ProductCard.vue";


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
