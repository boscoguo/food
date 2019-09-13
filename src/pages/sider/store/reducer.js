const defaultState = {
    test:"x",
    list: []
}

export default (state = defaultState, action) => {
    if (action.type==="CHANGE_LIST") {
        // console.log(action.data)
        // copy a new one so that the original one can not be modified
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = [...action.data]
        console.log(newState.list)
        return newState
    }
    if (action.type==="CHANGE_COLD_LIST") {
        // console.log(action.data)
        const newState = JSON.parse(JSON.stringify(state))
        // let coldFood;
        action.data.map((item,index) => {
            if (item.type === "cold") {
                newState.list.length=0;
                newState.list.push(action.data[index])
            }
        })
        // newState.list = [...action.data]
        // console.log(newState.list)
        return newState
    }
    if (action.type==="CHANGE_Hot_LIST") {
        // console.log(action.data)
        const newState = JSON.parse(JSON.stringify(state))
        
        action.data.map((item,index) => {
            if (item.type === "hot") {
                newState.list.length=0;
                newState.list.push(action.data[index])
            }
        })
        
        return newState
    }
    if (action.type==="CHANGE_SEAFOOD_LIST") {
        // console.log(action.data)
        const newState = JSON.parse(JSON.stringify(state))
        
        action.data.map((item,index) => {
            if (item.type === "seafood") {
                newState.list.length=0;
                newState.list.push(action.data[index])
            }
        })
        
        return newState
    }
    return state
}