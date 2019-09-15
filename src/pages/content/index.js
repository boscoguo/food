import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as action from '../../redux/menus/actions'
import Header from '../../components/header'
import MenuItem from '../../components/menuitem'
import CreateForm from '../../components/createForm'
import { Wrapper, MenuWrapper } from './styles'

class Content extends Component {
    constructor (props) {
        super(props)
        this.state = {
            menus: props.menus.list || [],
            createFormVisible: false,
        }
    }
    componentDidUpdate(prevProps, prevState) {
        // only update list if the data has changed
        if (prevProps.menus !== this.props.menus || prevProps.menus.length !== this.props.menus.length) {
          this.setState({
              menus: this.props.menus
          })
        }
    }
    componentDidMount () {
        const { handleFetch } = this.props
        handleFetch()
    }
    handleSearch = (keyword) => {
        const { menus } = this.props
        if (!keyword) {
            this.setState({
                menus,
            })
            return
        }
        const newMenus = menus.filter(menu => menu.name.includes(keyword))
        this.setState({
            menus: newMenus,
        })
    }
    handleCreate = () => {
        const form = this.form
        form.validateFields((err, values) => {
            if (err) {
                return
            }
            const menu = form.getFieldsValue()
            console.log('menu', menu)
            this.props.handleCreate(menu)
            this.handleCancel()
        })
    }
    handleCancel = () => {
        this.setState({
            createFormVisible: false,
        })
    }
    // control the status of modal
    handleCreateClick = () => {
        this.setState({
            createFormVisible: true,
        })
    }
    render () {
        console.log('menus', this.props.menus)
        const { menus, createFormVisible } = this.state
        return (
            <Wrapper>
                <Header search={this.handleSearch} handleCreateClick={this.handleCreateClick} />
                <MenuWrapper>
                {
                    menus.map((item, index) => <MenuItem key={index} item={item} />)
                }
                </MenuWrapper>
                <CreateForm
                    ref={form => this.form = form}
                    visible={createFormVisible}
                    onCreate={this.handleCreate}
                    onCancel={this.handleCancel}
                />
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
        handleFetch() {
            dispatch(action.menusFetch())
        },
        handleDelete (index) {
            // console.log("delete")
            dispatch(action.menusDelete(index)) 
        },
        handleCreate (menu) {
            dispatch(action.menusCreate(menu))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Content)