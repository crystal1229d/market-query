import { ProductList } from '@/feature/product-list/ui/ProductList'
import Banner from '@layout/Banner'
import styles from './page.module.css'

export default function BestProductPage() {
  return (
    <div>
      <>
        <Banner />
        <main className={styles.container}>
          <h3 className={styles.title}>💫 지금 가장 많이 담는 상품</h3>
          <ProductList sortBy="rating" />
        </main>
      </>
    </div>
  )
}
