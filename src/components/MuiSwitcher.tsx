import {FC} from 'react'
import Switch from '@mui/material/Switch'
import {FormControlLabel, FormGroup} from '@mui/material'
import {useSelector, useDispatch} from 'react-redux'
import {RootState} from '@/GlobalRedux/store'
import {switchColorScheme, ColorSchemes} from './SwitchColorScheme'
import {setCustomScheme} from '@/GlobalRedux/Entities/colorScheme'

const MuiSwitcher: FC<{}> = () => {
  const dispatch = useDispatch()
  const changeEvent = () => {
    switchColorScheme(dispatch, setCustomScheme)
  }
  const colorScheme = useSelector((state: RootState) => state.colorScheme.scheme)
  let Label = undefined
  if (colorScheme === ColorSchemes.Dark) {
    Label = <FormControlLabel control={<Switch onChange={changeEvent} checked={true} />} label={'Dark on'} />
  }
  if (colorScheme === ColorSchemes.Light) {
    Label = <FormControlLabel control={<Switch onChange={changeEvent} checked={false} />} label={'Dark off'} />
  }
  return <FormGroup>
    {Label}
  </FormGroup>
}

export default MuiSwitcher