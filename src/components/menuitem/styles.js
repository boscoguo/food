import styled from 'styled-components'

export const Wrapper = styled.div`
   .menu-item {
        position: relative;
        margin-left: 50px;
        .menu-item-img {         
            width: 240px;
            height: 300px;
        }
        .menu-item-textTitle {
            font-weight: bold; 
            display: block; 
            lineHeight: 2;
            color:#B7EFF6;
        }
        .menu-item-textWord {
            display: block; 
            lineHeight: 1;
            color:#B7EFF6;
            margin-bottom:15px;
        }
   } 
   .menu-meta {
      text-align: center;
   }
   
`

export const TextWrapper = styled.div`
      width: 100%; 
      height: 40%; 
      padding-left:8px;
      background: #0099CB; 
      position: absolute; 
      bottom: 0; 
      display:none
      &.show {
         display:block;
      }
`
