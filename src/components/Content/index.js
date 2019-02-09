import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.scss'

const Content = ({ children }) => (
  <div className={styles.content}>
    <div className={styles.contentInner}>
      {children}
    </div>
  </div>
)

Content.propTypes = {
  children: PropTypes.node.isRequired
}

export default Content
