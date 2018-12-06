/**import { createRemoteFileNode } from 'gatsby-source-filesystem'

exports.onCreateNode = ({ node, actions, store, cache }) => {
    const { createNode } = actions
    return new Promise((resolve, reject) => {
        // download image and create a File node
        // with gatsby-transformer-sharp and gatsby-plugin-sharp
        // that node will become an ImageSharp
        const fileNode = createRemoteFileNode({
            url: node.url,
            store,
            cache,
            createNode,
            createNodeId: id => `image-sharp-${id}`
        })

        if (fileNode) {
            // link File node to DogImage node
            // at field image
            node.image___NODE = fileNode.id
        }
    })
}
*/
