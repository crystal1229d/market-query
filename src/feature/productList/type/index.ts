export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  thumbnail: string
}

export interface GetAllProductsResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}
