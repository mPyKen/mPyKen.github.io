import { Favorite } from '@mui/icons-material'
import { Button, Container, Stack, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import { SxProps, Theme } from '@mui/material/styles'
import React from 'react'

type Props = {
  label: string
  url: string
  sx?: SxProps<Theme>
}

const Footer: React.FC<Props> = ({ label, url, sx }) => (
  <Container sx={sx}>
    <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
      <Typography>Created with</Typography>
      <Favorite sx={{ color: red[700] }} />
      <Typography>by</Typography>
      <Button href={url} target="_blank" rel="noopener noreferrer">
        {label}
      </Button>
    </Stack>
  </Container>
)

export { Footer }
