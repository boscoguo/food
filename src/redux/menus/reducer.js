import { Map, List } from 'immutable'
import * as Actions from './actions'

const defaultState = new Map({
    list: []
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case Actions.MENUS_FETCH_SUCCESS:
            const newState = state.set('list', action.menus)
            return newState
        case Actions.MENUS_CREATE:
            const list = state.get('list')
            list.push(action.menu)
            return state.set('list', [...list])
        case Actions.MENUS_DELETE:
            const deleteList = state.get('list').filter(menu => menu.name !== action.item.name)
            return state.set('list', deleteList)
        default:
            return state
    }
}
