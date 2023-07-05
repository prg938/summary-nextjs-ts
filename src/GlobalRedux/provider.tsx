import {Provider as ReduxProvider} from "react-redux"
import {store} from './store'

export function Provider({children}: {children: any}) {
  return <ReduxProvider store={store}>
    {children}
  </ReduxProvider>
}