import { Review } from '@/entity/product/type'
import styles from './ReviewsList.module.css'

interface Props {
  reviews: Review[]
}

export default function ReviewsList({ reviews }: Props) {
  return (
    <div className={styles.section}>
      <h3>Reviews</h3>
      {reviews?.map((review: Review, idx: number) => (
        <p
          key={idx}
          className={styles.review}>
          {review.reviewerName} : {review.comment} / {review.rating}
        </p>
      ))}
    </div>
  )
}
