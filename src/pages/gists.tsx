import {NextPageWithLayout} from "./_app"
import Layout from "@/components/layout"
import GistsPage from "@/components/GistsPage"

const Gists: NextPageWithLayout<{}> = () => {
  return <GistsPage />
}

Gists.getLayout = page => {
  return <Layout>{page}</Layout>
}

export default Gists