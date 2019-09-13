import React, { Component, Fragment } from 'react'
import { Button, Icon, Input, Card } from 'antd'

import { Wrapper } from './styles'

const { Meta } = Card;
const { Search } = Input;

class Header extends Component {
    handleSearch = (keyword) => {
        const { search } = this.props
        search(keyword)
    }
    render() {
        const { search } = this.props
        return (
            <Wrapper>
                <div>
                    <Search
                        placeholder={this.props.inputValue}
                        onSearch={this.handleSearch}
                        style={{ width: 300 }}
                        onFocus={this.props.handleInputValue}
                    />
                </div>
                <div>
                    <Button type="primary" onClick={this.props.showDrawer}>
                        <Icon type="plus" /> New dishes
                        </Button>
                </div>
            </Wrapper>
        )
    }
}

export default Header
