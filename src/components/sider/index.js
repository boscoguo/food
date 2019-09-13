import React, { Component } from 'react'
import { Typography } from 'antd';
import { Link } from 'react-router-dom'
const { Title } = Typography;
const { Text } = Typography;

class SiderBar extends Component {
    render() {
        return (
            <div>
                <Link to="/">
                    <Title style={{ color: "#fff" }} level={2}>Menu</Title>
                </Link>
                <div>
                    <Title style={{ color: "#fff" }} level={3} >Types</Title>
                    <Link to='/all'>
                        <Text
                            // strong
                            style={{ color: "blue", display: "block" }}
                        >All
                    </Text>
                    </ Link>
                    <Link to='/cold'>
                        <Text
                            strong
                            style={{ display: "block", color: "#999" }}
                        >Cold</Text>
                    </Link>
                    <Link to="/hot">
                        <Text
                            strong
                            style={{ display: "block", color: "#999" }}
                        >Hot</Text>
                    </Link>
                    <Link to="/seafood">
                        <Text
                            strong
                            style={{ display: "block", color: "#999" }}
                        >Sea food</Text>
                    </Link>
                </div>
            </div>
        )
    }
}

export default SiderBar