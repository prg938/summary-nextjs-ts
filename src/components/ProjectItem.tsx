import styles from '@/styles/ProjectItem.module.scss'
import {ProjectItem} from '@/types'
import {FunctionComponent} from "react"
import stringToJSX from 'html-react-parser'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const ProjectItem: FunctionComponent<Partial<ProjectItem> & {link?: string}> = ({
  id,
  preview = String(),
  previewSize,
  repoName,
  repoLink,
  desc,
  shortDesc,
  link
}) => {

  const getImage = (W: number, H: number) => {
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

  const getPreview = () => {
    const [W, H] = previewSize!
    const mp4PosterPath = '/poster.jpg'
    const isMp4 = /\.mp4/i.test(preview)
    if (isMp4) {
      return <video width={W} height={H} controls muted loop autoPlay poster={mp4PosterPath}>
        <source src={preview} type="video/mp4" />
      </video>
    }
    return getImage(W, H)
  }
  
  const rn = repoName && <h4>{link ? repoName : <span style={{fontSize: '30px'}}>{repoName}</span>}</h4>
  const rl = repoLink && <>
    <b>Repo: </b>
    <a href={repoLink} target="_blank">{repoLink}</a>
  </>
  const prw = preview && <div>{getPreview()}</div>
  const dsc = desc && <div className={styles.desc}>{stringToJSX(desc)}</div>
  const content = <>
    <div>
      {rn}
      <div>{rl}</div>
    </div> 
    {prw}
    {dsc}
  </>

  const result = <div className={styles.item}>
    {link ? <div><Link href={link}>{content}</Link>{link ? shortDesc : null}</div> : content}
  </div>

  return result
}

export default ProjectItem