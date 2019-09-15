import React, { Component } from 'react'
import { Typography } from 'antd'
import { Link } from 'react-router-dom'
import { Wrapper, TextWrapper } from './styles.js'
import { Radio } from 'antd'
const { Title } = Typography;
const { Text } = Typography;


class SiderBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            size: 'large',
        }
    }
    handleSizeChange = e => {
        this.setState({ size: e.target.value });
    };

    render() {
        return (
            <div>
                <Wrapper>
                    <Title className="menu" level={2}>Menu</Title>
                    <TextWrapper>
                        <Title className="menu" level={3} >Types</Title>

                        <Radio.Group className="menu-type" value={this.state.size} onChange={this.handleSizeChange}>
                            <Link to='/all'>
                                <Radio.Button className ="menu-type-item" value="large">all</Radio.Button>
                            </Link>
                            <Link  to='/cold'>
                                <Radio.Button className ="menu-type-item menu-type-other " value="default">cold</Radio.Button>
                            </Link>
                            <Link to='/hot'>
                                <Radio.Button className ="menu-type-item menu-type-other" value="small">hot</Radio.Button>
                            </Link>
                            <Link to='/seafood'>
                                <Radio.Button className ="menu-type-item menu-type-other" value="good">seafood</Radio.Button>
                            </Link>
                        </Radio.Group>
                    </TextWrapper>
                </Wrapper>

            </div >
        )
    }
}

export default SiderBar
