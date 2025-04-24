import Checkbox from '@ui/Checkbox'
import { CartItem } from '@cart/type'
import { useCartStore } from '@cart/model/useCartStore'
import styles from './AvailableProductsList.module.css'

interface Props {
  products: CartItem[]
}

export default function AvailableProductsList({ products }: Props) {
  const updateQuantity = useCartStore(state => state.updateQuantity)
  const removeItem = useCartStore(state => state.removeItem)

  return (
    <div className={styles.wrapper}>
      <div className={styles.checkAll_wrapper}>
        <Checkbox variant="square" label="구매가능" labelClassName={styles.checkAll_label} />
      </div>

      {products.map(product => {
        const {
          productId,
          brand,
          title,
          thumbnail,
          price,
          discountPercentage,
          quantity,
          minimumOrderQuantity = 1
        } = product

        const handleDecrease = () => updateQuantity(productId, Math.max(1, quantity - 1))
        const handleIncrease = () => updateQuantity(productId, quantity + 1)

        return (
          <div key={productId} className={styles.itemBox}>
            <div className={styles.ctaBox}>
              <Checkbox variant="square" />
              <button className={styles.remove} onClick={() => removeItem(productId)}>
                ×
              </button>
            </div>

            <div className={styles.infoBox}>
              <p className={styles.title}>
                [{brand}] {title}
              </p>

              {minimumOrderQuantity > 1 && (
                <div className={styles.badge}>{minimumOrderQuantity}개 이상 주문</div>
              )}

              <div className={styles.info}>
                <img src={thumbnail} alt={title} className={styles.img} />

                <div className={styles.numberBox}>
                  <div className={styles.price}>
                    <span className={styles.current}>${price.toLocaleString()}</span>
                    <span className={styles.original}>{discountPercentage}%</span>
                  </div>

                  <div className={styles.qty}>
                    <button onClick={handleDecrease}>-</button>
                    <span>{quantity}</span>
                    <button onClick={handleIncrease}>+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
