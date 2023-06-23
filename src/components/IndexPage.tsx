
import styles from '@/styles/Index.module.scss'
import {FunctionComponent, useEffect} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import type {ProjectItem} from '@/types'
import greetingImg from '@/../public/greeting.jpeg'
import photoImg from '@/../public/photo.png'

const IndexPage: FunctionComponent<{projectList: ProjectItem[]}> = ({projectList}) => {

  useEffect(() => { console.log('debug: on client once') }, [])
  
  return (
    <>
      <Head>
        <title>⬛PRG938</title>
        <meta name="description" content=" #PRG938 #Pakov #Ivan #frontend #backend #next #nest #react #node.js #ts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <Image 
            src={greetingImg}
            alt="hi"
            quality={100}
            // @width auto-provided
            // @height auto-provided
            // @blurDataURL auto-provided
            placeholder="blur"
            />
        </div>
        <div className={styles.photoMeGroup}>
          <div className={styles.photo}>
            <Image 
              src={photoImg}
              alt="photo"
              placeholder="blur"
              style={{borderRadius: '50%'}} />
          </div>
          <div className={styles.me}>
            <span>
              <b>Hello everyone!</b>
              <span> 🖐️🙂 Im Pakov Ivan. Live in Russia. Experienced in Frontend/</span>
              <Link href="https://react.dev/" target="_blank">React</Link>/<Link href="https://nextjs.org/" target="_blank">Next</Link>
              <span> web-development. Also Backend <Link href="https://nodejs.org/" target="_blank">node.js</Link>/<Link href="https://www.typescriptlang.org/" target="_blank">ts</Link>/<Link href="https://nestjs.com/" target="_blank">Nest</Link> Developer. </span>
              <span>I like to create things, learn new stuff, work within interesting projects</span>
            </span>
            <div className={styles.contacts}>
              <h3>_:</h3>
              <ul>
                <li>
                  <span>Telegram: </span>
                  <a href="https://t.me/prg938" target="_blank">
                    <b>prg938</b>
                  </a>
                </li>
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
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.background}>
          <h3>Background: <a href="http://eng.iate.obninsk.ru" target="_blank">IATE MEPHI</a></h3>
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
                  <span>⬛ React Frontend-developer at </span>
                  <a href="https://vk.com/tovarovoz" target='_blank'>Freelance@TOVAROVOZ</a>
                </div> 
                <div>
                  <b>Duration: </b>
                  <span>~1.3 years(until Jun 11/2016)</span>
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
                    <span>&nbsp;&nbsp;</span>
                  </span>
                  <span>
                    <a href="https://gitlab.com/bhingoleramdas143" target="_blank">Ramdas Bhingole</a>
                    <span>&nbsp;&nbsp;</span>
                  </span>
                  <span>
                    <a href="https://github.com/sergeda" target="_blank">Serhii Dashko</a>
                  </span>
                </div>
                <div>
                  <b>Responsibilities: </b>
                  <ul>
                    <li>◾Creating logic for admin-panel of TOVAROVOZ using React</li>
                    <li>◾Creating custom UIs</li>
                    <li>◾Implementing CRUD for entities by interacting with backend REST API</li>
                    <li>◾Implementing client-routing for entities (cats/news/goods/etc)</li>
                    <li>◾Implementing i18n (internationalization) for 3 languages</li>
                    <li>◾Integrating 3rd-party components like WYSIWYG-editor and file-uploader</li>
                    <li>◾Bugfixing within project</li>
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
                    <a href="https://t.me/prg938" target="_blank">ME</a>
                    <span>&nbsp;&nbsp;</span>
                  </span>
                  <span>
                    <a href="https://t.me/+79036863382" target="_blank">Yuri Vasiliev</a>
                    <span>&nbsp;&nbsp;</span>
                  </span>
                </div>
                <div>
                  <b>Responsibilities: </b>
                  <ul>
                    <li>◾Assisting in preparing documentation using Adobe Acrobat & Microsoft Word</li>
                  </ul>
                </div>
              </li>
              <li>
                <div>
                  <span>
                    ⬛ Currently looking for job as a <b>Junior Backend developer</b> / <b>JavaScript Frontend Developer</b> / <b>React Frontend Developer</b>
                  </span>
                </div>
                <div>
                  <b>Duration: </b>
                  <span>from 2023 - until now</span>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.skillset}>
            <h3>Skillset:</h3>
            <ul>
              <li><b>Frontend:</b></li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Redux</li>
              <li>RTK</li>
              <li>RTK Query</li>
              <li>Next.js</li>
              <li>SWR</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Sass preprocessor</li>
              <li>Webpack</li>
              <li>-</li>
              <li><b>Fullstack (Junior):</b></li>
              <li>Node.js</li>
              <li>TypeScript</li><li>Nest</li>
              <li>TypeORM</li>
              <li>Postgres</li>
              <li>-</li>
              <li><b>Editors:</b></li>
              <li>VS Code</li>
              <li>-</li>
              <li><b>VCS:</b></li>
              <li>Git</li>
              <li>-</li>
              <li><b>Platforms/Services:</b></li>
              <li>Github</li>
              <li>Gitlab</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}
export default IndexPage
