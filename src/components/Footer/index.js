import * as React from 'react'
import { withPrefix } from 'gatsby'

import InstagramIcon from './InstagramIcon'
import styles from './index.module.scss'

const Footer = ({ copyright, cvPdfPath, instagramUsername }) => (
  <div className={styles.footer}>
    <ul className={styles.links}>
      <li>
        <a
          className={styles.socialLink}
          href={`https://www.instagram.com/${instagramUsername}`}
          title={`Instagram (${instagramUsername})`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <InstagramIcon />
        </a>
      </li>
      <li className={styles.separator} />
      <li>
        <a
          href={withPrefix(cvPdfPath)}
          target='_blank'
          rel='noopener noreferrer'
        >
          Descargar CV (PDF)
        </a>
      </li>
    </ul>
    <div>{copyright}</div>
  </div>
)

export default Footer
