const path = require("path")

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const pages = await graphql(`
    query PagesQuery {
      allPagesJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  pages.data.allPagesJson.edges.forEach(({ node: { slug } }) => {
    createPage({
      path: `/${slug}`,
      component: path.resolve(`./src/templates/photo-page.js`),
      context: {
        slug,
      },
    })
  })
}
