import ProductsCta from '@/feature/cart/ui/ProductsCta'
import AvailableProductsList from '@/feature/cart/ui/AvailableProductsList'
import UnavailableProductsList from '@/feature/cart/ui/UnavailableProductsList'
import AddressBox from '@/feature/cart/ui/AddressBox'
import OrderSummary from '@/feature/cart/ui/OrderSummary'
import { useCartStore } from '@cart/model/useCartStore'
import Button from '@ui/Button'

import styles from './page.module.css'

export default function CartPage() {
  const items = useCartStore(state => state.items)
  const itemCount = useCartStore(state => state.itemCount())
  const totalPrice = useCartStore(state => state.totalPrice())

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>장바구니</h3>

      <main className={styles.page}>
        <section className={styles.left}>
          <ProductsCta totalCount={itemCount} />
          <AvailableProductsList products={items} />
          <UnavailableProductsList products={items} />
        </section>

        <section className={styles.right}>
          <AddressBox />
          <OrderSummary totalPrice={totalPrice} />
          <Button className={styles.button}>{totalPrice.toLocaleString()}원 주문하기</Button>
        </section>
      </main>
    </div>
  )
}
