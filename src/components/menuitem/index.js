import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Typography, Icon } from 'antd'

import * as action from '../../redux/menus/actions'

import { Wrapper,TextWrapper } from './styles'

const { Meta } = Card
const { Text } = Typography

class MenuItem extends Component {
    constructor (props) {
        super(props)
        this.state = {
            show: true
        }
     }
    onDelete = () => {
        const { item, handleDelete } = this.props
        handleDelete(item)
    }
    showDetail = () => {
        this.setState({
            show: false
        })
    }
    removeDetail = () => {
        this.setState({
            show: true
        })
    }
    render() {
        const { item } = this.props
        return (
            <Wrapper>
                <div className="menu-item" 
                     onMouseEnter = {this.showDetail} 
                     onMouseLeave = {this.removeDetail}
                >
                    <img alt="example" className= "menu-item-img" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                    <TextWrapper className= {this.state.show ? "" : "show"} >
                        <Text className="menu-item-textTitle">Description:</Text>
                        <Text className="menu-item-textWord">{item.description}</Text>
                        <Text className="menu-item-textTitle">Type:</Text>
                        <Text className="menu-item-textWord">{item.type}</Text>
                    </TextWrapper>
                    <Icon
                        type="close-circle"
                        className = "menu-item-icon"
                        onClick = {this.onDelete}
                    />
                </div>
                {/* <Meta className = "menu-meta" title={item.name} /> */}
                <p style={{textAlign:"center", color:"#9C9FA3"}}>{item.name}</p>
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleDelete (item) {
            // console.log("delete")
            dispatch(action.menusDelete(item)) 
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem)
