import * as React from 'react'
import cn from 'classnames/bind'
import { Link } from 'gatsby'

import StickyComponent from '../../StickyComponent'
import styles from './index.module.scss'
const cx = cn.bind(styles)

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
const MenuComponent = ({ fixed = false, inlineStyles = {} }) => (
  <nav className={cx('menu', { fixed })} style={inlineStyles}>
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

function isBigScreen () {
  if (typeof window === 'undefined') return true
  return window.matchMedia('(min-width: 400px)').matches
}

const Menu = () => {
  const bigScreen = isBigScreen()

  if (bigScreen) return <MenuComponent />

  return (
    <StickyComponent position='top'>
      {({ fixed, inlineStyles }) => (
        <MenuComponent fixed={fixed} inlineStyles={inlineStyles} />
      )}
    </StickyComponent>
  )
}

export default Menu
