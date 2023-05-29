import { GetStaticProps, NextPage } from 'next'
import { BLOCKED_PAGES } from 'next/dist/shared/lib/constants'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { blogdata } from '../data/blogdata'
import { client } from '../libs/client'
import Header from '../components/Header'
import home from '../styles/index.css'
import { Button } from '@mui/material'
export const getStaticProps:GetStaticProps=async()=>{
  const data= await client.get({endpoint: 'blog'});
  return{
    props:{
      blog:data.contents as blogdata[],
    },
    revalidate: 5,
  }
}
type Props={
  blog:blogdata[]
}
type titledata={
  kind1:string;
  kind2:string;
}
const Home:NextPage<Props>=({blog})=> {
  const blogtitle:titledata[]=blog.map((item:blogdata)=>({kind1:item.kind[0],kind2:item.kind2[0]} as titledata));
  const notDuplication:titledata[]=Array.from(
    new Map(blogtitle.map(item=>[item.kind1,item])).values()
  )
  return (
    <div>
      <Head>
        <title>TERUSIBLOG</title>
        <meta name="description" content="TERUSIのblogです" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <p className={home.aboutPage}>
        勉強したものを載せていきます。<br/>
        主に実技的なものを載せていきます。
      </p>
      <div className={home.containar}>
        <ol className={home.numberlist}>
            {notDuplication.map((item:titledata,index:number)=>(
              <li key={index} className={home.numberlist}>
                <Link href={`/kind/${item.kind2}`}>
                  <Button variant='text' sx={{fontSize:15,textAlign:'left'}}>{item.kind1}</Button>
                </Link>
              </li>
            ))}
        </ol>
      </div>
      
      </div>
  )
}
export default Home;