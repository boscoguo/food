import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Input,Button, Icon } from 'antd'
// import * as actionCreators from './store/actionCreators'
// import { Typography } from 'antd';
import { Card } from 'antd';
// import { Icon } from 'antd';
const { Meta } = Card;
const { Search } = Input;



class All extends Component {
    render() {
        return (
            <Fragment>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                        <Search
                            placeholder={this.props.inputValue}
                            onSearch={this.props.searchDishes}
                            style={{ width: 300 }}
                            onFocus={this.props.handleInputValue}
                        />
                    </div>
                    <div>
                        <Button type="primary" onClick={this.props.showDrawer}>
                            <Icon type="plus" /> New dishes
                        </Button>
                    </div>
                </div>
                <div>
                    <div style={{ display: "flex" }}>
                        {
                           this.props.list.map((item, index) => {
                                return (
                                    <div key={index} style={{ marginRight: "50px"}}>
                                        <div style={{ position: "relative" }}>
                                            <img alt="example" style={{ width: 240, height: 300 }} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                            <div style={{ width: "100%", height: "40%", background: "pink", position: "absolute", bottom: 0 }}>
                                                <p style={{ fontWeight: "bold", marginBottom: 0, lineHeight: 2 }}>Description:</p>
                                                <p style={{ marginBottom: 0, lineHeight: 1 }}>{item.description}</p>
                                                <p style={{ fontWeight: "bold", marginBottom: 0, lineHeight: 2 }}>Type:</p>
                                                <p style={{ marginBottom: 0, lineHeight: 1 }}>{item.type}</p>
                                            </div>
                                            <Icon
                                                type="close-circle"
                                                style={{ position: "absolute", top: 10, right: 10, color: "white" }}
                                                onClick={()=>{this.props.handleDelete(index)}}
                                            />
                                        </div>
                                        <Meta style={{ textAlign: "center" }} title={item.name} />
                                    </div>
                                )

                            })
                        }
                    </div>

                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.menus.list
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        searchDishes(value) {
            //  dispatch(actionCreators.searchFoods(value))
        },
        handleInputValue(e) {
            // dispatch(actionCreators.chageInputValue())
        },
        showDrawer() {
            // dispatch(actionCreators.getList())
        },
        handleDelete(index) {
            // console.log("delete")
            // dispatch(actionCreators.getDeleteAction(index))

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(All)