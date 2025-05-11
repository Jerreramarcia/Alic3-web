// ~/middleware/auth.global.ts
export default defineNuxtRouteMiddleware(async (to, from) => {
    const token = useCookie('token')

    // Si no hay token y no está yendo al login, redirige
    if (!token.value && to.path !== '/login') {
        return navigateTo('/login')
    }

    // Si hay token pero aún no hemos cargado el user
    const { user, fetchUser } = useAuthUser()

    if (!user.value) {
        await fetchUser()
    }
})
