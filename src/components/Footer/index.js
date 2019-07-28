import * as React from 'react'
import cn from 'classnames/bind'
import Link from 'gatsby-link'
import { FormattedMessage } from 'react-intl'

import InstagramIcon from './InstagramIcon'
import styles from './index.module.scss'
const cx = cn.bind(styles)

function LangItem ({ lang }) {
  let linkAttrs = { to: lang.link }
  linkAttrs = lang.selected ? { ...linkAttrs, activeClassName: styles.linkSelected } : linkAttrs

  return (
    <Link className={cx('button', 'link')} {...linkAttrs}>
     <FormattedMessage id={`languages.${lang.langKey}`} />
    </Link>
  )
}

function LanguagePicker ({ langsMenu }) {
  if (!langsMenu) return null

  return (
    <ul className={styles.links}>
      {langsMenu.map((lang, index) => {
        const isLast = index === langsMenu.length - 1
        return (
          <li className={styles.langItem} key={lang.langKey}>
            <LangItem lang={lang} />
            {!isLast && <div className={styles.separator} />}
          </li>
        )
      })}
    </ul>
  )
}

const Footer = ({ copyright, cvPdfPath, instagramUsername, langsMenu }) => (
  <div className={styles.footer}>
    <ul className={styles.links}>
      <li>
        <a
          className={styles.link}
          href={`https://www.instagram.com/${instagramUsername}`}
          title={`Instagram (${instagramUsername})`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <InstagramIcon />
        </a>
        <div className={styles.separator} />
      </li>
      <li className={styles.separator} />
      <li>
        <a
          className={styles.link}
          href={cvPdfPath}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FormattedMessage id='footer.downloadCv' />
        </a>
      </li>
    </ul>
    <LanguagePicker langsMenu={langsMenu} />
    <div className={styles.copyright}>{copyright}</div>
  </div>
)

export default Footer
