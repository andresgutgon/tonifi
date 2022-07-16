import * as React from 'react'

import Footer from '../Footer'
import Logo from './Logo'
import Menu from './Menu'
import styles from './index.module.scss'

const Navigation = ({
  urls,
  langKey,
  name,
  surname,
  copyright,
  cvPdfPath,
  phone,
  langsMenu,
}) => (
  <nav className={styles.navigation}>
    <div className={styles.navigationInner}>
      <div>
        <Logo langKey={langKey} name={name} surname={surname} />
        <Menu urls={urls} langKey={langKey} />
      </div>
      <div className={styles.bottom}>
        <Footer
          langsMenu={langsMenu}
          copyright={copyright}
          cvPdfPath={cvPdfPath}
          phone={phone}
        />
      </div>
    </div>
  </nav>
)

export default Navigation
