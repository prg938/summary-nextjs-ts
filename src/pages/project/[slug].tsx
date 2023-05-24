
import Layout from '@/components/layout'
import ProjectPage from '@/components/ProjectPage'
import {getLocalData} from '@/../lib/localdata'
import {NextPageWithLayout} from '../_app'
import type {ProjectItem} from '@/types'

type ProjectList = ProjectItem[]

const getProjectList = async (): Promise<ProjectList> => await getLocalData('json/projects.json')

const getStaticProps = async () => {
  const projectList = await getProjectList()
  return {props: {projectList}}
}
const getStaticPaths = async () => {
  const projectList = await getProjectList()
  const paths = projectList.map(project => ({params: {slug: String(project.id)}}))
  return {
    paths: [...paths, {params: {slug: 'all'}}],
    fallback: false
  }
}


const ProjectSlug: NextPageWithLayout<{projectList: ProjectList}> = props => {
  return <ProjectPage {...props} />
}
ProjectSlug.getLayout = page => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
export default ProjectSlug
export {getStaticProps, getStaticPaths}