// ~/composables/useAuthUser.ts
import type { AuthenticatedUser } from '~/types'

export const useAuthUser = () => {
    const user = useState<AuthenticatedUser | null>('auth-user', () => null)

    const fetchUser = async () => {
        const token = useCookie('token').value
        if (!token) return

        try {
            const { data, error } = await useFetch<AuthenticatedUser>('http://localhost:8080/api/auth/me', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            if (error.value) {
                console.error('Failed to fetch user:', error.value)
                user.value = null
                return
            }

            user.value = data.value ?? null
        } catch (e) {
            console.error('Unexpected error:', e)
            user.value = null
        }
    }

    return { user, fetchUser }
}
