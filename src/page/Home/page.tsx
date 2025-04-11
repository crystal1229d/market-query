import { ProductList } from '@/feature/productsList/component/ProductList'
import Banner from '@/component/layout/Banner'
import styles from './page.module.css'

export default function HomePage() {
  return (
    <>
      <Banner />
      <main className={styles.container}>
        <h3 className={styles.title}>🛒 지금 가장 많이 담는 상품</h3>
        <ProductList />
      </main>
    </>
  )
}
