import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Typography, Icon } from 'antd'

import * as action from '../../redux/menus/actions'

import { Wrapper } from './styles'

const { Meta } = Card
const { Text } = Typography

class MenuItem extends Component {
    onDelete = () => {
        const { item, handleDelete } = this.props
        handleDelete(item)
    }
    render() {
        const { item } = this.props
        return (
            <Wrapper>
                <div className="menu-item">
                    <img alt="example" style={{ width: 240, height: 300 }} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                    <div style={{ width: "100%", height: "40%", background: "pink", position: "absolute", bottom: 0 }}>
                        <Text style={{ fontWeight: "bold", display: "block", lineHeight: 2 }}>Description:</Text>
                        <Text style={{ display: "block", lineHeight: 1 }}>{item.description}</Text>
                        <Text style={{ fontWeight: "bold", display: "block", lineHeight: 2 }}>Type:</Text>
                        <Text style={{ display: "block", lineHeight: 1 }}>{item.type}</Text>
                    </div>
                    <Icon
                        type="close-circle"
                        style={{ position: "absolute", top: 10, right: 10, color: "white" }}
                        onClick = {this.onDelete}
                    />
                </div>
                <Meta style={{ textAlign: "center" }} title={item.name} />
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
