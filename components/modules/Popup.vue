<script setup lang="ts">
import {ref, watch} from 'vue'
import {useScanStore} from '~/stores/scanStores.js'

const count = ref(0)
const scanStore = useScanStore()
const showModal = ref(false)

// Cada vez que cambia el código escaneado, mostramos el modal
watch(() => scanStore.result, (newVal) => {
  if (newVal) {
    showModal.value = true

  }
})
const confirm = () => {
  console.log('✅ Código confirmado:', scanStore.result)
  showModal.value = false
}

const decrement = () => {
  if(count.value>0) {
    count.value--
  }
}

const increment = () => {
  count.value++
}
</script>


<template>
  <div>
    <!-- Modal -->
    <div
        v-if="showModal"
        class="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
    >
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 max-w-md w-full relative">
        <button
            @click="showModal = false"
            class="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        <div class="text-center">
          <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
          </svg>
          <h3 class="mb-2 text-lg font-medium text-gray-800 dark:text-gray-100">
            ¿Código escaneado?
          </h3>
          <p class="mb-4 text-gray-600 dark:text-gray-300">{{ scanStore.scannedProduct.displayName }}</p>

          <!-- Mostramos la imagen del producto-->

          <img
              v-if="scanStore.scannedProduct"
              :src="scanStore.scannedProduct.thumbnail"
              alt="Imagen del producto"
              class="mx-auto mb-4 max-w-[200px] max-h-[200px] rounded shadow object-contain"
          />


          <!--  Start counter -->

          <div class="flex items-center justify-center gap-2">
            <div class="counterManagerDiv">
              <UButton class="counterManagerBtnPlus" icon="i-lucide-plus" size="xl" color="primary" variant="solid" @click="increment"/>
            </div>

            <div><span class="text-2xl">{{ count }}</span></div>

            <div class="counterManagerDiv">
              <UButton class="counterManagerBtnLess" icon="i-lucide-minus" size="xl" color="primary" variant="solid" @click="decrement"/>
            </div>
          </div>
          <!-- End counter-->

          <div class="flex justify-center gap-3 mt-4">
            <button
                @click="confirm"
                class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
            >
              Confirmar
            </button>
            <button
                @click="showModal = false"
                class="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg text-sm"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>
