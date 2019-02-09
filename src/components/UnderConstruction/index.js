import React from 'react'
import { Link } from 'gatsby'

import Layout from '../Layout'
import styles from './index.module.scss'

const UnderConstruction = () => (
  <Layout>
    <div className={styles.under}>
      <h2>En construction</h2>
      <p>Todavia no esta esta seccion.</p>
      <Link to="/">Volver</Link>
    </div>
  </Layout>
)

export default UnderConstruction
