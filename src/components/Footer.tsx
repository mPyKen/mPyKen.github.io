import React from 'react'

import { Button } from './Button'

type Props = {
  label: string
  url: string
}

const Footer: React.FC<Props> = ({ label, url }) => (
  <footer>
    <div className="wrapper">
      <span>
        Created with <span className="heart">♥</span> by
      </span>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Button label={label} />
      </a>
    </div>
  </footer>
)

export { Footer }
