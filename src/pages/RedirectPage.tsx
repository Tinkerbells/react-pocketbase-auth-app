import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Spinner from '../components/UI/Spinner'
import authService from '../services/AuthService'
import { IOAuth2Provider } from '../types/IOAuth2Provider'

const RedirectPage = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const state = searchParams.get('state') as string
    const code = searchParams.get('code') as string
    const redirectUrl = 'http://localhost:5173/redirect'

    const provider: IOAuth2Provider = JSON.parse(
      localStorage.getItem('provider') as string
    )

    if (provider.state !== state) {
      throw "State parameters don't match."
    } else {
      provider.redirectUrl = redirectUrl
      provider.code = code
    }
    authService
      .authViaOAuth(provider)
      .then((data) => {
        localStorage.setItem('meta', JSON.stringify(data))
        navigate('/profile')
      })
      .catch((err) => {
        navigate('/')
        console.log(err)
      })
  }, [])

  return (
    <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center'>
      <Spinner />
    </div>
  )
}

export default RedirectPage
