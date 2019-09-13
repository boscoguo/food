import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreator.js'
import { Typography } from 'antd';
import 'antd/dist/antd.css'
import { Link } from 'react-router-dom'
const { Title } = Typography;
const { Text } = Typography;

class SiderItem extends Component {
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
                            onClick={this.props.showAll}
                        >All
                    </Text>
                    </ Link>
                    <Link to='/cold'>
                        <Text
                            strong
                            style={{ display: "block", color: "#999" }}
                            onClick={this.props.showCold}
                        >Cold</Text>
                    </Link>
                    <Link to="/hot">
                        <Text
                            strong
                            style={{ display: "block", color: "#999" }}
                            onClick={this.props.showHot}
                        >Hot</Text>
                    </Link>
                    <Link to="/seafood">
                        <Text
                            strong
                            style={{ display: "block", color: "#999" }}
                            onClick={this.props.showSeafood}
                        >Sea food</Text>
                    </Link>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        // list: state.header.list
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        showAll() {
            dispatch(actionCreators.getList())
        },
        showCold() {
            dispatch(actionCreators.getColdList())
        },
        showHot() {
            dispatch(actionCreators.getHotList())
        },
        showSeafood() {
            dispatch(actionCreators.getSeaFoodList())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SiderItem)