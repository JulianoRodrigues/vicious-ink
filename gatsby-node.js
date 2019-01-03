const fetch = require('node-fetch')
const { createRemoteFileNode } = require('gatsby-source-filesystem')

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
            'https://api-euwest.graphcms.com/v1/cjoefozni7i7i01ght4oymxzy/master?query={images{id,photo{id,url,fileName}}}'
        ).then(result => result.json()),
        fetch(
            'https://api-euwest.graphcms.com/v1/cjoefozni7i7i01ght4oymxzy/master?query={stores{id,description,photo{id,url,fileName}}}'
        ).then(result => result.json())
    ])

    for (let res in response) {
        let value = response[res].data
        for (let val in value) {
            let newValue = value[val]
            newValue.forEach(res => {
                const nodeData = processImage(res.photo)
                createNode(nodeData)
            })
        }
    }

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
}
