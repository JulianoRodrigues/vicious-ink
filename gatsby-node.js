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

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return new Promise((resolve, reject) => {
        const tattooPhotoTemplate = path.resolve('./src/templates/artist.js')

        //query for the tattoos
        resolve(
            graphql(`
                {
                    vicious {
                        artists {
                            name
                            id
                            path
                            styles
                            photo {
                                fileName
                                url
                            }
                            tattoos {
                                artist {
                                    name
                                }
                                photo {
                                    id
                                    url
                                }
                            }
                        }
                    }
                }
            `
            ).then((result) => {
                if (result.errors) {
                    reject(result.errors)
                }
                result.data.vicious.artists.forEach((artist) => {
                    const path = artist.path
                    createPage({
                        path: path,
                        component: tattooPhotoTemplate
                    })
                })
            })
        )
    })
}