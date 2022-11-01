import * as yup from 'yup'

export const loginSchema = yup.object().shape({
  email: yup.string().email('Wrong email').required('Required'),
  password: yup
    .string()
    .min(8, 'Password min length is 8')
    .required('Required'),
})
