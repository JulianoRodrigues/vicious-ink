/**const fetch = require('node-fetch')
const { createRemoteFileNode } = require('gatsby-source-filesystem')

const assetsTypes = {
    ASSETS: 'assets',
    ARTISTS: 'artists'
}

exports.sourceNodes = async ({
    actions,
    createNodeId,
    createContentDigest
}) => {
    const { createNode } = actions

    const processImage = image => {
        const nodeId = createNodeId(`image-${image.id}`)
        const nodeContent = JSON.stringify(image)

        const nodeMeta = {
            id: nodeId,
            parent: null,
            children: [],
            internal: {
                type: 'Image',
                content: nodeContent,
                contentDigest: createContentDigest(image)
            }
        }

        const node = Object.assign({}, image, nodeMeta)
        return node
    }

    const response = await Promise.all([
        fetch(
            'https://api-euwest.graphcms.com/v1/cjoefozni7i7i01ght4oymxzy/master?query={artists{id,photo{id,url}}}'
        ).then(result => result.json()),
        fetch(
            'https://api-euwest.graphcms.com/v1/cjoefozni7i7i01ght4oymxzy/master?query={assets{id,fileName,url}}'
        ).then(result => result.json())
    ])

    response.forEach(res => {
        const nodeData = processImage(res)
        createNode(nodeData)
    })

    return
}

exports.onCreateNode = async props => {
    if (!props.node || props.node.internal.type !== 'Image') {
        return
    }

    const { node, actions, store, cache } = props
    const { createNode } = actions

    const fileNode = await createRemoteFileNode({
        url: node.url,
        store,
        cache,
        createNode,
        createNodeId: id => `image-${node.id}`
    })

    if (fileNode) {
        node.image___NODE = fileNode.id
    }
}*/