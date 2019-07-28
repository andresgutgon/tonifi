import React from 'react'
import { Link } from 'gatsby'

import Header from '../Header'

import styles from './index.module.scss'

const NotFound = () => (
  <div className={styles.notFound}>
    <Header title='Págnina no encotrada'/>
    <p>Esta página no existe</p>
    <Link to="/">Volver al inicio</Link>
  </div>
)

export default NotFound
