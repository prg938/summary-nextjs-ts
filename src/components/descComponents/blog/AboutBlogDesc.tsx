
import {FC} from 'react'
import {Paragraph} from '@/components/Typography'
import {DiscussionEmbed} from 'disqus-react'
import dynamic from 'next/dynamic'

const AboutBlogDesc: FC<{}> = () => {
  return <>
    <Paragraph>Первый пост данного мини-блога</Paragraph>
    <DiscussionEmbed
      shortname='prg938-vercel-app'
      config={{
        url: 'https://prg938.vercel.app/blog/about',
        identifier: 'about',
        language: 'ru'
      }}
      />
  </>
}

export default AboutBlogDesc