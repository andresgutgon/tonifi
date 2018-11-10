import React from 'react'
import Img from 'gatsby-image'

import Layout from '../Layout'

/* <Link to="/page-2/">Go to page 2</Link> */
const Home = (props) => (
  <Layout>
    <Img fluid={props.data.one.childImageSharp.fluid} />
    <Img fluid={props.data.two.childImageSharp.fluid} />
    <Img fluid={props.data.three.childImageSharp.fluid} />
    <Img fluid={props.data.four.childImageSharp.fluid} />
  </Layout>
)

export default Home
