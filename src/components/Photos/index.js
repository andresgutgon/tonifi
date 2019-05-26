import React from 'react'

import Layout from '../Layout'
import Gallery from '../Gallery'
import Header from '../Header'
import Content from '../Content'

import styles from './index.module.scss'

const Photos = ({ images, pathname, pageTitle }) => {
  return (
    <Layout
      metaImage={images[0].src.childImageSharp.fluid.src}
      pathname={pathname}
      pageTitle={pageTitle}
    >
      <Header title='Galeria de imágenes'>
        <p className={styles.intro}>
          Fotos de espectáculos y actuaciones
        </p>
      </Header>
      <Content>
        <Gallery images={images} />
      </Content>
    </Layout>
  )
}

export default Photos
