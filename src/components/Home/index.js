import React from 'react'

import Layout from '../Layout'
import Gallery from '../Gallery'

const Home = ({ images }) => (
  <Layout>
    <Gallery images={images} />
  </Layout>
)

export default Home
