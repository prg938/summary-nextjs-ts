
import {FunctionComponent, PropsWithChildren} from "react"
import styles from '@/styles/Layout.module.scss'
import Header from './Header'
import Footer from './Footer'

const Layout: FunctionComponent<PropsWithChildren<{}>> = ({children}) => {
  return (
    <div>
      <Header />
      <div className={styles.layout}>
        {children}
        <Footer />
      </div>
    </div>
  )
}
export default Layout