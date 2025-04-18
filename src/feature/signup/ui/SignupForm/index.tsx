import { useNavigate } from 'react-router-dom'
import { signup } from '../../api'
import { useSignupForm } from '@feature/signup/hook/useSignupForm'
import { SignupFormInput } from '@feature/signup/type'
import { useSignupAgreementStore } from '@feature/signup/model/useSignupAgreementStore'
import FormField from '@feature/signup/ui/FormField'
import Agreement from '@feature/signup/ui/Agreement'
import Button from '@ui/Button'
import Radio from '@ui/Radio'
import styles from './SignupForm.module.css'

export default function SignupForm() {
  const { register, handleSubmit, isValid, errors } = useSignupForm()
  const { isRequiredChecked } = useSignupAgreementStore()
  const navigate = useNavigate()

  const isSubmitAvailable = isValid && isRequiredChecked

  const onSubmit = async (data: SignupFormInput) => {
    const email = `${data.emailId}@${data.emailDomain}`
    const birth = `${data.birthYear}-${data.birthMonth}-${data.birthDay}`
    const payload = {
      username: data.username,
      password: data.password,
      name: data.name,
      phone: data.phone,
      gender: data.gender,
      email,
      birthDate: birth
    }

    try {
      const res = await signup(payload)
      console.log('🎉 가입 성공:', res)

      //   localStorage.setItem('user', JSON.stringify(res))

      navigate('/')
    } catch (err) {
      console.error('❌ 가입 실패:', err)
    }
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}>
      <FormField
        label="아이디"
        required
        placeholder="아이디를 입력해주세요"
        register={register('username')}
        error={errors.username}
      />

      <FormField
        label="비밀번호"
        required
        placeholder="비밀번호를 입력해주세요"
        type="password"
        register={register('password')}
        error={errors.password}
      />

      <FormField
        label="비밀번호확인"
        required
        placeholder="비밀번호를 한번 더 입력해주세요"
        type="password"
        register={register('confirmPassword')}
        error={errors.confirmPassword}
      />

      <FormField
        label="이름"
        required
        placeholder="이름을 입력해 주세요"
        register={register('name')}
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
        {errors.emailId && (
          <p className={styles.error}>{errors.emailId.message}</p>
        )}
        {errors.emailDomain && (
          <p className={styles.error}>{errors.emailDomain.message}</p>
        )}
      </div>

      <FormField
        label="휴대폰"
        required
        placeholder="숫자만 입력해주세요"
        register={register('phone')}
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
        {errors.birthYear && (
          <p className={styles.error}>{errors.birthYear.message}</p>
        )}
        {errors.birthMonth && (
          <p className={styles.error}>{errors.birthMonth.message}</p>
        )}
        {errors.birthDay && (
          <p className={styles.error}>{errors.birthDay.message}</p>
        )}
      </div>

      <Agreement />

      <Button
        type="submit"
        className={styles.submit}
        disabled={!isSubmitAvailable}>
        가입하기
      </Button>
    </form>
  )
}
