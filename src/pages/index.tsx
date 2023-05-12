
import IndexPage from '@/components/IndexPage'
import Layout from '@/components/layout'
import type {ProjectItem} from '@/types'
import {getLocalData} from '../../lib/localdata'
import type {NextPageWithLayout} from "./_app"

export async function getStaticProps() {
  const projectList = await getLocalData('json/projects.json')
  return {props: {projectList}}
}

const Index: NextPageWithLayout<{projectList: ProjectItem[]}> = props => {
  return <IndexPage {...props} />
}
Index.getLayout = page => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Index