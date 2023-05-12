
import styles from '@/styles/Header.module.scss'
import Link from 'next/link'
import {useRouter, withRouter} from 'next/router'

export default () => {
  const router = useRouter()
  const {pathname} = router
  const resolveClassName = (eq: string, em = '') => (pathname === eq) ? styles.current : em
  return (
    <header className={styles.header}>
      <ul>
        <li>⬛</li>
        <li className={resolveClassName('/')}>
          <Link href="/">ME</Link>
        </li>
        <li className={resolveClassName('/project/[slug]')}>
          <Link href="/project/all">Projects</Link>
        </li>
        <li className={resolveClassName('/gists')}>
          <Link href="/gists">Gists</Link>
        </li>
        <li>
          <a href="https://github.com/prg938" target="_blank">
            <span>Github</span>
            <svg aria-hidden="true" className={styles.linkArrow} height="7" viewBox="0 0 6 6" width="7"><path d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"></path></svg>
          </a>
        </li>
      </ul>
    </header>
  )
}