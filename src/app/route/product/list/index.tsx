import { ProductList } from '@/feature/product-list/ui/ProductList'
import Banner from '@layout/Banner'
import styles from './page.module.css'

export default function ProductListPage() {
  return (
    <>
      <Banner />
      <main className={styles.container}>
        <h3 className={styles.title}>🛒 마켓쿼리 모든 상품</h3>
        <ProductList />
      </main>
    </>
  )
}
