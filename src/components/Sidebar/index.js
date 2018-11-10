import React from 'react'
import { Link } from 'gatsby'

import styles from './index.module.scss'

// FIXME: Move to `siteConfig.js`
const MENU_ITEMS = [
  {
    text: 'CV',
    href: '/cv',
    order: 0
  },
  {
    text: 'Fotos',
    href: '/fotos',
    order: 1
  },
  {
    text: 'Vídeos',
    href: '/videos',
    order: 2
  },
  {
    text: 'Contacto',
    href: '/contacto',
    order: 3
  }
]
const Sidebar = ({ name, surname, copyright }) => (
  <div className={styles.sidebar}>
    <div className={styles.sidebarInner}>
      <div className={styles.top}>
        <h1 className={styles.title}>
          <Link to="/">
            <div className={styles.name}>{name}</div>
            <div className={styles.surname}>{surname}</div>
          </Link>
        </h1>
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
      </div>
      <div className={styles.bottom}>
        <div className={styles.copyright}>{copyright}</div>
      </div>
    </div>
  </div>
)

export default Sidebar
