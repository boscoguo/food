import { all, takeLatest, put, fork, call } from 'redux-saga/effects'
import * as Actions from './actions'
import { getMenus } from '../../services/menus'

export function* handleMenusFetch() {
    yield takeLatest(Actions.MENUS_FETCH, function*(action) {
        try {
            const menus = yield call(getMenus)
            yield put(Actions.menusFetchSuccess(menus))
        }catch(error) {
            yield put(Actions.menuFetchFailed(error))
        }
    })
}

export default function* rootSaga() {
    yield all([
        fork(handleMenusFetch)
    ])
}