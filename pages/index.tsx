import { GetStaticProps } from 'next'
import { BLOCKED_PAGES } from 'next/dist/shared/lib/constants'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { blogdata } from '../data/blogdata'
import { client } from '../libs/client'
import Header from '../components/Header'
import home from '../styles/index.css'
import { kindPage } from '../data/kind'
export default function Home() {
  return (
    <div>
      <Head>
        <title>TERUSIBLOG</title>
        <meta name="description" content="TERUSIのblogです" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <p>
        勉強したものを載せていきます。<br/>
        主に実技的なものを載せていきます。
      </p>
      <div className={home.li}>
          {kindPage.map((item,index)=>(
            <div key={index} >
              <Link href={`/kind/${item.kind[0]}`} className={home.inlink}>
                <h2 className={home.title}>{item.name}</h2>
              </Link>
            </div>
          ))}
      </div>
      
      </div>
  )
}
