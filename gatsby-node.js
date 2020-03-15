const path = require('path')
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blog-post.js')
  const tagTemplate = path.resolve('./src/templates/tag.js')

  const result = await graphql(`
    {
      allContentfulBlogPost {
        nodes {
          slug
        }
      }
      allContentfulTag {
        nodes {
          slug
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allContentfulBlogPost.nodes.forEach(node => {
    createPage({
      path: `/blog/${node.slug}`,
      component: blogTemplate,
      context: {
        slug: node.slug,
      },
    })
  })
  result.data.allContentfulTag.nodes.forEach(node => {
    createPage({
      path: `/tags/${node.slug}`,
      component: tagTemplate,
      context: {
        slug: node.slug,
      },
    })
  })
}
