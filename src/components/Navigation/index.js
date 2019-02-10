import * as React from 'react'

import Footer from '../Footer'
import Logo from './Logo'
import Menu from './Menu'
import styles from './index.module.scss'

const Navigation = ({
  name, surname, copyright, cvPdfPath, instagramUsername
}) => (
  <div className={styles.navigation}>
    <div className={styles.navigationInner}>
      <div className={styles.top}>
        <div className={styles.header}>
          <Logo name={name} surname={surname} />
        </div>
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
  </div>
)

export default Navigation
