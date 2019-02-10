import React from 'react'
import { Link } from 'gatsby'

import Layout from '../Layout'
import Header from '../Header'

import styles from './index.module.scss'

const NotFound = () => (
  <Layout>
    <div className={styles.notFound}>
      <Header title='Págnina no encotrada'/>
      <p>Esta página no existe</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  </Layout>
)

export default NotFound
