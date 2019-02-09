import React from 'react'

import Layout from '../Layout'
import Gallery from '../Gallery'
import Header from '../Header'
import Content from '../Content'

import styles from './index.module.scss'

const Home = ({ images }) => (
  <Layout>
    <Header title='Actor y director'>
      <p className={styles.intro}>
        Lorem ipsum dolor sit amet consectetur adipiscing elit nisi diam aliquam, mollis a laoreet hac magnis posuere facilisi malesuada cursus mus curabitur, suspendisse interdum metus congue pharetra tellus fermentum lobortis sed.
      </p>
    </Header>
    <Content>
      <Gallery images={images} />
    </Content>
  </Layout>
)

export default Home
