import { useParams } from 'react-router-dom'
import { useProductQuery } from '@/feature/productDetail/hook/useProductQuery'
import Spinner from '@/component/shared/Spinner'
import styles from './page.module.css'

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>()
  const productId = Number(id)

  const { data: product, isLoading, error } = useProductQuery(productId)

  if (isLoading) return <Spinner />
  if (error || !product) return <p>Error</p>

  const {
    title,
    description,
    category,
    price,
    discountPercentage,
    images,
    rating,
    reviews,
    tags
  } = product

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <img
        src={images?.[0]}
        alt={title}
        className={styles.image}
      />
      <p className={styles.description}>{description}</p>
      <p className={styles.info}>Price: ${price.toLocaleString()}</p>
      <p className={styles.info}>Category: {category}</p>
      <p className={styles.info}>Discount: {discountPercentage}%</p>
      <p className={styles.info}>Rating: {rating}</p>

      <div className={styles.section}>
        <h3>Reviews</h3>
        {reviews?.map((review, idx) => (
          <p
            key={idx}
            className={styles.review}>
            {review.reviewerName} : {review.comment} / {review.rating}
          </p>
        ))}
      </div>

      <div className={styles.section}>
        <h3>Tags</h3>
        {tags?.map((tag, idx) => (
          <p
            key={idx}
            className={styles.tag}>
            {tag}
          </p>
        ))}
      </div>
    </div>
  )
}
