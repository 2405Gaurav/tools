import Image from 'next/image'
import React from 'react'

type LogoProps = {
  src?: string
  alt?: string
  width?: number
  height?: number
  className?: string
}

export const Logo: React.FC<LogoProps> = ({
  src = '/navicn.png', // default logo path
  alt = 'Company Logo',
  width = 70,
  height = 70,
  className
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority
    />
  )
}
