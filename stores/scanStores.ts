import { defineStore } from 'pinia'

export const useScanStore = defineStore('scan', {
    state: () => ({
        result: null as string | null
    }),
    actions: {
        setResult(value: string) {
            this.result = value
        }
    }
})
