/*
* action 类型
* */
export const type = {
    SWITCH_MENU: 'SWITCH_MENU',
    CHANGE_TITLE: 'CHANGE_TITLE'
}

/**
 * Action Creator Action生成器
 */
export function switchMenu(menuName) {
    return {
        type: type.SWITCH_MENU,
        menuName
    }
}
export function changeTitle(title){
    return {
        type: type.CHANGE_TITLE,
        title
    }
}
