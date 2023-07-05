import React from 'react'
import styles from '@/styles/ProjectItem.module.scss'
import {ProjectItem} from '@/types'
import {FunctionComponent} from "react"
import Image from 'next/image'
import stringToJSX from 'html-react-parser'
import descComponents from './descComponents'
import DefaultPreviewSVG from './DefaultPreviewSVG'

const getImage = (W: number, H: number, preview: string) => {
  const blurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIAAUABQMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAI/9oACAEBAAAAAD//AP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIQAAAAf//EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMQAAAAf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z'
  return <Image
    src={preview}
    alt={preview}
    width={W}
    height={H}
    placeholder='blur'
    blurDataURL={blurDataURL}
  />
}

const resolvePreview = (previewSize: [number, number], preview: string) => {
  const [W, H] = previewSize
  if (/\.mp4/i.test(preview)) {
    return <video width={W} height={H} poster={'/poster.jpg'} controls muted loop autoPlay>
      <source src={preview} type="video/mp4" />
    </video>
  }
  else if (preview === 'default') {
    return <DefaultPreviewSVG W={W} H={H} />
  }
  else {
    return getImage(W, H, preview)
  }
}

const ProjectItem: FunctionComponent<Partial<ProjectItem>> = ({
  preview = String(),
  previewSize,
  repoName,
  repoLink,
  mappedComponent
}) => {
  const Desc = descComponents[mappedComponent as keyof typeof descComponents]
  return <div className={styles.item}>
    <h4 style={{fontSize: '30px', textTransform: 'uppercase'}}>
      {repoName}
    </h4>
    <div>
      <b>Repository: </b>
      <a target="_blank" href={repoLink}>{repoLink!.slice(8)}</a>
    </div>
    <div>{resolvePreview(previewSize!, preview)}</div>
    <Desc />
  </div>
}

export default ProjectItem