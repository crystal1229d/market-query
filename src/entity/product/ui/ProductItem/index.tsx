import { Link } from 'react-router-dom'
import { Product } from '@product/type'
import { FaShoppingCart, FaStar, FaCommentDots } from 'react-icons/fa'
import styles from './ProductItem.module.css'

interface Props {
  product: Product
}

export default function ProductItem({ product }: Props) {
  const {
    id,
    thumbnail,
    title,
    price,
    rating,
    discountPercentage = 0,
    reviews
  } = product

  const originalPrice = Math.round(price / (1 - discountPercentage / 100))

  return (
    <Link
      to={`/product/${id}`}
      className={styles.card}>
      <div className={styles.badgeTop}>{discountPercentage}% 할인</div>

      <div className={styles.imageWrapper}>
        <img
          src={thumbnail}
          alt={title}
          className={styles.thumbnail}
        />
        {discountPercentage > 15 && (
          <div className={styles.badge}>장보기 특가</div>
        )}
      </div>

      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.priceBox}>
          <span className={styles.originalPrice}>
            ${originalPrice.toLocaleString()}
          </span>
          <span className={styles.discount}>{discountPercentage}%</span>
          <span className={styles.price}>${price.toLocaleString()}</span>
        </div>

        <div className={styles.meta}>
          <span className={styles.rating}>
            <FaStar className={styles.icon} /> {rating}
          </span>
          <span className={styles.reviews}>
            <FaCommentDots className={styles.icon} /> {reviews?.length ?? 0}
          </span>
        </div>
      </div>

      <div className={styles.cartBtn}>
        <FaShoppingCart />
        <span>담기</span>
      </div>
    </Link>
  )
}
