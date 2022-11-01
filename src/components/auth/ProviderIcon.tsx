import React, { FC } from 'react'
import {
  FaGithub,
  FaGoogle,
  FaFacebook,
  FaGitlab,
  FaTwitter,
  FaDiscord,
} from 'react-icons/fa'
interface ProviderIconProps {
  name: string
}
const ProviderIcon: FC<ProviderIconProps> = ({ name }) => {
  const providerIcons = {
    github: <FaGithub className='w-full h-full' />,
    gitlab: <FaGitlab className='w-full h-full' />,
    google: <FaGoogle className='w-full h-full' />,
    facebook: <FaFacebook className='w-full h-full' />,
    twitter: <FaTwitter className='w-full h-full' />,
    discord: <FaDiscord className='w-full h-full' />,
  }

  return providerIcons[name as keyof typeof providerIcons]
}
export default ProviderIcon
