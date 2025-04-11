import { Product } from '../../type'
import styles from './ProductItem.module.css'

interface Props {
  product: Product
}

export default function ProductItem({ product }: Props) {
  const { thumbnail, title, price } = product
  return (
    <div className={styles.card}>
      <img
        src={thumbnail}
        alt={title}
      />
      <h3>{title}</h3>
      <p>${price}</p>
    </div>
  )
}
