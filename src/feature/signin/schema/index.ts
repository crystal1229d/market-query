import { z } from 'zod'

const withTrimmed = <T extends z.ZodTypeAny>(schema: T) =>
  z.preprocess(val => {
    if (typeof val === 'string') {
      const trimmed = val.trim()
      return trimmed === '' ? '' : trimmed
    }
    return val
  }, schema)

// const usernameSchema = withTrimmed(z.string().optional())
const usernameSchema = withTrimmed(z.string())
  .refine(val => val === '' || val.length >= 1, {
    message: '아이디를 입력해주세요'
  })
  .refine(val => val === '' || val.length >= 6, {
    message: '아이디는 최소 6자 이상이어야 합니다'
  })
  .refine(val => val === '' || val.length <= 16, {
    message: '아이디는 16자 이하이어야 합니다'
  })
  .refine(val => val === '' || /^[a-zA-Z0-9]+$/.test(val), {
    message: '영문 또는 영문+숫자 조합만 가능합니다.'
  })

// const passwordSchema = withTrimmed(z.string().optional())
const passwordSchema = withTrimmed(z.string())
  .refine(val => val === '' || val.length >= 1, {
    message: '비밀번호를 입력해주세요'
  })
  .refine(val => val === '' || val.length >= 6, {
    message: '비밀번호는 최소 6자 이상이어야 합니다'
  })
  .refine(val => val === '' || val.length <= 15, {
    message: '비밀번호는 15자 이하이어야 합니다'
  })
  .refine(val => val === '' || /[a-zA-Z]/.test(val), {
    message: '문자를 포함해야 합니다'
  })
  .refine(val => val === '' || /\d/.test(val), {
    message: '숫자를 포함해야 합니다'
  })

export const signinSchema = z.object({
  username: usernameSchema,
  password: passwordSchema
})
