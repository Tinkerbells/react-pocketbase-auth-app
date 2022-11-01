import React, { FC, useEffect, useState } from 'react'
import { RiArrowRightLine } from 'react-icons/ri'
import CustomButton from '../components/UI/CustomButton'
import Spinner from '../components/UI/Spinner'
import { useAppDispatch, useAppSelector } from '../hooks/redux'

import { useNavigate } from 'react-router-dom'
import authService from '../services/AuthService'
import { setUser } from '../redux/store/reducers/AuthSlice'

interface ProfilePageProps {
  name: string
  email: string
  avatarUrl: string
}
const ProfilePage = () => {
  const { user, meta } = useAppSelector((state) => state.auth)
  const [loading, setLoading] = useState<boolean>(true)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setUser())
    setLoading(false)
  }, [])

  if (!user) {
    navigate('/')
  }

  let avatarUrl =
    meta?.avatarUrl ||
    `http://127.0.0.1:8090/api/files/systemprofiles0/${user?.profile?.id}/${user?.profile?.avatar}`

  if (!meta?.avatarUrl && !user?.profile?.avatar) {
    avatarUrl =
      'https://www.kindpng.com/picc/m/105-1055656_account-user-profile-avatar-avatar-user-profile-icon.png'
  }
  const name = user?.profile?.name || meta?.username

  const email = user?.email
  const createAt = user?.created

  const handleClick = () => {
    authService.logout()
    navigate('/')
  }

  return (
    <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center'>
      {loading ? (
        <Spinner />
      ) : (
        <section className='flex flex-col gap-10 items-center sm:w-[420px]'>
          <img
            alt='avatar'
            src={avatarUrl}
            className='w-[200px] h-[200px] rounded-full'
          />
          <p className='text-xl text-primary font-bold'>Welcome {name}!</p>
          <div className='w-5/6 h-32 border-[1px] border-primary rounded-2xl p-5 user-info'>
            <p className='text-center text-lg'>Profile info:</p>
            <ul className='mt-1 flex flex-col gap-2'>
              <li>Email - {email}</li>
              <li>Created at - {createAt}</li>
            </ul>
          </div>
          <CustomButton styles='mt-2 group gap-[4px]' onClick={handleClick}>
            <p className='ease-in duration-100 group-hover:mr-1'>Logout</p>
            <RiArrowRightLine className='w-5 h-5' />
          </CustomButton>
        </section>
      )}
    </div>
  )
}

export default ProfilePage
