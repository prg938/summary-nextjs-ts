
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/ProjectList.module.scss'
import {FC} from 'react'
import type {ProjectItem} from '@/types'
import dynamic from 'next/dynamic'
const MasonryLayout = dynamic(import('masonrylayout-tsx-react'), {ssr: false})

const justifyContaierProp = MasonryLayout.defaultProps?.justifyContainer
type justifyContaierPropType = typeof justifyContaierProp
interface ProjectListType {
  projectList: ProjectItem[]
  justifyContainer?: justifyContaierPropType
}
const ProjectList: FC<ProjectListType> = ({projectList, justifyContainer = 'flex-start'}) => {
  const animate = '.4s ease'
  const gap = 25
  const list = projectList.map(project => {
    const {id, repoName, shortDesc, previewSize, preview} = project
    if (id === 'mariogame') {
      return <div key={id} className={styles.project}>
        <div style={{fontSize: '35px'}}>
          <div style={{textTransform: 'uppercase'}}><Link href={'/project/' + id}>{repoName}🎮</Link></div>
        </div>
        <div>
          <div>{shortDesc}</div>
          <h2>Play <a href='https://prg938.github.io/mariogame' target='_blank'>HERE</a></h2>
        </div>
      </div>
    }
    if (id === 'chrome-weather' || id === 'masonrylayout-tsx-react') {
      return <div key={id} className={styles.project}>
        <h3><Link href={'/project/' + id}>{repoName}</Link></h3>
        <h4> {shortDesc}</h4>
        <Image
          src={preview}
          alt={'preview'}
          width={previewSize![0]}
          height={previewSize![1]}
          placeholder='blur'
          blurDataURL={'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIAAUABQMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAI/9oACAEBAAAAAD//AP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIQAAAAf//EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMQAAAAf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z'}
          style={{width: '100%', height: 'auto', borderRadius: '7px' }}
        />
      </div>
    }
    return (
      <div key={id} className={styles.project}>
        <h4><Link href={'/project/' + id}>{repoName}</Link></h4>
        <h5> {shortDesc}</h5>
      </div>
    )
  })
  return <MasonryLayout animate={animate} gap={gap} justifyContainer={justifyContainer}>{list}</MasonryLayout>
}
export default ProjectList