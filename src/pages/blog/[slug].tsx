
import Layout from '@/components/layout'
import BlogPage from '@/components/blog/BlogPage'
import {getLocalData} from '@/../lib/localdata'
import {NextPageWithLayout} from '../_app'
import type {BlogItemType, BlogItemsType} from '@/types'

const getBlogItems = async (): Promise<BlogItemType[]> => {
  return await getLocalData('json/blog-items.json')
}

const getStaticPaths = async () => {
  const items = await getBlogItems()
  return {
    paths: [...items.map(item => ({params: {slug: item.id}})), {params: {slug: 'all'}}],
    fallback: false
  }
}
const getStaticProps = async () => ({props: {items: await getBlogItems()}})

const Slug: NextPageWithLayout<BlogItemsType> = props => {
  return <BlogPage {...props} />
}
Slug.getLayout = page => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
export default Slug
export {getStaticProps, getStaticPaths}