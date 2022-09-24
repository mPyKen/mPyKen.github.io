import { Box, Link, Stack, Typography } from '@mui/material'
import React from 'react'

import { StandardLayout } from '../components/layouts/StandardLayout'
import logo from '../logo.svg'

export const Home: React.FC = _props => {
  return (
    <StandardLayout>
      <Stack flex={1} direction="column" justifyContent="center" alignItems="center" spacing={1}>
        <Box
          component="img"
          height="40vmin"
          sx={{
            animation: 'logo-spin infinite 20s linear',
            '@keyframes logo-spin': {
              from: {
                transform: 'rotate(0deg)',
              },
              to: {
                transform: 'rotate(360deg)',
              },
            },
          }}
          alt="logo"
          src={logo}
        />
        <Typography variant="h4" textAlign="center">
          Edit <code>src/Home.tsx</code> and save to reload. <br />
          <Link href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </Link>
        </Typography>
      </Stack>
    </StandardLayout>
  )
}
