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
  link
}) => {

  const getImage = () => {
    const [W, H] = previewSize!
    const blurDataURL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAMAAAC6sdbXAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABLUExURUM/QGhkZLKsq4eBfnJraFlXWnBucJ+bmnhxcWRcW4OHjYCChnl5eVlRVEg9QbGztZeanGNqaXNzc3t3d8jIyKOmplhiYYCDgZSTkYE3yisAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAmSURBVBhXY+BjZGJmYeAVEuDgZODi5uHlY+AXYOThYRARFROXAAAOxgE7atlquQAAAABJRU5ErkJggg=='
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
    const isMp4 = /\.mp4/i.test(preview)
    if (isMp4) {
      return <video loop autoPlay muted placeholder="loading preview">
        <source src={preview} type="video/mp4" />
      </video>
    }
    return getImage()
  }
  
  const rn = repoName && <h4>{repoName}</h4>
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
    {link ? <div><Link href={link}>{content}</Link></div> : content}
  </div>

  return result
}

export default ProjectItem