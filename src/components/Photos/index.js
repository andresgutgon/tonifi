import React from 'react'

import Gallery from '../Gallery'
import Header from '../Header'
import Content from '../Content'

import styles from './index.module.scss'

const Photos = ({ images, title, description }) => {
  return (
    <>
      <Header title={title}>
        <p className={styles.intro}>{description}</p>
      </Header>
      <Content>
        <Gallery images={images} />
      </Content>
    </>
  )
}

export default Photos
