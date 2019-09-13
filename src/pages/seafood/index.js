import React, { Component } from 'react'
import { connect } from 'react-redux'
// import * as actionCreators from'./store/actionCreators'
import { Card } from 'antd';
import { Typography } from 'antd';
// import { stat } from 'fs';
const { Meta } = Card;
const { Text } = Typography;


class ContentSeafood extends Component {
    render() {
        return (
                
            <div style={{ display: "flex" }}>
                {
                    this.props.list.map((item, index) => {
                        return (
                            <div key={index}>
                                <div style={{ position: "relative", marginLeft: "50px" }}>
                                    <img alt="example" style={{ width: 240, height: 300 }} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                    <div style={{ width: "100%", height: "40%", background: "pink", position: "absolute", bottom: 0 }}>
                                        <Text style={{ fontWeight: "bold", display: "block",lineHeight:2 }}>Description:</Text>
                                        <Text style={{ display: "block",lineHeight:1 }}>{item.description}</Text>
                                        <Text style={{ fontWeight: "bold", display: "block",lineHeight:2 }}>Type:</Text>
                                        <Text style={{ display: "block",lineHeight:1 }}>{item.type}</Text>
                                    </div>
                                    {/* <Icon
                                        type="close-circle"
                                        style={{ position: "absolute", top: 10, right: 10, color: "white" }}
                                        onClick = {this.props.handleDelete}
                                    /> */}
                                </div>
                                <Meta style={{ textAlign: "center" }} title={item.name} />
                            </div>
                        )

                    })
                }
            </div>


        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.sider.list
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleDelete (index) {
            // console.log("delete")
            // dispatch(actionCreators.getDeleteAction(index))
            
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContentSeafood)