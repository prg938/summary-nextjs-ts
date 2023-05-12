
import styles from '@/styles/Index.module.scss'
import {FunctionComponent, useEffect} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import type {ProjectItem} from '@/types'

const IndexPage: FunctionComponent<{projectList: ProjectItem[]}> = ({projectList}) => {

  useEffect(() => {
    console.log('on client once')
  }, [])

  const projects = projectList.map(project => {
    const {id, repoName} = project
    return (
      <div key={id} className={styles.project}>
        <Link href={'project/' + id}>{repoName}</Link>
      </div>
    )
  })
  
  return (
    <>
      <Head>
        <title>⬛ME</title>
        <meta name="description" content="Pakov Ivan IATE MEPHI Frontend web-developer software-developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.photoMeGroup}>
          <div className={styles.photo}>
            <img src="photo.png" />
          </div>
          <div className={styles.me}>
            <span>
              <b>Hi everyone!</b>🙂👋 Im Pakov Ivan, Im 29YO, Russia.
              Experienced in Frontend web-development. A little experience in Fullstack development.
            </span>
            <div className={styles.contacts}>
              <h3>Contacts:</h3>
              <ul>
                <li>
                  <span>Email: </span>
                  <a href="mailto:prg938@mail.ru" target="_blank">
                    <b>prg938@mail.ru</b>
                  </a>
                </li>
                <li>
                  <span>Github: </span>
                  <a href="https://github.com/prg938" target="_blank">
                    <b>prg938</b>
                  </a>
                </li>
                <li>
                  <span>Telegram: </span>
                  <a href="https://t.me/prg938" target="_blank">
                    <b>prg938</b>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.background}>
          <h3>Background: <a href="http://eng.iate.obninsk.ru" target="_blank">IATE MEPHI. Cyber Intelligence Systems Institute</a></h3>
          <span>
            student until 2014.
          </span>
        </div>
        <div className={styles.skillsetWorkExperienceGroup}>

          <div className={styles.workExperience}>
            <h3>Work Experience:</h3>
            <ul>
              <li>
                <div>
                  <span>⬛ Frontend-developer (Angular/React) at </span>
                  <a href="https://vk.com/tovarovoz" target='_blank'>Freelance/TOVAROVOZ</a>
                </div> 
                <div>
                  <b>Duration: </b>
                  <span>~1.2 years(until Jun 11/2016)</span>
                </div>
                <div>
                  <b>Repo: </b>
                  <span>
                    <a href="https://gitlab.com/sergeda/inetshop_pg/-/project_members" target='_blank'>gitlab.com/sergeda/inetshop_pg/-/project_members</a>
                  </span>
                </div>
                <div>
                  <span>
                    <b>Team: </b>
                  </span>
                  <span>
                    <a href="https://github.com/prg938" target="_blank">ME</a>
                    <span>&nbsp;</span>
                  </span>
                  <span>
                    <a href="https://gitlab.com/bhingoleramdas143" target="_blank">Ramdas Bhingole</a>
                    <span>&nbsp;</span>
                  </span>
                  <span>
                    <a href="https://github.com/sergeda" target="_blank">Serhii Dashko</a>
                  </span>
                </div>
                <div>
                  <b>Responsibilities: </b>
                  <ul>
                    <li>—Using Angular and React for programming administrative part of internet shop service</li>
                    <li>—Creating and styling custom UIs</li>
                    <li>—Implementing client-routing for used entities (cats/news/goods/etc)</li>
                    <li>—Implementing CRUD-logic for used entities by interacting with backend REST API</li>
                    <li>—Implementing internationalization (i18n): EN/RU/UKR</li>
                    <li>—Integrating third-party components like WYSIWYG-editor and file-uploader</li>
                    <li>—Bugfixing</li>
                  </ul>
                </div>
              </li>
              <li>
                <div>
                  <span>⬛ PTO-engineer assistant at </span>
                  <a href="/" target='_blank'>Unknown</a>
                </div>
                <div>
                  <b>Duration: </b>
                  <span>from 2016 - until now</span>
                </div>
                <div>
                  <span>
                    <b>Team: </b>
                  </span>
                  <span>
                    <a href="https://t.me/+79036863382" target="_blank">Yuri Vasiliev</a>
                    <span>&nbsp;</span>
                  </span>
                  <span>
                    <a href="https://t.me/prg938" target="_blank">ME</a>
                    <span>&nbsp;</span>
                  </span>
                </div>
                <div>
                  <b>Responsibilities: </b>
                  <ul>
                    <li>—Assisting in preparing documentation using Adobe Acrobat & Microsoft Word</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.skillset}>
            <h3>Skillset:</h3>
            <ul>
              <li>JavaScript</li>
              <li>Node.js</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Redux (+RTK&RTKQ)</li>
              <li>Next.js</li>
              <li>SWR</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Sass preprocessor</li>
              <li>Webpack</li>
              <li>VS Code</li>
              <li>Git / Github / Gitlab</li>
            </ul>
          </div>
        </div>
        <div className={styles.projects}>
          <h3>Project List:</h3>
          <div>
            {projects}
          </div>
        </div>
      </main>
    </>
  )
}
export default IndexPage