import axios from 'axios'

export const getList = () => {
	return (dispatch) => {
         axios.get('/api/foodList.json').then((res) => {
         	   const data = res.data;
         	   console.log(data)
               dispatch(changeList(data))
         }).catch(() => {
         	console.log("error")
         })
	}
}

export const changeList = (data)=> ({
    type:"CHANGE_LIST",
    data:data
})

export const getColdList = () => {
	return (dispatch) => {
         axios.get('/api/foodList.json').then((res) => {
         	   const data = res.data;
         	   console.log(data)
               dispatch(changeColdList(data))
         }).catch(() => {
         	console.log("error")
         })
	}
}
export const changeColdList = (data)=> ({
    type:"CHANGE_COLD_LIST",
    data:data
})

export const getHotList = () => {
	return (dispatch) => {
         axios.get('/api/foodList.json').then((res) => {
         	   const data = res.data;
         	   console.log(data)
               dispatch(changeHotList(data))
         }).catch(() => {
         	console.log("error")
         })
	}
}
export const changeHotList = (data)=> ({
    type:"CHANGE_Hot_LIST",
    data:data
})

export const getSeaFoodList = () => {
	return (dispatch) => {
         axios.get('/api/foodList.json').then((res) => {
         	   const data = res.data;
         	   console.log(data)
               dispatch(changeSeaFoodList(data))
         }).catch(() => {
         	console.log("error")
         })
	}
}
export const changeSeaFoodList = (data)=> ({
    type:"CHANGE_SEAFOOD_LIST",
    data:data
})