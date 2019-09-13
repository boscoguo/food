import { all } from 'redux-saga/effects'
import menusSagas from './menus/saga'

export default function* rootSaga(getState) {
    yield all([
        menusSagas(),
    ])
}
