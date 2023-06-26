
import Layout from '@/components/layout'
import ProjectPage from '@/components/ProjectPage'
import {getLocalData} from '@/../lib/localdata'
import {NextPageWithLayout} from '../_app'
import type {ProjectListType} from '@/types'

const getProjects = async (): Promise<ProjectListType['projects']> => {
  return await getLocalData('json/projects.json')
}

const getStaticPaths = async () => {
  const projects = await getProjects()
  return {
    paths: [...projects.map(project => ({params: {slug: project.id}})), {params: {slug: 'all'}}],
    fallback: false
  }
}
const getStaticProps = async () => ({props: {projects: await getProjects()}})

const Slug: NextPageWithLayout<ProjectListType> = props => <ProjectPage {...props} />
Slug.getLayout = page => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
export default Slug
export {getStaticProps, getStaticPaths}