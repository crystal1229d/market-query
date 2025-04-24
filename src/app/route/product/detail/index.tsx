import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { useProductQuery } from '@/feature/product-detail/hook/useProductQuery'
import ReviewsList from '@/feature/product-detail/ui/ReviewsList'
import TagsList from '@/feature/product-detail/ui/TagsList'
import { useCartStore } from '@cart/model/useCartStore'
import Spinner from '@ui/Spinner'
import Button from '@ui/Button'

import styles from './page.module.css'

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>()
  const productId = Number(id)

  const [quantity, setQuantity] = useState(1)
  const handleIncrease = () => setQuantity(q => q + 1)
  const handleDecrease = () => setQuantity(q => Math.max(1, q - 1))

  const { addItem } = useCartStore()

  const { data: product, isLoading, error } = useProductQuery(productId)

  if (isLoading) return <Spinner />
  if (error || !product) return <p>Error</p>

  const { title, description, category, price, discountPercentage, images, rating, reviews, tags } =
    product

  const handleAddToCart = () => {
    addItem({
      productId,
      name: title,
      price,
      thumbnail: images?.[0] ?? '',
      quantity
    })
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>

      <img src={images?.[0]} alt={title} className={styles.image} />

      <p className={styles.description}>{description}</p>
      <p className={styles.info}>Price: ${price.toLocaleString()}</p>
      <p className={styles.info}>Category: {category}</p>
      <p className={styles.info}>Discount: {discountPercentage}%</p>
      <p className={styles.info}>Rating: {rating}</p>

      <ReviewsList reviews={reviews || []} />
      <TagsList tags={tags || []} />

      <div className={styles.purchaseSection}>
        <div className={styles.quantityBox}>
          <button onClick={handleDecrease}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrease}>+</button>
        </div>
        <p className={styles.total}>
          총 합계: <strong>{(price * quantity).toLocaleString()}원</strong>
        </p>
        <Button onClick={handleAddToCart}>장바구니에 담기</Button>
      </div>
    </div>
  )
}
