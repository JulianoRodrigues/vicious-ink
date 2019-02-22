const path = require('path')

/**
 * Resolve absolute imports
 */
exports.onCreateWebpackConfig = ({
    stage,
    getConfig,
    rules,
    loaders,
    actions
}) => {
    actions.setWebpackConfig({
      resolve: {
        modules: [path.resolve(__dirname, "src"), "node_modules"],
      },
    })
}

/**
 * Create artist tattoo pages 
 */


/** exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return new Promise((resolve, reject) => {
        const tattooPhotoTemplate = path.resolve('./src/templates/artist.js')

        //query for the tattoos
        resolve(
            graphql(`
            {
                allContentfulArtist {
                    edges {
                        node {
                            path
                            tattoos {
                                photo {
                                    id
                                }
                            }
                        }
                    }
                }
            }
            `
            ).then((result) => {
                console.log(result);
                if (result.errors) {
                    reject(result.errors)
                }
                result.data.allContentfulArtist.edges.forEach(({ node }) => {
                    console.log(node);
                })
            })
        )
    })
}*/