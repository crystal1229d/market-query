import Checkbox from '@ui/Checkbox'
import styles from './Agreement.module.css'

export default function Agreement() {
  return (
    <div className={styles.field}>
      <label className={styles.label}>
        이용약관동의 <span className={styles.required}>*</span>
      </label>

      <div className={styles.agreementBox}>
        <Checkbox
          label="전체 동의합니다."
          labelClassName={styles.checkAll}
        />

        <ul className={styles.agreementList}>
          <li>
            <Checkbox label="이용약관 동의 (필수)" />
            <a>약관보기</a>
          </li>
          <li>
            <Checkbox label="개인정보 수집·이용 동의 (필수)" />
            <a>약관보기</a>
          </li>
          <li>
            <Checkbox label="개인정보 수집·이용 동의 (선택)" />
            <a>약관보기</a>
          </li>
          <li className={styles.marketing}>
            <Checkbox label="무료배송, 할인쿠폰 등 정보 수신 동의" />
            <div className={styles.inlineOptions}>
              <Checkbox label="SMS" />
              <Checkbox label="이메일" />
            </div>
          </li>
          <li>
            <Checkbox label="본인은 만 14세 이상입니다. (필수)" />
          </li>
        </ul>
      </div>
    </div>
  )
}
