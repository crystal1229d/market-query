import { z } from 'zod'

const withTrimmed = <T extends z.ZodTypeAny>(schema: T) =>
  z.preprocess(val => {
    if (typeof val === 'string') {
      const trimmed = val.trim()
      return trimmed === '' ? undefined : trimmed
    }
    return val
  }, schema)

const usernameSchema = withTrimmed(z.string().optional())
  .refine(val => val === undefined || val.length >= 1, {
    message: '아이디를 입력해주세요'
  })
  .refine(val => val === undefined || val.length >= 6, {
    message: '아이디는 최소 6자 이상이어야 합니다'
  })
  .refine(val => val === undefined || val.length <= 16, {
    message: '아이디는 16자 이하이어야 합니다'
  })
  .refine(val => val === undefined || /^[a-zA-Z0-9]+$/.test(val), {
    message: '영문 또는 영문+숫자 조합만 가능합니다.'
  })

const passwordSchema = withTrimmed(z.string().optional())
  .refine(val => val === undefined || val.length >= 1, {
    message: '비밀번호를 입력해주세요'
  })
  .refine(val => val === undefined || val.length >= 6, {
    message: '비밀번호는 최소 6자 이상이어야 합니다'
  })
  .refine(val => val === undefined || val.length <= 15, {
    message: '비밀번호는 15자 이하이어야 합니다'
  })
  .refine(val => val === undefined || /[a-zA-Z]/.test(val), {
    message: '문자를 포함해야 합니다'
  })
  .refine(val => val === undefined || /\d/.test(val), {
    message: '숫자를 포함해야 합니다'
  })

const nameSchema = withTrimmed(z.string().optional())
  .refine(val => val === undefined || val.length >= 1, {
    message: '이름을 입력해주세요'
  })
  .refine(val => val === undefined || /^[a-zA-Z가-힣\s]+$/.test(val), {
    message: '이름은 문자만 입력해주세요.'
  })

const phoneSchema = withTrimmed(z.string().optional()).refine(
  val => val === undefined || /^[0-9]+$/.test(val),
  {
    message: '휴대폰 번호는 숫자만 입력해주세요.'
  }
)

const emailSchema = withTrimmed(z.string().optional()).refine(
  val => val === undefined || val.length >= 1,
  {
    message: '이메일을 입력해주세요'
  }
)

const birthYearSchema = withTrimmed(z.string().optional())
  .refine(val => val === undefined || val.length >= 1, {
    message: '태어난 연도를 입력해주세요'
  })
  .refine(val => val === undefined || val.length === 4, {
    message: '태어난 연도를 정확하게 입력해주세요'
  })

const birthMonthSchema = withTrimmed(z.string().optional()).refine(
  val => val === undefined || val.length >= 1,
  {
    message: '태어난 월을 정확하게 입력해주세요'
  }
)

const birthDaySchema = withTrimmed(z.string().optional()).refine(
  val => val === undefined || val.length >= 1,
  {
    message: '태어난 일을 정확하게 입력해주세요'
  }
)

export const SignupSchema = z
  .object({
    username: usernameSchema,
    password: passwordSchema,
    confirmPassword: z.string().optional(),
    name: nameSchema,
    phone: phoneSchema,
    emailId: emailSchema,
    emailDomain: withTrimmed(z.string().optional()),
    birthYear: birthYearSchema,
    birthMonth: birthMonthSchema,
    birthDay: birthDaySchema,
    gender: z.enum(['male', 'female', 'none'])
  })

  // .refine(data => data.password === data.confirmPassword, {
  //   path: ['confirmPassword'],
  //   message: '비밀번호가 일치하지 않습니다.'
  // })

  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        path: ['confirmPassword'],
        code: z.ZodIssueCode.custom,
        message: '비밀번호가 일치하지 않습니다.'
      })
    }

    if (data.emailId && !data.emailDomain) {
      ctx.addIssue({
        path: ['emailDomain'],
        code: z.ZodIssueCode.custom,
        message: '이메일 도메인을 선택해 주세요'
      })
    }
  })
