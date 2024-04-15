/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useReducer, useContext, useMemo } from 'react'
import Firestore from '../handlers/firestore'

const { readDocs } = Firestore

export const Context = createContext()

const photos = []
const initialState = {
  items: photos,
  placeholders: photos,
  count: photos.length,
  inputs: { title: null, file: null, path: null },
  isCollapsed: false,
}

const handleOnChange = (state, e) => {
  switch (e.target.name) {
    case 'file':
      return {
        ...state.inputs,
        file: e.target.files[0],
        path: URL.createObjectURL(e.target.files[0]),
      }
    case 'title':
      return {
        ...state.inputs,
        title: e.target.value,
      }
    case 'order':
      return {
        ...state.inputs,
        order: e.target.value,
      }
    case 'description':
      return {
        ...state.inputs,
        description: e.target.value,
      }
    default:
      return {
        ...state.inputs,
      }
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'setItem':
      return {
        ...state,
        items: [state.inputs, ...state.items],
        placeholders: [state.inputs, ...state.items],
        count: state.items.length + 1,
        inputs: { title: null, file: null, path: null },
      }
    case 'filterItems':
      return {
        ...state,
        items: action.payload.results,
      }
    case 'setItems':
      return {
        ...state,
        items: action.payload.items,
        placeholders: action.payload.items,
      }
    case 'setInputs':
      return { ...state, inputs: handleOnChange(state, action.payload.value) }
    case 'collapse':
      return { ...state, isCollapsed: action.payload.bool }
    default:
      return state
  }
}

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const read = async () => {
    const items = await readDocs('stocks')
    dispatch({ type: 'setItems', payload: { items } })
  }
  const filterItems = input => {
    if (input === '' || !!input) {
      dispatch({ type: 'setItems', payload: { items: state.placeholders } })
    }
    let list = state.placeholders.flat()
    let results = list.filter(item => {
      const name = item.title.toLowerCase()
      const searchInput = input.toLowerCase()
      return name.indexOf(searchInput) > -1
    })
    dispatch({ type: 'filterItems', payload: { results } })
  }

  const value = useMemo(() => {
    return { state, dispatch, read, filterItems }
  }, [state, dispatch, read, filterItems])

  return <Context.Provider value={value}>{children}</Context.Provider>
}
export const useFireStoreContext = () => {
  return useContext(Context)
}

export default Provider
