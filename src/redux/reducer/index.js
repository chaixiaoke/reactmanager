/*
* reducer 数据处理
* */
import {type} from "../action";

const initialState = {
    menuName: '首页',
    title: 'React MS'
}

export const menuName =  (state = initialState.menuName, action) => {
    switch (action.type) {
        case type.SWITCH_MENU:
            return state = action.menuName
        default:
           return state
    }
}

export const title = (state = initialState.title, action) => {
    switch (action.type) {
        case type.CHANGE_TITLE:
            return state = action.title
        default:
           return state
    }
}
