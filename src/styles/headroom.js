import styled from 'styled-components'
import Headroom from 'react-headroom'

export const headroom = styled(Headroom)`
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    &--unfixed {
        position: relative;
        transform: translateY(0);
    }
    &--scrolled {
        transition: transform 200ms ease-in-out;
    }
    &--unpinned {
        position: fixed;
        transform: translateY(-100%);
    }
    &--pinned {
        position: fixed;
        transform: translateY(0%);
    }
`
