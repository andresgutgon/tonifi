import * as React from 'react'
import cn from 'classnames/bind'
import { Link } from 'gatsby'
import { FormattedMessage } from 'react-intl'

import { urlForId } from '../../Layout/Content'
import styles from './index.module.scss'
const cx = cn.bind(styles)

const MENU_ITEMS = [
  {
    textKey: 'mainMenu.cv',
    id: '03',
  },
  {
    textKey: 'mainMenu.videobook',
    id: '02',
  },
  {
    textKey: 'mainMenu.photos',
    id: '04',
  },
  {
    textKey: 'mainMenu.contact',
    id: '05',
  },
]
const MenuComponent = ({ urls, langKey, fixed = false, inlineStyles = {} }) => (
  <nav className={cx('menu', { fixed })} style={inlineStyles}>
    <ul className={styles.list}>
      {MENU_ITEMS.map((link, index) => (
        <li key={index} className={styles.menuItem}>
          <Link
            to={urlForId(link.id, langKey, urls)}
            className={styles.menuLink}
            activeClassName={styles.menuLinkActive}
          >
            <FormattedMessage id={link.textKey} />
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

function isBigScreen() {
  if (typeof window === 'undefined') return true
  return window.matchMedia('(min-width: 400px)').matches
}

const Menu = (props) => {
  const bigScreen = isBigScreen()

  if (bigScreen) return <MenuComponent {...props} />

  return <MenuComponent {...props} />
}

export default Menu
