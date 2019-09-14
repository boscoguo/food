import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as action from '../../redux/menus/actions'
import Header from '../../components/header'
import MenuItem from '../../components/menuitem'
import CreateForm from '../../components/createForm'
import { Wrapper, MenuWrapper } from './styles'

class Content extends Component {
    componentDidMount () {
        const { handleFetch, category } = this.props
        handleFetch(category)
    }
    render () {
        const { menus } = this.props
        return (
            <Wrapper>
                <MenuWrapper>
                {
                    menus.map((item, index) => <MenuItem key={index} item={item} />)
                }
                </MenuWrapper>
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menus: state.menus.toJS().list
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleFetch(category) {
            dispatch(action.menusFetch(category))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Content)