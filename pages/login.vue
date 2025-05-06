<template>
  <div class="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
    <h1 class="text-2xl font-bold mb-4">Iniciar sesión</h1>
    <form @submit.prevent="login">
      <input v-model="email" type="text" placeholder="Email" class="mb-2 w-full p-2 border rounded" required />
      <input v-model="password" type="password" placeholder="Contraseña" class="mb-4 w-full p-2 border rounded" required />
      <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Entrar</button>
    </form>
    <p v-if="error" class="mt-4 text-red-500">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const login = async () => {
  error.value = ''
  try {
    const { data, error: fetchError } = await useFetch('/api/auth/login', {
      method: 'POST',
      body: { username: email.value, password: password.value },
      baseURL: 'https://localhost:8080',
    })

    if (fetchError.value) {
      error.value = 'Email o contraseña incorrectos'
      return
    }

    // Guardar token en cookie
    const token = data.value?.token
    if (token) {
      useCookie('token').value = token
      router.push('/') // Redirigir al home o dashboard
    }
  } catch (err) {
    error.value = 'Hubo un error al iniciar sesión.'
  }
}
definePageMeta({
  layout: false
})
</script>
