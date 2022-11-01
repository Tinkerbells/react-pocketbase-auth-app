import React, { FC, InputHTMLAttributes } from 'react'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  label: string
  error?: string
}
const CustomInput: FC<InputProps> = ({ id, label, error, ...rest }) => {
  return (
    <div className='w-full h-[60px] bg-baseAlt flex flex-col  focus-within:bg-baseAlt2 input wrapper'>
      <label
        htmlFor={id}
        className={error ? 'customInput customInput-error' : 'customInput'}
      >
        {label}
      </label>
      <input
        id={id}
        {...rest}
        className='pt-[2px] pb-2 pl-3 text-[14.5px] text-primary bg-transparent focus:outline-0 '
      />
      {error ? (
        <div className='absolute mt-[65px] text-dangeColor text-[12px]'>
          {error}
        </div>
      ) : null}
    </div>
  )
}

export default CustomInput
