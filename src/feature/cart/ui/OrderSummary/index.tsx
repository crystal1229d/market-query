import styles from './OrderSummary.module.css'

export default function OrderSummary({ totalPrice }: { totalPrice: number }) {
  return (
    <div className={styles.wrapper}>
      <p>결제 금액</p>
      <p>상품할인금액</p>
      <p>배송비</p>
      <p className={styles.total}>결제예정금액: {totalPrice.toLocaleString()}원</p>
    </div>
  )
}
