const path = require('path')

/**
 * Resolve absolute imports
 */
exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
      resolve: {
        modules: [path.resolve(__dirname, "src"), "node_modules"],
      },
    })
}

/**
 * Create artist tattoo pages 
 */


exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return new Promise((resolve, reject) => {
        const artistWorkTemplate = path.resolve('./src/templates/artist-work.js')

        //query for the tattoos
        resolve(
            graphql(`
            {
                allContentfulArtist {
                    edges {
                        node {
                            path
                            name
                        }
                    }
                }
            }
            `
            ).then((result) => {
                if (result.errors) {
                    reject(result.errors)
                }
                result.data.allContentfulArtist.edges.forEach(({ node }) => {
                    const artistName = node.name
                    createPage({
                        path: node.path,
                        component: artistWorkTemplate,
                        context: {
                            artistName
                        }
                    })
                })
            })
        )
    })
}
