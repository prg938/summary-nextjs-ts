
import {ActionCreatorWithPayload, AnyAction, Dispatch} from '@reduxjs/toolkit'

export enum ColorSchemes {Light = 'light', Dark = 'dark', Text = 'text'}

type D = Dispatch<AnyAction>
type A = ActionCreatorWithPayload<any, "colorScheme/setCustomScheme">

const switchScheme = (
  scheme: ColorSchemes,
  root: HTMLElement,
  dispatch: D,
  action: A
  ) => {
    root.dataset.colorScheme = scheme
    localStorage.setItem('colorScheme', scheme)
    dispatch(action(scheme))
    // @ts-ignore
    if (typeof DISQUS !== "undefined") DISQUS.reset({reload: true})
}

export const switchColorScheme = (dispatch: D, action: A) => {
  const root = document.querySelector(':root') as HTMLElement
  const colorSchemeFromLocalStorage = localStorage.getItem('colorScheme')
  switch(colorSchemeFromLocalStorage) {
    case ColorSchemes.Light:
      switchScheme(ColorSchemes.Dark, root, dispatch, action)
      break
    case ColorSchemes.Dark: 
      switchScheme(ColorSchemes.Light, root, dispatch, action)
      break
  }
}