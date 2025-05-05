<template>
  <div class="flex flex-col min-h-screen bg-gray-900 text-white">
    <NavbarLayout />
    <div class="flex-1 p-6 overflow-auto">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
import NavbarLayout from "~/layouts/navbar/NavbarLayout.vue";
</script>
