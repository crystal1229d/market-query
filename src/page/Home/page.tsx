import { ProductList } from '../../feature/productList/component/ProductList'
import styles from './page.module.css'

export default function HomePage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>컬리 메인 페이지</h1>
      <ProductList />
    </main>
  )
}
