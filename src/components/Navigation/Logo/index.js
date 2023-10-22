import * as React from 'react'
import { Link } from 'gatsby'

import styles from './index.module.scss'

const Logo = ({ name, surname, langKey }) => (
  <div className={styles.logo}>
    <Link to={langKey === 'ca' ? '/' : `/${langKey}`}>
      <div className={styles.logoInner}>
        <div className={styles.name}>{name}</div>
        <div className={styles.surname}>{surname}</div>
      </div>
    </Link>
  </div>
)

export default Logo
