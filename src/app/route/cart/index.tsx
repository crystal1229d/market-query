import ProductsCta from '@/feature/cart/ui/ProductsCta'
import styles from './page.module.css'

export default function CartPage() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>장바구니</h3>

      <main className={styles.page}>
        <section className={styles.left}>
          <ProductsCta />

          <div className={styles['available-products']}>
            (구매 가능) 상품 리스트
          </div>

          <div className={styles['unavailable-products']}>
            (품절/구매불가) 상품 리스트
          </div>
        </section>

        <section className={styles.right}>
          <div className={styles.address}>
            <p>배송지</p>
            <p>서울 서대문구 연희동 111-111</p>
            <button>변경</button>
          </div>
          <div className={styles.order}>
            <p>결제 금액</p>
            <p>상품할인금액</p>
            <p>배송비</p>
            <p>결제예정금액</p>
          </div>
          <button className={styles.button}>6,000원 주문하기</button>
        </section>
      </main>
    </div>
  )
}
