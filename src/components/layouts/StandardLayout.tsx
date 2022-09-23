import React from 'react'

import { Header } from '../../stories/Header'
import { Footer } from '../Footer'
import { BaseLayout } from './BaseLayout'

const noop = () => {
  // do nothing
}

type Props = {
  children: JSX.Element | JSX.Element[]
}

export const StandardLayout: React.FC<Props> = ({ children }) => {
  return (
    <BaseLayout>
      <Header onCreateAccount={noop} onLogin={noop} onLogout={noop} />
      <>{children}</>
      <Footer label="mPyKen" url="https://github.com/mPyKen" />
    </BaseLayout>
  )
}
