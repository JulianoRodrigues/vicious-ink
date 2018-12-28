import React from 'react'
import { StaticQuery } from 'gatsby'

export default ({ children, ...props }) => (
    <StaticQuery {...props}>
        {({ loading, error, data }) => {
            if (loading) return 'Loading...'
            if (error) return `Error!: ${error}`
            return children(data)
        }}
    </StaticQuery>
)
