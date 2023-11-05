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
    textKey: 'mainMenu.direction',
    id: '06',
  },
  {
    textKey: 'mainMenu.events',
    href: 'https://actorymaestroceremonias.com',
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

export default function Menu({
  urls,
  langKey,
  fixed = false,
  inlineStyles = {},
}) {
  return (
    <nav className={cx('menu', { fixed })} style={inlineStyles}>
      <ul className={styles.list}>
        {MENU_ITEMS.map((link, index) => (
          <li key={index} className={styles.menuItem}>
            {link.href ? (
              <a href={link.href} className={styles.menuLink} target="_blank">
                <FormattedMessage id={link.textKey} />
              </a>
            ) : (
              <Link
                to={urlForId(link.id, langKey, urls)}
                className={styles.menuLink}
                activeClassName={styles.menuLinkActive}
              >
                <FormattedMessage id={link.textKey} />
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
