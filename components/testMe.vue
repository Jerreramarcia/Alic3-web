<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow text-center">
    <button
        @click="fetchUser"
        class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
    >
      Obtener datos del usuario
    </button>

    <div v-if="user" class="mt-4">
      <h2 class="text-lg font-bold">Usuario autenticado</h2>
      <pre class="text-left bg-gray-100 p-2 rounded mt-2">{{ user }}</pre>
    </div>

    <p v-if="error" class="mt-4 text-red-500">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
const user = ref(null)
const error = ref('')
const fetchUser = async () => {
  error.value = ''
  user.value = null

  const token = useCookie('token').value

  if (!token) {
    error.value = 'No hay token de autenticación.'
    return
  }

  const { data, error: fetchError } = await useFetch('http://localhost:8080/api/auth/me', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })


  if (fetchError.value) {
    console.log(token as string)
    error.value = 'Error al obtener usuario. ¿Estás autenticado?'
  } else {
    user.value = data.value
  }
}
</script>
