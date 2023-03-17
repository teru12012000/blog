import { GetStaticProps } from 'next'
import { BLOCKED_PAGES } from 'next/dist/shared/lib/constants'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { blogdata } from '../data/blogdata'
import { client } from '../libs/client'
import Header from '../components/Header'
import home from '../styles/index.css'
//SSG
export const getStaticProps:GetStaticProps=async()=>{
  const data= await client.get({endpoint: 'blog'});
  return{
    props:{
      blog:data.contents,
    }
  }
}
type Props={
  blog:blogdata[]
}

export default function Home({blog}:Props) {
  return (
    <div>
      <Head>
        <title>TERUSIBLOG</title>
        <meta name="description" content="TERUSIのblogです" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <h2 className={home.h2}>MENU</h2>
      <div className={home.li}>
          {blog.map((item,index)=>(
            <div key={index} >
              <Link href={`/blog/${item.id}`} className={home.inlink}>
                <h2 className={home.title}>{item.title}</h2>
              </Link>
            </div>
          ))}
      </div>
      
      </div>
  )
}
