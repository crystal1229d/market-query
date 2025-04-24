import { useSignupAgreementStore } from '../../model/useSignupAgreementStore'
import Checkbox from '@ui/Checkbox'
import styles from './Agreement.module.css'

export default function Agreement() {
  const { agreements, toggle, toggleAll, isAllChecked } = useSignupAgreementStore()

  return (
    <div className={styles.field}>
      <label className={styles.label}>
        이용약관동의 <span className={styles.required}>*</span>
      </label>

      <div className={styles.agreementBox}>
        <Checkbox
          label="전체 동의합니다."
          checked={isAllChecked}
          onChange={toggleAll}
          labelClassName={styles.checkAll}
        />

        <ul className={styles.agreementList}>
          <li>
            <Checkbox
              label="이용약관 동의 (필수)"
              checked={agreements.termsRequired}
              onChange={() => toggle('termsRequired')}
            />
            <a>약관보기</a>
          </li>
          <li>
            <Checkbox
              label="개인정보 수집·이용 동의 (필수)"
              checked={agreements.privacyRequired}
              onChange={() => toggle('privacyRequired')}
            />
            <a>약관보기</a>
          </li>
          <li>
            <Checkbox
              label="개인정보 수집·이용 동의 (선택)"
              checked={agreements.privacyOptional}
              onChange={() => toggle('privacyOptional')}
            />
            <a>약관보기</a>
          </li>
          <li className={styles.marketing}>
            <Checkbox
              label="무료배송, 할인쿠폰 등 정보 수신 동의"
              checked={agreements.marketing}
              onChange={() => toggle('marketing')}
            />
            <div className={styles.inlineOptions}>
              <Checkbox label="SMS" checked={agreements.sms} onChange={() => toggle('sms')} />
              <Checkbox
                label="이메일"
                checked={agreements.email}
                onChange={() => toggle('email')}
              />
            </div>
          </li>
          <li>
            <Checkbox
              label="본인은 만 14세 이상입니다. (필수)"
              checked={agreements.ageRequired}
              onChange={() => toggle('ageRequired')}
            />
          </li>
        </ul>
      </div>
    </div>
  )
}
