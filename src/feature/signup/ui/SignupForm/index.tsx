import { useSignupForm } from '../../../../entity/user/hook/useSignupForm'
import { useSignupAgreementStore } from '../../model/useSignupAgreementStore'
import { SignupFormInput } from '@/entity/user/type'
import FormField from '../FormField'
import Agreement from '../Agreement'
import Button from '@ui/Button'
import Radio from '@ui/Radio'
import styles from './SignupForm.module.css'

export default function SignupForm() {
  const { register, handleSubmit, errors } = useSignupForm()
  const { agreements, isRequiredChecked } = useSignupAgreementStore()

  const onSubmit = (data: SignupFormInput) => {
    console.log('🎯 제출 성공!', data)
    const email = `${data.emailId}@${data.emailDomain}`
    const birth = `${data.birthYear}-${data.birthMonth}-${data.birthDay}`
    const payload = {
      username: data.username,
      password: data.password,
      name: data.name,
      phone: data.phone,
      gender: data.gender,
      email,
      birth,
      agreements
    }

    console.log(payload)
    // mutation
  }

  const onError = (errors: any) => {
    console.log('🚨 제출 실패 - 유효성 검증 실패:', errors)
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit, onError)}>
      <FormField
        label="아이디"
        required
        placeholder="아이디를 입력해주세요"
        {...register('username')}
        error={errors.username}
      />

      <FormField
        label="비밀번호"
        required
        placeholder="비밀번호를 입력해주세요"
        type="password"
        {...register('password')}
        error={errors.password}
      />

      <FormField
        label="비밀번호확인"
        required
        placeholder="비밀번호를 한번 더 입력해주세요"
        type="password"
        {...register('confirmPassword')}
        error={errors.confirmPassword}
      />

      <FormField
        label="이름"
        required
        placeholder="이름을 입력해 주세요"
        {...register('name')}
        error={errors.name}
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
            {...register('emailId')}
          />
          <select
            className={styles.select}
            {...register('emailDomain')}>
            <option value="">@ 선택하기</option>
            <option value="naver.com">@naver.com</option>
            <option value="gmail.com">@gmail.com</option>
          </select>
        </div>
      </div>

      <FormField
        label="휴대폰"
        required
        placeholder="숫자만 입력해주세요"
        {...register('phone')}
        error={errors.phone}
      />

      <div className={styles.field}>
        <label className={styles.label}>성별</label>
        <div className={styles.radioGroup}>
          <Radio
            label="남자"
            value="male"
            {...register('gender')}
          />
          <Radio
            label="여자"
            value="female"
            {...register('gender')}
          />
          <Radio
            label="선택안함"
            value="none"
            {...register('gender')}
          />
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label}>생년월일</label>
        <div className={styles.birth}>
          <input
            type="text"
            placeholder="YYYY"
            {...register('birthYear')}
          />
          <span>/</span>
          <input
            type="text"
            placeholder="MM"
            {...register('birthMonth')}
          />
          <span>/</span>
          <input
            type="text"
            placeholder="DD"
            {...register('birthDay')}
          />
        </div>
      </div>

      <Agreement />

      <Button
        type="submit"
        className={styles.submit}>
        {/* disabled={!isRequiredChecked} */}
        가입하기
      </Button>
    </form>
  )
}
