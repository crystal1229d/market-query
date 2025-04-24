import ProductSkeleton from '../ProductSkeleton'
import styles from './ProductSkeletonList.module.css'

type ProductSkeletonListProps = {
  count?: number
}

export default function ProductSkeletonList({ count = 12 }: ProductSkeletonListProps) {
  return (
    <div className={styles.grid}>
      {Array.from({ length: count }).map((_, idx) => (
        <ProductSkeleton key={idx} />
      ))}
    </div>
  )
}
