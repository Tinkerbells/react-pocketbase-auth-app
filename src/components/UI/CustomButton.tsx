import React, { ButtonHTMLAttributes, FC } from 'react'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styles?: string
  onClick?: () => void
  children: React.ReactNode | React.ReactChild
}
const CustomButton: FC<ButtonProps> = ({ styles, onClick, children }) => {
  return (
    <button
      className={`${styles} h-[60px] w-full flex justify-center items-center bg-primary text-[15px] text-base font-bold`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default CustomButton
