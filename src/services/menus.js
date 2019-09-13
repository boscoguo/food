import menus from '../mock/menus'
import axiosInstance from './axiosInstance'

export function getMenus() {
    process.env.__DEV__&& console.log("Menus service getMenus ")
    return new Promise(function(resolve,reject) {
        resolve(menus)
    })
}