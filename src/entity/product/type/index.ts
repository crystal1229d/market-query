export interface GetAllProductsResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}

export interface Product {
  title: string
  description: string
  category: string
  price: number

  id?: number
  discountPercentage?: number
  rating?: number
  stock?: number
  tags?: string[]
  brand?: string
  sku?: string
  weight?: number
  dimensions?: {
    width: number
    height: number
    depth: number
  }
  warrantyInformation?: string
  shippingInformation?: string
  availabilityStatus?: string
  reviews?: Review[]
  returnPolicy?: string
  minimumOrderQuantity?: number
  meta?: {
    createdAt: string
    updatedAt: string
    barcode: string
    qrCode: string
  }
  images?: string[]
  thumbnail?: string
}

export interface Review {
  rating: number
  comment: string
  date: string // ISO date string
  reviewerName: string
  reviewerEmail: string
}
