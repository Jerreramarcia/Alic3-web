import { defineStore } from 'pinia'
import { ProductResponse } from '~/models/ProductResponse'

export const useScanStore = defineStore('scan', {
    state: () => ({
        result: null as string | null,
        scannedProduct: null as ProductResponse | null
    }),

    actions: {
        setResult(value: string) {
            this.result = value
        },

        setProduct(rawProductData: any) {
            this.scannedProduct = new ProductResponse(rawProductData)
        },

        clearProduct() {
            this.scannedProduct = null
        }
    }
})
