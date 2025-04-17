import ProductListPage from '@/app/route/product/list'
import DiscountProductPage from '@/app/route/product/discount'
import BestProductPage from '@/app/route/product/best'
import CreateProductPage from '@/app/route/product/create'
import ProductDetailPage from '@/app/route/product/detail'
import SearchResultPage from '@/app/route/product/search'
import SignupPage from '@/app/route/auth/signup'
import SigninPage from '@/app/route/auth/signin'
import ProfilePage from '@/app/route/auth/profile'

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
  { path: '/product/new', element: <CreateProductPage /> },
  { path: '/search', element: <SearchResultPage /> },
  { path: '/signup', element: <SignupPage /> },
  { path: '/signin', element: <SigninPage /> },
  { path: '/profile', element: <ProfilePage /> }
  // { path: '*', element: <NotFoundPage /> } // 404
]
