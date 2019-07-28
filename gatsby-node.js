const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage === 'develop') {
    actions.setWebpackConfig({
      devtool: 'eval-source-map'
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              id
              template
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const pages = result.data.allMarkdownRemark.edges

    pages.forEach(edge =>{
      const id = edge.node.id;
      createPage({
        path: edge.node.frontmatter.path,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.template)}.js`
        ),
        // additional data can be passed via context
        context: { id }
      })
    })
  })
}
