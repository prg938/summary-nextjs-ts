import styles from './Blog.module.scss'
import Item from './Item'
import {BlogItemType, BlogItemsType} from '@/types'
import React, {FC} from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'
import * as Desc from '../descComponents/blog'
import Input from '../Input'

const allTags = ['#react', '#typescript', '#next', '#новости', '#stackoverflow']

function selectTags(
  event: React.MouseEvent<HTMLSpanElement>,
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>
) {
  const selectedNode = event.currentTarget
  const selectedTag = selectedNode.dataset.tag as string
  setSelectedTags(selectedTags => {
    let selectedTagRemoved = false
    let newTags = [...selectedTags]
    for (let t = 0; t < selectedTags.length; t++) {
      if (selectedTags[t] === selectedTag) {
        newTags.splice(t, 1)
        selectedTagRemoved = true
        break
      }
    }
    if (!selectedTagRemoved) {
      newTags[newTags.length] = selectedTag
    }
    return newTags
  })
}

function findItem(items: BlogItemType[], slug: string) {
  for (const item of items) {
    const {id} = item
    if (id === slug) {
      return item
    }
  }
  return undefined
}

function getTagElements(selectedTags: Array<string>, clickEventHandler: any): JSX.Element[] {
  return allTags.map(tag => {
    let selectedClass = String()
    if (selectedTags.includes(tag)) {
      selectedClass = styles.selected
    }
    return <span onClick={clickEventHandler} data-tag={tag} className={styles.tag + ' ' + selectedClass} key={tag}>{tag}&nbsp;&nbsp; </span>
  })
}

function filterItems(items: BlogItemType[], selectedTags: string[], searchText: string): JSX.Element[] {
  let filteredItems: JSX.Element[] = []
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    const {tags, id, title} = item
    for (let t = 0; t < tags.length; t++) {
      const tag = tags[t]
      if (selectedTags.includes(tag) && title.toLowerCase().includes(searchText.toLowerCase().trim())) {
        filteredItems[filteredItems.length] = <Item key={id} {...item} />
        break
      }
    }
  }
  return filteredItems
}

const BlogPage: FC<BlogItemsType> = props => {
  const router = useRouter()
  const goBack = () => router.back()
  const [selectedTags, setSelectedTags] = React.useState<Array<string>>([])
  const [searchText, setSearchText] = React.useState<string>(String())

  const clickEventHandler = (event: React.MouseEvent<HTMLSpanElement>) => {
    selectTags(event, setSelectedTags)
  }

  if (router.query.slug === 'all') {
    const tags = getTagElements(selectedTags, clickEventHandler)
    let items: JSX.Element[] = []
    let itemsLength = 0
    
    items = filterItems(props.items, selectedTags.length === 0 ? allTags : selectedTags, searchText)

    if (items.length === 0) {
      items = [<div key='noposts'>Посты не найдены 😔</div>]
    }
    else {
      itemsLength = items.length
    }

    return <>
      <Head>
        <title>PRG938@Blog</title>
        <meta name="description" content="Web internals" />
      </Head>
      <div className={styles.stats}>
        <div>Найти по тегам: {tags}</div>
        <div>Постов: {itemsLength}</div>
      </div>
      <Input debounce={setSearchText} />
      <div className={styles.items}>
        {items}
      </div>
    </>
  }
  else {
    const goBackElement = <div onClick={goBack} style={{display: 'inline-block', cursor: 'pointer'}}>
      <span>🡠 Вернуться к списку постов</span>
    </div>
    const item = findItem(props.items, router.query.slug as string) as BlogItemType
    const title = item.title
    const DescComponent = Desc[item.mappedComponent as keyof typeof Desc]
    const itemElement = <Item {...item} opened={true} />
    return <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Head>
      <div className={styles.stats}>
        {goBackElement}
        <div>&nbsp;</div>
      </div>
      <div className={styles.items}>
        {itemElement}
      </div>
      <div className={styles.desc}>
        <DescComponent />
      </div>
    </>
  }
}

export default BlogPage