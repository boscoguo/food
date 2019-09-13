import { all, takeLatest, put, fork, call } from 'redux-saga'
import * as Actions from './actions'
import { getMenus } from '../../services/menus'

export function* handleMenusFetch() {
    yield takeLatest(Actions.MENUS_FETCH, function(action) {
        try {
            const menus = yield call(getMenus)
            process.env.__DEV__&& console.log('SAGA MENUS_FETCH',menus)
            yield put(Actions.menusFetchSuccess(menus))
        }catch(error) {
            yield put(Actions.menuFetchFailed(error))
        }
    })
}

export default fuction* rootSaga() {
    yield all([
        fork(handleMenusFetch)
    ])
}