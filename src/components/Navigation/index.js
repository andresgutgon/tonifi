import * as React from 'react'
import { Link, withPrefix } from 'gatsby'

import InstagramIcon from './InstagramIcon'
import styles from './index.module.scss'

// FIXME: Move to `siteConfig.js`
const MENU_ITEMS = [
  {
    text: 'CV',
    href: '/curriculum/',
    order: 0
  },
  {
    text: 'Fotos',
    href: '/fotos/',
    order: 1
  },
  {
    text: 'Contacto',
    href: '/contacto/',
    order: 3
  }
]
const Navigation = ({
  name, surname, copyright, cvPdfPath, instagramUsername
}) => (
  <div className={styles.navigation}>
    <div className={styles.navigationInner}>
      <div className={styles.top}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <Link to="/">
              <div className={styles.logoInner}>
                <div className={styles.name}>{name}</div>
                <div className={styles.surname}>{surname}</div>
              </div>
            </Link>
          </div>
        </div>
        <nav>
          <ul className={styles.menu}>
            {MENU_ITEMS.map((link, index) =>
              <li key={index} className={styles.menuItem}>
                <Link
                  to={link.href}
                  className={styles.menuLink}
                  activeClassName={styles.menuLinkActive}
                >
                  {link.text}
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
      <div className={styles.bottom}>
        <div className={styles.download}>
          <a
            className={styles.socialLink}
            href={`https://www.instagram.com/${instagramUsername}`}
            title={`Instagram (${instagramUsername})`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <InstagramIcon />
          </a>
          <span>|</span>
          <a
            href={withPrefix(cvPdfPath)}
            target='_blank'
          >
            Descargar CV (PDF)
          </a>
        </div>
        <div className={styles.copyright}>{copyright}</div>
      </div>
    </div>
  </div>
)

export default Navigation
