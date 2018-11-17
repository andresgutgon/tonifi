import React from 'react'
import Img from 'gatsby-image'

import Layout from '../Layout'

const Home = (props) => (
  <Layout>
    {props.images.map((image, index) =>
      <Img
        key={index}
        fluid={image.src.childImageSharp.fluid}
      />
    )}
  </Layout>
)

export default Home
