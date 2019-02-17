import * as React from 'react'

import Footer from '../Footer'
import Logo from './Logo'
import Menu from './Menu'
import styles from './index.module.scss'

const Navigation = ({
  name, surname, copyright, cvPdfPath, instagramUsername
}) => (
  <nav className={styles.navigation}>
    <div className={styles.navigationInner}>
      <div>
        <Logo name={name} surname={surname} />
        <Menu />
      </div>
      <div className={styles.bottom}>
        <Footer
          copyright={copyright}
          cvPdfPath={cvPdfPath}
          instagramUsername={instagramUsername}
        />
      </div>
    </div>
  </nav>
)

export default Navigation
