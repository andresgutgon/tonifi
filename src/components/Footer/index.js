import * as React from 'react'
import cn from 'classnames/bind'
import Link from 'gatsby-link'
import { FormattedMessage } from 'react-intl'

import styles from './index.module.scss'
const cx = cn.bind(styles)

function LangItem({ lang }) {
  return (
    <Link
      to={lang.link}
      className={cx('button', 'link', {
        [styles.linkSelected]: lang.selected,
      })}
    >
      <FormattedMessage id={`languages.${lang.langKey}`} />
    </Link>
  )
}

function LanguagePicker({ langsMenu }) {
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

export default function Footer({ copyright, cvPdfPath, phone, langsMenu }) {
  return (
    <div className={styles.footer}>
      <ul className={styles.links}>
        <li className={styles.separator} />
        <li>
          <a
            className={styles.link}
            href={cvPdfPath}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FormattedMessage id="footer.downloadCv" />
          </a>
        </li>
      </ul>
      <a href={`tel:${phone}`} className={styles.phone}>
        +34 {phone}
      </a>
      <LanguagePicker langsMenu={langsMenu} />
      <div className={styles.copyright}>{copyright}</div>
    </div>
  )
}
