import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    objectId: 10245,
    apiData: {}
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (state, action) => {
            return {...state, apiData : action.payload}
        },
        clearData: () => {
            return initialState
        },
        inputId: (state, action) => {
            return { ...state, objectId: action.payload }
        },
        incrementId: (state) => {
            return { ...state, objectId: state.objectId + 1 }
        },
        decrementId: (state) => {
            return { ...state, objectId: state.objectId - 1 }
        }
    }
})

export const fetchData = () => {
    const fetchDataThunk = async (dispatch, getState) => {
        state = getState()
        const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${state.data.objectId}`)
        const jsonData = await response.json()
        dispatch(setData(jsonData))
    }
    return fetchDataThunk
}
export const { setData, clearData, incrementId, decrementId, inputId } = dataSlice.actions


export default dataSlice.reducer