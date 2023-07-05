import styles from '@/styles/ProjectList.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import {FC} from 'react'
import type {ProjectItem} from '@/types'

enum ProjectID {
  MarioGame = 'mariogame',
  ChromeWeather = 'chrome-weather',
  MasonrylayoutTsxReact = 'masonrylayout-tsx-react'
}

interface ProjectListType {
  list: ProjectItem[]
}

const ProjectList: FC<ProjectListType> = ({list}) => {
  const pathProject = '/project/'
  const imageStyle = {margin: '10px 0', maxWidth: '30%', height: 'auto'}
  const fs32px = {fontSize: '32px'}
  const ttu = {textTransform: 'uppercase'} as const
  
  const projects = list.map(project => {
    const {id, repoName, shortDesc, previewSize, preview} = project
    const projectHref = pathProject + id
    switch(id as ProjectID) {
      case ProjectID.MarioGame:
        return <div key={id} className={styles.project}>
          <div style={fs32px}>
            <div style={ttu}>
              <Link href={projectHref}>🎮{repoName}</Link>
            </div>
          </div>
          <div>
            <div className={styles.desc}>
              {shortDesc}
              <h3>Play <a href='https://prg938.github.io/mariogame' target='_blank'>HERE</a></h3>
            </div>
          </div>
        </div>
      case ProjectID.ChromeWeather:
      case ProjectID.MasonrylayoutTsxReact:
        const src = preview
        const w = previewSize![0]
        const h = previewSize![1]
        return <div key={id} className={styles.project}>
          <h3 className={styles.title}>
            <Link href={projectHref}>🥤{repoName}</Link>
          </h3>
          <Image
            src={src}
            alt={'preview'}
            width={w}
            height={h}
            placeholder='blur'
            blurDataURL={'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIAAUABQMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAI/9oACAEBAAAAAD//AP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIQAAAAf//EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMQAAAAf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z'}
            style={imageStyle}
            quality={100}
          />
          <p className={styles.desc}>{shortDesc}</p>
        </div>
      default:
        return <div key={id} className={styles.project}>
          <h3 className={styles.title}>
            <Link href={projectHref}>🥤{repoName}</Link>
          </h3>
          <div className={styles.desc}>{shortDesc}</div>
        </div>
    }
  })
  return <div className={styles.main}>{projects}</div>
}

export default ProjectList
