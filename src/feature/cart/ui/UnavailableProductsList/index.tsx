import Checkbox from '@ui/Checkbox'
import { CartItem } from '@cart/type'
import { useCartStore } from '@cart/model/useCartStore'
import styles from './UnavailableProductsList.module.css'

interface Props {
  products: CartItem[]
}

export default function UnavailableProductsList({ products }: Props) {
  const updateQuantity = useCartStore(state => state.updateQuantity)
  const removeItem = useCartStore(state => state.removeItem)

  return (
    <div className={styles.wrapper}>
      <div className={styles.checkAllAvailable_wrapper}>
        <Checkbox variant="square" label="구매가능" labelClassName={styles.checkAll_label} />
      </div>

      <div className={styles.sectionTitle}>🥬 냉장 상품</div>

      {products.map(product => (
        <div key={product.productId} className={styles.item}>
          <div className={styles.left}>
            <Checkbox variant="square" />

            <div className={styles.info}>
              <p className={styles.name}>
                [{product.brand}] {product.title}
              </p>

              {<div className={styles.badge}>냉장</div>}

              <div className={styles.price}>
                <span className={styles.current}>${product.price.toLocaleString()}</span>
                <span className={styles.original}>{product.discountPercentage}%</span>
              </div>

              <div className={styles.qty}>
                <button
                  onClick={() =>
                    updateQuantity(product.productId, Math.max(1, product.quantity - 1))
                  }>
                  -
                </button>
                <span>{product.quantity}</span>
                <button onClick={() => updateQuantity(product.productId, product.quantity + 1)}>
                  +
                </button>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <img src={product.thumbnail} alt={product.title} className={styles.img} />
            <button className={styles.remove} onClick={() => removeItem(product.productId)}>
              ×
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
