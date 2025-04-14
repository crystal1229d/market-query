import Agreement from '@/feature/auth/ui/Agreement'
import styles from './page.module.css'
import Button from '@/shared/ui/Button'

export default function SignupPage() {
  return (
    <main className={styles.container}>
      <h3 className={styles.title}>회원가입</h3>

      <form className={styles.form}>
        <FormField
          label="아이디"
          required
          placeholder="아이디를 입력해주세요"
        />

        <FormField
          label="비밀번호"
          required
          placeholder="비밀번호를 입력해주세요"
          type="password"
        />

        <FormField
          label="비밀번호확인"
          required
          placeholder="비밀번호를 한번 더 입력해주세요"
          type="password"
        />

        <FormField
          label="이름"
          required
          placeholder="이름을 입력해 주세요"
        />

        <div className={styles.field}>
          <label className={styles.label}>
            이메일
            <span className={styles.required}>*</span>
          </label>
          <div className={styles.emailGroup}>
            <input
              type="text"
              placeholder="예: marketquery"
              className={styles.input}
            />
            <select className={styles.select}>
              <option>@ 선택하기</option>
              <option>@naver.com</option>
              <option>@gmail.com</option>
            </select>
          </div>
        </div>

        <FormField
          label="휴대폰"
          required
          placeholder="숫자만 입력해주세요"
        />

        <div className={styles.field}>
          <label className={styles.label}>성별</label>
          <div className={styles.radioGroup}>
            <label>
              <input
                type="radio"
                name="gender"
              />{' '}
              남자
            </label>
            <label>
              <input
                type="radio"
                name="gender"
              />{' '}
              여자
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                defaultChecked
              />{' '}
              선택안함
            </label>
          </div>
        </div>

        <div className={styles.field}>
          <label className={styles.label}>생년월일</label>
          <div className={styles.birth}>
            <input
              type="text"
              placeholder="YYYY"
            />
            <span>/</span>
            <input
              type="text"
              placeholder="MM"
            />
            <span>/</span>
            <input
              type="text"
              placeholder="DD"
            />
          </div>
        </div>

        <Agreement />

        <Button
          type="submit"
          className={styles.submit}>
          가입하기
        </Button>
      </form>
    </main>
  )
}

function FormField({
  label,
  required = false,
  placeholder,
  type = 'text'
}: {
  label: string
  required?: boolean
  placeholder: string
  type?: string
}) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>
      <input
        type={type}
        className={styles.input}
        placeholder={placeholder}
      />
    </div>
  )
}
