import { Box } from '@mui/material'
import React from 'react'

import { Footer } from '../Footer'
import { Header } from '../Header'
import { BaseLayout } from './BaseLayout'

type Props = {
  children: JSX.Element | JSX.Element[]
}

export const StandardLayout: React.FC<Props> = ({ children }) => {
  return (
    <BaseLayout>
      <Box display="flex" flexDirection="column" height="100vh">
        <Header flex={0} />
        <>{children}</>
        <Footer sx={{ flex: 0 }} label="mPyKen" url="https://github.com/mPyKen" />
      </Box>
    </BaseLayout>
  )
}
