import type {RootState} from '@/GlobalRedux/store'
import {useSelector} from 'react-redux'
import {ColorSchemes} from './SwitchColorScheme'
import {useEffect, useState} from 'react'

export const useColorScheme = () => {
  const [isHydrated, setIsHydrated] = useState(false)
  const colorScheme = useSelector((state: RootState) => state.colorScheme.scheme)
  const themeText = {theme: ColorSchemes.Text} as const
  const themeLight = {theme: ColorSchemes.Light} as const
  const themeDark = {theme: ColorSchemes.Dark} as const
  let scheme
  if (colorScheme === ColorSchemes.Text) scheme = themeText
  if (colorScheme === ColorSchemes.Light) scheme = themeLight
  if (colorScheme === ColorSchemes.Dark) scheme = themeDark
  // Get real {theme} using useEffect
  useEffect(() => {
    setIsHydrated(true)
  }, [])
  // First init {theme: ColorSchemes.Text}. Because it should match server-render
  return isHydrated ? scheme : {theme: ColorSchemes.Text}
}