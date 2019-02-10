import React from 'react'

import Layout from '../Layout'
import Gallery from '../Gallery'
import Header from '../Header'
import Content from '../Content'

import styles from './index.module.scss'

const Home = ({ images, pathname, pageTitle }) => {
  return (
    <Layout
      metaImage={images[0].src.childImageSharp.fluid.src}
      pathname={pathname}
      pageTitle={pageTitle}
   >
      <Header title='Actor y director'>
        <p className={styles.intro}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit nisi diam aliquam, mollis a laoreet hac magnis posuere facilisi.
        </p>
      </Header>
      <Content>
        <Gallery images={images} />
      </Content>
    </Layout>
  )
}

export default Home
