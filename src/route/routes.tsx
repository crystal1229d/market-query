import HomePage from '../page/Home/page'
import NewProductPage from '../page/NewProduct/page'
import BestProductPage from '../page/BestProduct/page'
import CreateProductPage from '../page/CreateProduct/page'

export const routes = [
  {
    path: '/',
    label: '홈',
    element: <HomePage />
  },
  {
    path: '/new',
    label: '신상품',
    element: <NewProductPage />
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
