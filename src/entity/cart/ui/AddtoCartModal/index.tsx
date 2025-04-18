import { useState } from 'react'
import { useCartStore } from '@cart/model/useCartStore'
import { Product } from '@product/type'
import { CartItem } from '@cart/type'
import styles from './AddToCartModal.module.css'

type Props = {
  product: Product
  onClose: () => void
}

export default function AddToCartModal({ product, onClose }: Props) {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCartStore()

  const { id, title, price, thumbnail } = product

  const total = product.price * quantity

  const handleSubmit = () => {
    const newProduct: CartItem = {
      productId: id!,
      name: title,
      price,
      thumbnail,
      quantity
    }

    addItem(newProduct)
    onClose()
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.product}>
          <img
            src={product.thumbnail}
            alt={title}
          />
          <div className={styles.info}>
            <h3>{title}</h3>
            <p>{product.price.toLocaleString()}원</p>
            <div className={styles.quantity}>
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)}>+</button>
            </div>
            <p>
              합계: <strong>{total.toLocaleString()}원</strong>
            </p>
          </div>
        </div>
        <div className={styles.actions}>
          <button onClick={onClose}>취소</button>
          <button
            className={styles.add}
            onClick={handleSubmit}>
            장바구니 담기
          </button>
        </div>
      </div>
    </div>
  )
}
