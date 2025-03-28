<template>
  <div class="bg-blue-200 rounded-xl p-4 text-center shadow cursor-pointer">
    <p class="font-bold text-xl mb-2" @click="openCamera">SCAN</p>
    <video
        ref="video"
        autoplay
        playsinline
        muted
        controls
        class="mx-auto mt-2 rounded-lg"
        :class="{ 'hidden': !cameraOn }"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const video = ref(null)
const cameraOn = ref(false)

const openCamera = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: 'environment' // Usa cámara trasera si está disponible
      },
      audio: false
    })
    video.value.srcObject = stream
    cameraOn.value = true
  } catch (err) {
    console.error('No se pudo acceder a la cámara:', err)
    alert('No se pudo acceder a la cámara.')
  }
}
</script>
