// models/Product.ts
export class ProductResponse {
    id: number;
    ean: string;
    displayName: string;
    thumbnail: string;
    unitPrice: number;

    constructor(data: {
        id: number;
        ean: string;
        display_name: string;
        thumbnail: string;
        unitPrice: number;
    }) {
        this.id = data.id;
        this.ean = data.ean;
        this.displayName = data.display_name;
        this.thumbnail = data.thumbnail;
        this.unitPrice = data.unitPrice;
    }

    // Puedes añadir métodos personalizados
    formattedPrice(): string {
        return `${this.unitPrice.toFixed(2)} €`;
    }
}
