import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as action from '../../redux/menus/actions'
import Header from '../../components/header'
import MenuItem from '../../components/menuitem'
import { Wrapper, MenuWrapper } from './styles'

class Content extends Component {
    constructor (props) {
        super(props)
        this.state = {
            menus: props.menus.list
        }
    }
    componentDidUpdate(prevProps, prevState) {
        // only update list if the data has changed
        if (prevProps.menus !== this.props.menus) {
          this.setState({
              menus: this.props.menus.list
          })
        }
    }
    componentDidMount () {
        const { handleFetch } = this.props
        handleFetch()
    }
    handleSearch = (keyword) => {
        const { list } = this.props.menus
        const menus = list.filter(menu => menu.name.includes(keyword))
        this.setState({
            menus,
        })
    }
    render () {
        const { menus } = this.state
        if (!menus) return null
        return (
            <Wrapper>
                <Header search={this.handleSearch}/>
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
        menus: state.menus.toJS()
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleFetch() {
            dispatch(action.menusFetch())
        },
        handleDelete (index) {
            // console.log("delete")
            dispatch(action.menusDelete(index)) 
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Content)