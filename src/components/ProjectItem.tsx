import styles from '@/styles/ProjectItem.module.scss'
import {ProjectItem} from '@/types'
import {FunctionComponent} from "react"
import Link from 'next/link'
import React from 'react'
import stringToJSX from 'html-react-parser'

const ProjectItem: FunctionComponent<Partial<ProjectItem> & {link?: string}> = ({
  id,
  preview = String(),
  repoName,
  repoLink,
  desc,
  link
}) => {

  const preparePreview = (preview: string) => {
    return /\.mp4/i.test(preview) ? <video loop autoPlay muted><source src={preview} type="video/mp4" /></video> : <img src={preview} />
  }
  
  const rn = repoName && <h4>{repoName}</h4>
  const rl = repoLink && <>
    <b>Repo: </b>
    <a href={repoLink} target="_blank">{repoLink}</a>
  </>
  const prw = preview && <div>{preparePreview(preview)}</div>
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