import React, { Component } from 'react'
import { Card, Typography } from 'antd'
import { Wrapper } from './styles'

const { Meta } = Card
const { Text } = Typography

export default class MenuItem extends Component {
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
                    {/* <Icon
                                        type="close-circle"
                                        style={{ position: "absolute", top: 10, right: 10, color: "white" }}
                                        onClick = {this.props.handleDelete}
                                    /> */}
                </div>
                <Meta style={{ textAlign: "center" }} title={item.name} />
            </Wrapper>
        )
    }
}