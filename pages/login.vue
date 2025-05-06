<template>
  <div class="min-h-screen flex items-center justify-center bg-[#0a1124]">
    <div class="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
      <!-- Logo -->
      <div class="flex justify-center">
        <img src="/smiley.svg" alt="Logo" class="h-16" />
      </div>

      <!-- Formulario -->
      <form @submit.prevent="login" class="space-y-4">
        <input
            v-model="email"
            type="text"
            placeholder="Email"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-gray-700"
            required
        />
        <input
            v-model="password"
            type="password"
            placeholder="Contraseña"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-gray-700"
            required
        />
        <button
            type="submit"
            class="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Entrar
        </button>
      </form>

      <!-- Error -->
      <p v-if="error" class="text-red-500 text-center">{{ error }}</p>
    </div>
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
      baseURL: 'http://localhost:8080',
    })

    if (fetchError.value) {
      error.value = 'Email o contraseña incorrectos'
      return
    }

    const token = data.value?.token
    if (token) {
      useCookie('token').value = token
      router.push('/')
    }
  } catch (err) {
    error.value = 'Hubo un error al iniciar sesión.'
  }
}

definePageMeta({
  layout: false
})
</script>

<style scoped>
.test-fuente {
  font-family: 'Bio Sans', sans-serif;
}
</style>

