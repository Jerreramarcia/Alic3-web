<template>
  <div class="bg-gray-100 rounded-xl p-4 text-center shadow text-xl font-semibold">
    {{ number }}
  </div>
</template>

<script setup>
defineProps({
  number: Number
})
</script>
