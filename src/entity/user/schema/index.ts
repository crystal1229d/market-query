import { z } from 'zod'

export const SignupSchema = z
  .object({
    username: z.string().min(4),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
    name: z.string().nonempty(),
    phone: z.string().regex(/^\d+$/, '숫자만 입력해주세요'),
    emailId: z.string().nonempty(),
    emailDomain: z.string().nonempty(),
    birthYear: z.string().length(4),
    birthMonth: z.string().length(2),
    birthDay: z.string().length(2),
    gender: z.enum(['male', 'female', 'none'])
  })
  .refine(data => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword']
  })
