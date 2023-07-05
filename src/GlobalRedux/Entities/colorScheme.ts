import {createSlice} from '@reduxjs/toolkit'

export interface ColorSchemeState {
  scheme: string
}

const defineInitialState = (): ColorSchemeState => {
  let scheme = 'text'
  try {
    // Next(Server)
    // ReferenceError: localStorage is not defined
    scheme = localStorage.getItem('colorScheme') as string
  }
  catch (error) {}
  return {scheme}
}

export const colorSchemeSlice = createSlice({
  name: 'colorScheme',
  initialState: defineInitialState(),
  reducers: {
    setDarkScheme: state => { state.scheme = 'dark' },
    setLightScheme: state => { state.scheme = 'light' },
    setCustomScheme: (state, action) => { state.scheme = action.payload }
  }
})

export const {setDarkScheme, setLightScheme, setCustomScheme} = colorSchemeSlice.actions
export default colorSchemeSlice.reducer