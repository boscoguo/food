export const MENUS_CREATE = 'MENUS_ADD'
export const MENUS_FETCH = 'MENUS_FETCH'
export const MENUS_DELETE = 'MENUS_DELETE'
export const MENUS_SEARCH = 'MENUS_SEARCH'

export const menusCreate = (menu) => ({
    type: MENUS_CREATE,
    menu
})

export const menusFetch = () => ({
    type: MENUS_FETCH
})

export const menusDelete = (id) => ({
    type: MENUS_DELETE,
    id
})

export const menusSearch = (keyword) => ({
    type: MENUS_SEARCH,
    keyword
})
