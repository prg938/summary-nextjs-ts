
import styles from '@/styles/Index.module.scss'
import greetingImage from '@/../public/greeting.jpeg'
import {FunctionComponent, useEffect} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const IndexPage: FunctionComponent = (props) => {
  useEffect(() => { console.log('debug: on client once') }, [])
  return (
    <>
      <Head>
        <title>PRG938</title>
        <meta name="description" content="#PRG938 #Pakov #Ivan #frontend #backend #next #nest #react #node.js #ts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.photoMeGroup}>
          <Image 
            quality={100}
            src={greetingImage}
            alt="hi"
            // @width auto-provided
            // @height auto-provided
            // @blurDataURL auto-provided
            placeholder="blur"
            style={{borderRadius: '7px'}}
          />
          <div className={styles.me}>
            <span>
              <b>Hello everyone!</b>
              <span> 🖐️🙂 Im: </span>
              <Link href="https://react.dev/" target="_blank">React</Link>{' / '}
              <Link href="https://nextjs.org/" target="_blank">Next</Link>{' / '} 
              <Link href="https://nodejs.org/" target="_blank">node.js</Link>{' / '} 
              <Link href="https://www.typescriptlang.org/" target="_blank">ts</Link>{' / '} 
              <Link href="https://nestjs.com/" target="_blank">Nest</Link> Developer.{' '} 
              <span>I like to create, learn, work within interesting projects.</span>
            </span>
            <div className={styles.contacts}>
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
        <div className={styles.skillsetWorkExperienceGroup}>

          <div className={styles.workExperience}>
            <h1>Commercial development experience:</h1>
            <ul>
              <li>
                <div>
                  <h2>React Frontend-developer</h2>
                </div>
                <div>
                  <b>Company: </b>
                  <a href="https://vk.com/tovarovoz" target='_blank'>Freelance/TOVAROVOZ</a>
                </div>
                <div>
                  <b>Duration: </b>
                  <span>2015 — Jun 11/2016 (approx 1.4 years)</span>
                </div>
                <div>
                  <span>
                    <b>Team: </b>
                  </span>
                  <span>
                    <a href="https://github.com/sergeda" target="_blank">Serhii Dashko</a>
                    <span>&nbsp;&nbsp;</span>
                  </span>
                  <span>
                    <a href="https://github.com/prg938" target="_blank">ME</a>
                    <span>&nbsp;&nbsp;</span>
                  </span>
                  <span>
                    <a href="https://gitlab.com/bhingoleramdas143" target="_blank">Ramdas Bhingole</a>
                    <span>&nbsp;&nbsp;</span>
                  </span>
                </div>
                <div>
                  <b>Link: </b>
                  <span>
                    <a href="https://gitlab.com/sergeda/inetshop_pg/-/project_members" target='_blank'>gitlab</a>
                  </span>
                </div>
                <div>
                  <b>Responsibilities: </b>
                  <ul>
                    <li>Creating/Updating business-logic using React for admin-panel</li>
                    <li>Creating custom UIs</li>
                    <li>Implementing CRUD for entities by interacting with backend REST API</li>
                    <li>Implementing client-routing for entities (cats/news/goods/etc)</li>
                    <li>Implementing i18n (internationalization) for 3 languages</li>
                    <li>Integrating 3rd-party components like WYSIWYG-editor and file-uploader</li>
                    <li>Bugfixing within project</li>
                  </ul>
                </div>
              </li>
              <li>
                <div>
                  <h2>UI React Developer</h2>
                </div>
                <div>
                  <b>Company: </b>
                  <a href="http://altinet.ua" target='_blank'>Freelance/ALTINET</a>
                </div>
                <div>
                  <b>Duration: </b>
                  <span>2016 — Aug 21/2018</span>
                </div>
                <div>
                  <span>
                    <b>Team: </b>
                  </span>
                  <span>
                    <a href="https://github.com/sergeda" target="_blank">Serhii Dashko</a>
                    <span>&nbsp;&nbsp;</span>
                  </span>
                  <span>
                    <a href="https://github.com/prg938" target="_blank">ME</a>
                    <span>&nbsp;&nbsp;</span>
                  </span>
                </div>
                <div>
                  <b>Responsibilities: </b>
                  <ul>
                    <li>Creating new business-logic using React</li>
                    <li>Updating existing business-logic using React</li>
                  </ul>
                </div>
              </li>
              <li>
                <div>
                  <h2>UI React Developer</h2>
                </div>
                <div>
                  <b>Company: </b>
                  <a href="http://www.autoklad.ua" target='_blank'>Freelance/AUTOCLAD</a>
                </div>
                <div>
                  <b>Duration: </b>
                  <span>2019 — Oct 4/2020</span>
                </div>
                <div>
                  <span>
                    <b>Team: -</b>
                  </span>
                </div>
                <div>
                  <b>Responsibilities: </b>
                  <ul>
                    <li>Creating/Updating business-logic using React for admin-panel</li>
                    <li>Database interaction using REST API</li>
                  </ul>
                </div>
              </li>
              <li>
                <div>
                  <h2>PTO-engineer assistant</h2>
                </div>
                <div>
                  <b>Duration: </b>
                  <span>from 2020 — 2023</span>
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
                    <li>Assisting in preparing documentation using Adobe Acrobat & Microsoft Word</li>
                  </ul>
                </div>
              </li>
              <li>
                <div>
                  <h2>Open for new opportunities</h2>
                  <div>
                    <b>Desired salary: &gt;1.1K dollars / month</b>
                  </div>
                  <div>
                    <b>Positions: </b>
                  </div>
                  <div>
                    <ul>
                      <li>(Middle/Middle+) Frontend developer</li>
                      <li>(Middle/Middle+) React developer</li>
                      <li>(Middle/Middle+) JavaScript developer</li>
                      <li>(Junior) Fullstack developer</li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.skillset}>
            <h3>Expertise:</h3>
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
              <li><b>Backend (Junior):</b></li>
              <li>Node.js</li>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Nest</li>
              <li>TypeORM</li>
              <li>Postgres</li>
              <li>-</li>
              <li><b>Editors:</b></li>
              <li>VS Code</li>
              <li>-</li>
              <li><b>VCS:</b></li>
              <li>Git</li>
              <li>-</li>
              <li><b>Services:</b></li>
              <li>Github</li>
              <li>Gitlab</li>
            </ul>
          </div>
        </div>
        <div className={styles.background}>
          <h3>Background: <a href="http://eng.iate.obninsk.ru" target="_blank">IATE MEPHI</a></h3>
          <ul>
            <li><b>Faculty:</b> Institute of Intelligent Cybernetic Systems</li>
          </ul>
        </div>
      </main>
    </>
  )
}
export default IndexPage
