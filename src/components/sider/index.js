import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Typography } from 'antd'
import { Link } from 'react-router-dom'
import { Wrapper, TextWrapper } from './styles.js'
const { Title } = Typography;
const { Text } = Typography;


class SiderBar extends Component {
    
    render() {
        return (
            <div>
                <Wrapper>
                    <Title className="menu" level={2}>Menu</Title>
                    <TextWrapper>
                        <Title className="menu" level={3} >Types</Title>
                        <Link to='/all'>
                            <Text
                                strong
                                className= "active text"
                                onClick = {this.addClass}
                            >All</Text>
                        </ Link>
                        <Link to='/cold'>
                            <Text
                                strong
                                className="text"
                                onClick = {this.addClass}
                            >Cold</Text>
                        </Link>
                        <Link to="/hot">
                            <Text
                                strong
                                className="text"
                            >Hot</Text>
                        </Link>
                        <Link to="/seafood">
                            <Text
                                strong
                                className="text"
                            >Sea food</Text>
                        </Link>
                    </TextWrapper>
                </Wrapper>

            </div>
        )
    }
}

export default SiderBar
