
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
enum ProjectID {
  MarioGame = 'mariogame',
  ChromeWeather = 'chrome-weather',
  MasonrylayoutTsxReact = 'masonrylayout-tsx-react'
}
const ProjectList: FC<ProjectListType> = ({projectList, justifyContainer = 'flex-start'}) => {
  const blurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIAAUABQMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAI/9oACAEBAAAAAD//AP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIQAAAAf//EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMQAAAAf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z'
  const animate = '.1s ease'
  const gap = 15
  const pathProject = '/project/'
  const w100 = {width: '100%', height: 'auto'}
  const w80 = {width: '80%', height: 'auto'}
  const imageStyle = {marginTop: '5px', borderRadius: '7px'}
  const fs20px = {fontSize: '20px'}
  const ttu = {textTransform: 'uppercase'}
  
  const list = projectList.map(project => {
    const {id, repoName, shortDesc, previewSize, preview} = project
    const projectHref = pathProject + id
    if (id as string === ProjectID.MarioGame) {
      return <div key={id} className={styles.project}>
        <div style={fs20px}>
          <div style={ttu}>
            <Link href={projectHref}>{repoName}</Link>
          </div>
        </div>
        <div>
          <div className={styles.desc}>{shortDesc}
            <h3>Play <a href='https://prg938.github.io/mariogame' target='_blank'>HERE🎮</a></h3>
          </div>
        </div>
      </div>
    }
    if (id as string === ProjectID.ChromeWeather || id as string === ProjectID.MasonrylayoutTsxReact) {
      if (id as string === ProjectID.ChromeWeather) {
        imageStyle = {...imageStyle, ...w80}
      }
      else {
        imageStyle = {...imageStyle, ...w100}
      }
      return <div key={id} className={styles.project}>
        <h3 className={styles.title}>
          <Link href={projectHref}>{repoName}</Link>
        </h3>
        <p className={styles.desc}>{shortDesc}</p>
        <Image
          src={preview}
          alt={'preview'}
          width={previewSize![0]}
          height={previewSize![1]}
          placeholder='blur'
          blurDataURL={blurDataURL}
          style={imageStyle}
        />
      </div>
    }
    return (
      <div key={id} className={styles.project}>
        <h3 className={styles.title}>
          <Link href={projectHref}>{repoName}</Link>
        </h3>
        <div className={styles.desc}>{shortDesc}</div>
      </div>
    )
  })
  return <MasonryLayout animate={animate} gap={gap} justifyContainer={justifyContainer}>{list}</MasonryLayout>
}
export default ProjectList
