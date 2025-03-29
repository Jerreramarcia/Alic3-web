<template>
  <div class="p-6 min-h-screen bg-gray-900 text-white">
    <div class="grid gap-4 max-w-xl mx-auto">
      <Scan/>
    </div>
    <br>
    <div class="grid gap-4 max-w-xl mx-auto">
      <Alert/>
    </div>
    <br>
    <div class="grid grid-cols-2 gap-4 max-w-xl mx-auto">

      <div class="col-span-2">
        <Graph />
      </div>
      <NumberBox :number="48"/>
      <NumberBox :number="12"/>
    </div>
  </div>
</template>

<script setup>
import Scan from '~/components/modules/Scan.vue'
import Alert from '~/components/modules/Alert.vue'
import Graph from '~/components/modules/Graph.vue'
import NumberBox from '~/components/modules/NumberBox.vue'
</script>
