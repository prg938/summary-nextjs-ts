
import styles from '@/styles/Header.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import {useRouter, withRouter} from 'next/router'
import {FC, useEffect, useState} from 'react'
import photoImg from '@/../public/photo.png'
import dynamic from 'next/dynamic'
const MuiSwitcher = dynamic(import('../MuiSwitcher'), {ssr: false})

const Header: FC<{}> = () => {
  const emojiList = ['👾','😎','🙂','🦨','🥷','😈','😇','🥷','👽','😸','🤖','🐷','🐼','🥷','🐸','🥷','🦔','🥷','🐞','🥷','🦾','🥷','💪','🎃','🥷','🧱','🛖','📱','🍟','🍖','🧁','🍪','🍸','🥤','🥥','🍆','🍄','🍁','🌚','🥷','🥷','☢️','🥷','🥷']
  const randomize = (min:number, max:number) => Math.round(min - 0.5 + Math.random() * (max - min + 1))
  const randomizeEmoji = () => emojiList[randomize(0, emojiList.length - 1)]
  const [emoji, setEmoji] = useState('◼️')
  const router = useRouter()
  const {pathname} = router
  const resolveClassName = (eq: string, em = '') => (pathname === eq) ? styles.current : em
  useEffect(() => { 
    console.log('debug: header emoji set')
    setEmoji(randomizeEmoji())
  }, [])
  enum HeaderLiType {Content, Link}
  const headerLi = [
    {type: HeaderLiType.Content, content: <Image width={50} height={50} src={photoImg} alt="photo" placeholder="blur" style={{borderRadius: '50%'}} />},
    {type: HeaderLiType.Content, content: emoji},
    {type: HeaderLiType.Link, href: '/', text: 'ME'},
    {type: HeaderLiType.Link, href: '/project/all', text: 'PROJECTS'},
    {type: HeaderLiType.Link, href: '/gists', text: 'GISTS'},
    {type: HeaderLiType.Link, href: '/blog/all', text: 'BLOG'},
    {type: HeaderLiType.Content, content: <MuiSwitcher />}
  ]
  const headerLiElements = headerLi.map((value, i) => {
    if (value.type === HeaderLiType.Content) {
      return <li key={i}>{value.content}</li>
    }
    if (value.type === HeaderLiType.Link) {
      const {href, text} = value
      let className = href
      if (href === '/project/all') className = '/project/[slug]'
      if (href === '/blog/all') className = '/blog/[slug]'
      return <li key={i} className={resolveClassName(className as string)}>
        <Link href={href as string}>{text}</Link>
      </li>
    }
  })
  return (
    <header className={styles.header}>
      <ul>
        {headerLiElements}
      </ul>
    </header>
  )
}

export default Header