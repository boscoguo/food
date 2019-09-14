export const MENUS_CREATE = 'MENUS_ADD'
export const MENUS_FETCH = 'MENUS_FETCH'
export const MENUS_FETCH_SUCCESS = 'MENUS_FETCH_SUCCESS'
export const MENUS_FETCH_FAILED = 'MENUS_FETCH_FAILED'
export const MENUS_DELETE = 'MENUS_DELETE'
export const MENUS_SEARCH = 'MENUS_SEARCH'

export const menusCreate = (menu) => ({
    type: MENUS_CREATE,
    menu
})

export const menusFetch = (category) => ({
    type: MENUS_FETCH,
    category,
})

export const menusFetchSuccess = (menus) => ({
    type: MENUS_FETCH_SUCCESS,
    menus
})

export const menuFetchFailed = (error) => ({
    type: MENUS_FETCH_FAILED,
    error
})

export const menusDelete = (item) => ({
    type: MENUS_DELETE,
    item
})

export const menusSearch = (keyword) => ({
    type: MENUS_SEARCH,
    keyword
})
