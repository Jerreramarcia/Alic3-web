<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthUser } from '~/composables/useAuthUser'

const router = useRouter()
const { user } = useAuthUser()

const logout = () => {
  useCookie('token').value = null
  user.value = null
  router.push('/auth')
}
</script>
<template>
  <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <!-- Izquierda: Logo + enlaces -->
        <div class="flex items-center space-x-4">
          <NuxtLink to="/" class="flex items-center">
            <img
                class="h-8 w-auto"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                alt="Logo"
            />
          </NuxtLink>
          <NuxtLink
              to="/"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              active-class="bg-gray-900 text-white"
          >
            Home
          </NuxtLink>
          <NuxtLink
              to="/inventory"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              active-class="bg-gray-900 text-white"
          >
            Inventory
          </NuxtLink>
        </div>
        <!-- Derecha: Avatar + Dropdown -->
        <div v-if="user" class="relative">
          <details class="group">
            <summary class="cursor-pointer flex items-center space-x-2">
              <img
                  class="h-8 w-8 rounded-full object-cover"
                  :src="user.image || `https://api.dicebear.com/7.x/identicon/svg?seed=${user.username}`"
                  alt="Avatar"
              />
              <span class="text-sm text-white font-medium hidden sm:inline">{{ user.username }}</span>
            </summary>
            <div
                class="absolute right-0 z-20 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5"
            >
              <NuxtLink
                  to="/profile"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Perfil
              </NuxtLink>
              <NuxtLink
                  to="/settings"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Ajustes
              </NuxtLink>
              <button
                  @click="logout"
                  class="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Cerrar sesión
              </button>
            </div>
          </details>
        </div>
      </div>
    </div>
  </nav>
</template>
