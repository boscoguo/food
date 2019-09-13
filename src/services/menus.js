import menus from '../mock/menus'

export function getMenus() {
    console.log("Menus service getMenus ")
    return new Promise(function(resolve,reject) {
        resolve(menus)
    })
}