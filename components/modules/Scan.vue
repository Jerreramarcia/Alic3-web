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
    <div
        v-show="isScanning"
        class="relative mx-auto mt-4 rounded-xl overflow-hidden aspect-[16/9] w-full max-w-md border-2 border-blue-300"
    >
      <video
          ref="video"
          autoplay
          playsinline
          muted
          class="absolute inset-0 w-full h-full object-contain bg-black"
      />

      <!-- Zona de escaneo -->
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
            class="border-4 border-green-500 w-3/5 h-24 rounded-xl animate-pulse shadow-lg"
        ></div>
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
</template>

<script setup>
import {ref, onBeforeUnmount} from 'vue'
import {BrowserMultiFormatReader} from '@zxing/browser'

const video = ref(null)
const result = ref(null)
const isScanning = ref(false)

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
</script>
