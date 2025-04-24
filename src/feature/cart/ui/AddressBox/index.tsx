import Button from '@ui/Button'
import { FiMapPin } from 'react-icons/fi'
import styles from './AddressBox.module.css'

export default function AddressBox() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title_wrapper}>
        <FiMapPin />
        <h1>배송지</h1>
      </div>
      <button className={styles.badge}>당일배송</button>
      <div className={styles.address_wrapper}>
        <p>서울 서대문구 XX동 111-111 104동 403호</p>
        <Button variant="outline" className={styles.addressButton}>
          변경
        </Button>
      </div>
    </div>
  )
}
