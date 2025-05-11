<template>

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
        <Graph/>
      </div>
      <NumberBox :number="48"/>
      <NumberBox :number="12"/>
      <Popup/>

    </div>

</template>

<script setup>
import Scan from '~/components/modules/Scan.vue'
import Alert from '~/components/modules/Alert.vue'
import Graph from '~/components/modules/Graph.vue'
import NumberBox from '~/components/modules/NumberBox.vue'

import {useScanStore} from '~/stores/scanStores.js'
import {computed} from 'vue'
import Popup from "~/components/modules/Popup.vue";

const scanStore = useScanStore()
const result = computed(() => scanStore.result)

</script>
