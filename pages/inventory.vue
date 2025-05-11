<template>

  <div class="mb-6">
    <label class="block text-white mb-2">Tamaño de avatar: {{ imageSize }}px</label>
    <input type="range" min="100" max="400" v-model="imageSize" class="w-full max-w-md"/>
  </div>


  <div class="p-6 grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <ProductCard
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :user-id="product.userId"
        :display-name="product.display_name"
        :thumbnail="product.thumbnail"
        :info="product.info"
        :created-at="product.createdAt"
        :quantity="product.quantity"
        :size="imageSize"
    />

  </div>


</template>
<script setup lang="ts">
import ProductCard from "~/components/layout/ProductCard.vue"
import type {UserProductDTO} from "~/types"

const imageSize = ref(100)
const token = useCookie('token').value
const products = ref<UserProductDTO[]>([])
const {user, fetchUser} = useAuthUser()
// Cargar productos cuando el componente esté montado
onMounted(async () => {
  try {
    const response = await $fetch<UserProductDTO[]>(`http://localhost:8080/api/user/product/${user.value.id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    products.value = response
    response.forEach(p => console.log(p.display_name, p.createdAt))
  } catch (error) {
    console.error('Error al cargar productos:', error)
  }
})
</script>
