
import styles from '@/styles/GistsPage.module.scss'
import * as Beautifier from 'js-beautify'
import {FunctionComponent} from 'react'
import {github} from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import SyntaxHighlighter from 'react-syntax-highlighter'
import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable' /* =useSWR(key, fetcher, {revalidateIfStale: false, revalidateOnFocus: false, revalidateOnReconnect: false}): https://swr.vercel.app/docs/revalidation#disable-automatic-revalidations */

const FetchingText: FunctionComponent<{}> = () => {
  return <>Fetching gist(s)...</>
}
const FetchFailText: FunctionComponent<{URL: string}> = ({URL}) => {
  return <>Failed to get gist(s) from: {URL}</>
}
const ExternalLink: FunctionComponent<{data: Array<string>}> = ({data}) => {
  const [href, text] = data
  return <a href={href} target='_blank'>{text}</a>
}

const TextFetcher = (...args: [any, any]) => {
  return fetch(...args).then(res => res.text())
}

const JSONFetcherWithAcceptHeader = (args: [string, string]) => {
  const [URL, headerValue] = args
  return fetch(URL, {
    method: 'GET',
    headers: {
       accept: headerValue
    }
  }).then(res => res.json())
}

interface Gist {
  description: string | null
  id: string
  url: string
  created_at: string
  updated_at: string
  files: {
    [key: string]: {
      filename: string
      type: string
      language: string
      raw_url: string
      size: number
    }
  }
  owner: {
    login: string
  }
}

const GistFileComponent: FunctionComponent<{URL: string}> = ({URL}) => {
  const {data = String(), error, isLoading} = useSWR<string>(URL, TextFetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  })
  const customStyle = {fontSize: '12px'}
  const isMDExtension = /\.md/i.test(URL)
  const language = isMDExtension ? 'text' : 'javascript'
  const beautify = !isMDExtension
  const result = beautify ? Beautifier.js(data, {indent_size: 2}) : data
  if (isLoading)
    return <FetchingText />
  if (error)
    return <FetchFailText URL={URL} />
  return (
    <div className={styles.gist}>
      <SyntaxHighlighter language={language} style={github} customStyle={customStyle}>
        {result}
      </SyntaxHighlighter>
    </div>
  )
}

export default () => {
  const GithubUsername = 'prg938'
  const GistURL = 'https://gist.github.com/'
  const URL = `https://api.github.com/users/${GithubUsername}/gists`
  const GithubDocsURL = 'https://docs.github.com/en/rest'
  const defaultDescription = 'No description'
  const gists: JSX.Element[] = []
  const {data, error, isLoading} = useSWRImmutable<Gist[]>([URL, 'application/vnd.github+json'], JSONFetcherWithAcceptHeader)

  if (isLoading)
    return <FetchingText />
  if (error)
    return <FetchFailText URL={URL} />
  
  if (data) {
    for (let i = 0; i < data.length; i++) {
      const {id, created_at, files, description, owner} = data[i]
      const ownerLogin = owner.login
      const date = new Date(created_at)
      const preparedDate = String(date.getUTCDate()) + '/' + date.getUTCMonth() + '/' + date.getUTCFullYear()
      const fileKeys = Object.keys(files)
      for (let k = 0; k < fileKeys.length; k++) {
        const key = fileKeys[k]
        const {filename, raw_url, type, size, language} = files[key]
        const ownerLoginLink = GistURL + GithubUsername
        const gistLink = GistURL + GithubUsername + '/' + id
        gists[gists.length] = <li key={id}>
          <div className={styles.gistname}>
            <ExternalLink data={[ownerLoginLink, ownerLogin]} />
            <span> / </span>
            <ExternalLink data={[gistLink, filename]} />
          </div>
          <div className={styles.created}>created: {preparedDate}</div>
          <div className={styles.description}>{description || defaultDescription}</div>
          <GistFileComponent URL={raw_url} />
        </li>
      }
    }
  }
  
  return <>
    <h2>Gist-list from GitHub API</h2>
    <h5><ExternalLink data={[GithubDocsURL, GithubDocsURL]} /></h5>
    <br/>
    <ul className={styles.gists}>{gists}</ul>
  </>
}