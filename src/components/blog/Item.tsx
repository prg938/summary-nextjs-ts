import styles from './Blog.module.scss'
import {FC} from 'react'
import {BlogItemType} from '@/types'
import Link from 'next/link'

interface ItemType extends BlogItemType {
  opened?: boolean
}

const Item: FC<ItemType> = ({id, date, title, tags, opened = false}) => {
  const tagList = tags.map(tag => <span key={tag}>{tag}&nbsp; </span>)
  const itemHref = '/blog/' + id
  const authorElement = <div className={styles.author}>
    <div className={styles.by}>author <a href="https:/github.com/prg938" target="_blank">PRG938</a></div>
  </div>
  const itemElement = <div className={opened ? String() : styles.item}>
    <div className={styles.date}>
      <svg viewBox="0 0 24 24" width={17} height={17}>
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24.21-.34.1-.79-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72z">
        </path>
      </svg>
      <div>{date}</div>
    </div>
    <div className={styles.taglist}>
      <small>{tagList}</small>
    </div>
    <div className={opened ? styles.titleBig : styles.title}>{title}</div>
    {opened ? authorElement : null}
  </div>

  return opened ? itemElement : <Link href={itemHref}>
    {itemElement}
  </Link>
}

export default Item