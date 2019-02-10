import * as React from 'react'
import { Link } from 'gatsby'

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
const Menu = () => (
  <nav className={styles.menu}>
    <ul className={styles.list}>
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
)

export default Menu
