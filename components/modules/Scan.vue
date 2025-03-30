<template>
  <div
      :class="[
      'bg-blue-200 rounded-2xl text-center shadow-lg transition-all overflow-hidden duration-300',
      isScanning ? 'p-4 h-auto' : 'h-16 flex items-center justify-center'
    ]"
  >
    <!-- Botón escanear -->
    <button
        @click="startScanner"
        class="flex items-center justify-center gap-2 text-blue-800 font-semibold hover:text-blue-900 transition"
    >
      <UIcon name="material-symbols:barcode-scanner" class="text-2xl"/>
      <span>Escanear</span>
    </button>

    <!-- Cámara + overlay -->
    <!-- Contenedor del video -->
    <div
        v-show="isScanning"
        class="relative mt-4 mx-auto rounded-xl overflow-hidden aspect-[3/4] w-full sm:max-w-md"
    >
      <video
          ref="video"
          autoplay
          playsinline
          muted
          class="absolute inset-0 w-full h-full object-contain bg-black"
      />

      <!-- Overlay de escaneo -->
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div class="border-4 border-green-500 w-4/5 h-24 rounded-xl animate-pulse shadow-lg"></div>
      </div>
    </div>

    <!-- Resultado -->
    <p
        v-if="result && isScanning"
        class="mt-4 px-4 py-2 inline-block rounded-lg bg-green-100 text-green-800 font-medium text-sm"
    >

      Código detectado: <span class="font-bold">{{ result }}</span>
    </p>

    <!-- Botón parar -->
    <button
        v-if="isScanning"
        @click="stopScanner"
        class="mt-4 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-800 font-semibold text-sm rounded-lg transition"
    >
      Parar escaneo
    </button>
  </div>
  <input
      type="text"
      v-model="result"
      class="mt-4 px-3 py-2 rounded border border-gray-300 w-full"
  />

</template>

<script setup>
import {onBeforeUnmount, ref} from 'vue'
import {BrowserMultiFormatReader} from '@zxing/browser'

const video = ref(null)
const result = ref(null)
const isScanning = ref(false)
const fetchData = ref(null)

const codeReader = new BrowserMultiFormatReader()
let controls = null

const startScanner = async () => {
  if (isScanning.value) return

  try {
    controls = await codeReader.decodeFromVideoDevice(
        null,
        video.value,
        (res, err) => {
          if (res) {
            result.value = res.getText()
            console.log('✅ Código detectado:', result.value)
          }
        }
    )

    isScanning.value = true
    console.log('📷 Escaneo iniciado')
  } catch (e) {
    console.error('No se pudo acceder a la cámara o escanear:', e)
    alert('No se pudo acceder a la cámara.')
  }
}

const stopScanner = () => {
  if (controls) {
    controls.stop()
    controls = null
    isScanning.value = false
    console.log('⛔ Escaneo detenido')
  }
}

onBeforeUnmount(() => {
  stopScanner()
})


watch(result, async (newValue, oldValue) => {
  if (!newValue) return

  console.log('🔎 Código actualizado:', newValue)

  try {
    let {data, error} = await useFetch(`http://localhost:8080/api/products/${newValue}`)

    if (error.value) {
      console.error('❌ Error al buscar el producto:', error.value)
    } else {
      console.log('✅ Producto:', data.value)
      fetchData.value = data.value;
      // acá podés guardar el resultado en otro `ref` o emitir evento
    }
  } catch (err) {
    console.error('Error inesperado:', err)
  }
})

import { useScanStore } from '~/stores/scanStores.js'
const scanStore = useScanStore()

// en tu watcher o directamente:
watch(fetchData, (newVal) => {
  if (newVal) {
    console.log("data new value")
    scanStore.setResult(newVal)
  }
})

</script>
