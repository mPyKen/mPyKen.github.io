import { LinkProps, ThemeProvider, createTheme } from '@mui/material'
import React from 'react'
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom'

// https://mui.com/material-ui/guides/routing/#global-theme-link
// https://github.com/mui/material-ui/issues/31289
const LinkBehavior = React.forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }>(
  (props, ref) => {
    const { children, href, ...other } = props
    const url = typeof href === 'string' ? href : `${href.pathname}${href.search}${href.hash}`
    // http(s):// or mailto: should be treated as external links
    const isExternal = url?.substring(2, 7).includes(':')
    if (isExternal) {
      return (
        <a ref={ref} href={url} {...other}>
          {children}
        </a>
      )
    }
    return (
      <RouterLink ref={ref} to={href} {...other}>
        {children}
      </RouterLink>
    )
  }
)
const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
})

type Props = {
  children: JSX.Element | JSX.Element[]
}

export const BaseLayout: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>{children}</>
    </ThemeProvider>
  )
}
