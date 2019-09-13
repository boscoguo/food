import { Map, List } from 'immutable'
import * as Actions from './actions'

const defaultState = new Map({
    list: new List()
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case Actions.MENUS_FETCH:
            return state.set('list', [...action.data])
        case Actions.MENUS_CREATE:
            const list = state.list.push(action.menu)
            return state.set('list', list)
        case Actions.MENUS_DELETE:
            return state.set('list', state.list.splice(action.id, 1))
        default:
            return state
    }
}
