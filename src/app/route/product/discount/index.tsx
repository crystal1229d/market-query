import { ProductList } from '@/feature/product-list/ui/ProductList'
import Banner from '@layout/Banner'
import styles from './page.module.css'

export default function DiscountProductPage() {
  return (
    <>
      <Banner />
      <main className={styles.container}>
        <h3 className={styles.title}>🎁 마켓쿼리 장보기 특가 최대 50%!</h3>
        <ProductList sortBy="discountPercentage" />
      </main>
    </>
  )
}
