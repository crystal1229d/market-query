import ProductListPage from '@/app/route/product/list'
import DiscountProductPage from '@/app/route/product/discount'
import BestProductPage from '@/app/route/product/best'
import CreateProductPage from '@/app/route/product/create'
import ProductDetailPage from '@/app/route/product/detail'

export const navRoutes = [
  {
    path: '/',
    label: '홈',
    element: <ProductListPage />
  },
  {
    path: '/discount',
    label: '특가상품',
    element: <DiscountProductPage />
  },
  {
    path: '/best',
    label: '베스트',
    element: <BestProductPage />
  },
  {
    path: '/create',
    label: '상품 등록',
    element: <CreateProductPage />
  }
]

export const appRoutes = [
  ...navRoutes,
  { path: '/product/:id', element: <ProductDetailPage /> },
  { path: '/product/new', element: <CreateProductPage /> }
]
