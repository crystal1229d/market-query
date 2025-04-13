import styles from './ProductSkeleton.module.css'

export default function ProductSkeleton() {
  return (
    <div className={styles.card}>
      <div className={styles.image} />
      <div className={styles.title} />
      <div className={styles.price} />
    </div>
  )
}
