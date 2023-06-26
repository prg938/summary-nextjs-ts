
import styles from '@/styles/ProjectPage.module.scss'
import Head from 'next/head'
import {useRouter} from 'next/router'
import {ProjectListType} from '@/types'
import {FunctionComponent} from 'react'
import ProjectItem from './ProjectItem'
import ProjectList from './ProjectList'

const ProjectPage: FunctionComponent<ProjectListType> = ({projects}) => {
  const router = useRouter()
  const {slug} = router.query
  const slugAll = slug === 'all'
  const goBackHandler = () => router.back()
  let resolvedComponent: JSX.Element
  let title = 'PRG938/PROJECTS'
  let goBackElement = <div onClick={goBackHandler} className={styles.goBack}>
    <span>🡠 Go back</span>
  </div>
  if (slugAll) {
    resolvedComponent = <ProjectList list={projects} />
    goBackElement = null as any
  }
  else {
    const project = projects.find(({id}) => id === String(slug))!
    const {id, repoName} = project
    title = title + '@' + repoName
    resolvedComponent = <ProjectItem key={id} {...project} />
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="#PRG938 #projects" />
      </Head>
      <main className={styles.main}>
        {goBackElement}
        {resolvedComponent}
      </main>
    </>
  )
}

export default ProjectPage