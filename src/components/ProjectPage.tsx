
import styles from '@/styles/ProjectPage.module.scss'
import Head from 'next/head'
import {useRouter} from 'next/router'
import {ProjectItem} from '@/types'
import {FunctionComponent} from 'react'
import ProjectItemComponent from './ProjectItem'

const ProjectPage: FunctionComponent<{projectList: ProjectItem[]}> = ({projectList}) => {
  const router = useRouter()
  const {slug} = router.query
  const handleGoBack = () => router.back()
  let title = '⬛PRG938/PROJECTS'
  let projectItemComponents: JSX.Element[] = []

  if (slug === 'all') {
    projectItemComponents = projectList.map(project => {
      const {id, repoName, repoLink, shortDesc} = project
      return <ProjectItemComponent key={id} repoName={repoName} shortDesc={shortDesc} link={'/project/' + id} />
    })
  }
  else {
    const project = projectList.find(({id}) => id === String(slug)) as ProjectItem
    const {id, repoName} = project
    title = title + '/' + repoName
    projectItemComponents = [<ProjectItemComponent key={id} {...project} />]
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Projects of PRG938" />
      </Head>
      <main className={styles.main}>
        <div onClick={handleGoBack} className={styles.goBack}>
          <span>🡠 Go back</span>
        </div>
        {projectItemComponents}
      </main>
    </>
  )
}

export default ProjectPage