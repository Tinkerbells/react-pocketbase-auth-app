import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CustomButton from '../UI/CustomButton'
import CustomInput from '../UI/CustomInput'
import { RiArrowRightLine } from 'react-icons/ri'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { useFormik } from 'formik'
import { IAuthParams } from '../../types/IAuthParams'
import { loginSchema } from '../../schemas'
import OAuthProviders from './OAuthProviders'
import Spinner from '../UI/Spinner'
import { getOAuthProviders } from '../../redux/store/reducers/ActionCreators'
import authService from '../../services/AuthService'

const LoginForm = () => {
  const { authProviders, loading } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getOAuthProviders())
  }, [])

  const onSubmit = (values: IAuthParams) => {
    authService
      .authViaEmail(values)
      .then(() => navigate('/profile'))
      .catch((err) => {
        console.log(err)
      })
  }
  const initialValues: IAuthParams = { email: '', password: '' }

  const {
    values,
    errors,
    touched,
    handleBlur,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit,
  })

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <form
          className='flex flex-col items-center  sm:w-[420px]'
          onSubmit={handleSubmit}
        >
          <h2 className='flex flex-col gap-2 text-lg text-primary text-center mb-[30px]'>
            User sign in
          </h2>
          <div className='w-full flex flex-col gap-[30px]'>
            <CustomInput
              id='email'
              label='EMAIL'
              onBlur={handleBlur}
              value={values.email}
              error={touched.email ? errors.email : ''}
              onChange={handleChange}
            />
            <CustomInput
              id='password'
              type='password'
              label='PASSWORD'
              onBlur={handleBlur}
              value={values.password}
              error={touched.password ? errors.password : ''}
              onChange={handleChange}
            />
          </div>
          <CustomButton
            styles='mt-12 group gap-[4px]'
            disabled={isSubmitting}
            type='submit'
          >
            <p className='ease-in duration-100 group-hover:mr-1'>Login</p>
            <RiArrowRightLine className='w-5 h-5' />
          </CustomButton>
          <OAuthProviders providers={authProviders} />
        </form>
      )}
    </>
  )
}

export default LoginForm
