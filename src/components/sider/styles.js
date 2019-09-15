import styled from 'styled-components'

export const Wrapper = styled.div`
    margin-left:10px;
    padding-top:10px;
    .menu {
        color: #F9FBE2;
    }
`

export const TextWrapper = styled.div`
    .menu-type {
        display: flex; 
        flex-direction: column; 
        .menu-type-item {
            border:none; 
            background: #00152A; 
            font-weight: bold;
        }
        .menu-type-other {
            color:white;
        }
    }
`

