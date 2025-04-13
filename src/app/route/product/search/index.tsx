import { useSearchParams } from 'react-router-dom'
import { ProductList } from '@/feature/product-list/ui/ProductList'
import { useProductsQuery } from '@/feature/product-list/hook/useProductsQuery'
import Spinner from '@ui/Spinner'
import styles from './page.module.css'

export default function SearchResultPage() {
  const [params] = useSearchParams()
  const keyword = params.get('q') ?? ''

  const { data, isLoading } = useProductsQuery({ keyword })

  console.log(data)

  if (isLoading) return <Spinner />

  return (
    <>
      <main className={styles.container}>
        <h3 className={styles.title}>{keyword} 에 대한 검색 결과</h3>
        <ProductList />
      </main>
    </>
  )
}
