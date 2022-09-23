import React from 'react'

type Props = {
  children: JSX.Element | JSX.Element[]
}

export const BaseLayout: React.FC<Props> = ({ children }) => {
  return <>{children}</>
}
