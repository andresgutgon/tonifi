import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.scss'

const Header = ({ children, title }) => (
  <div className={styles.header}>
    <h1 className={styles.title}>{title}</h1>
    <div className={styles.content}>
      {children}
    </div>
  </div>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Header
