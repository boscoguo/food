import React, { Component, Fragment } from 'react'
import { Button, Icon, Input, Card } from 'antd';
const { Meta } = Card;
const { Search } = Input;

class Header extends Component {
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
            </Fragment>
        )
    }
}

export default Header
