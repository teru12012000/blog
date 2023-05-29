import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { client } from "../../libs/client";
import { blogdata } from "../../data/blogdata";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { Button } from "@mui/material";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { kindPage, kindType } from "../../data/kind";
import Header from "../../components/Header";
import styleKingPage from "../../styles/blogkind.css";
import Back from "../../components/Back";
export const getStaticPaths:GetStaticPaths<Params>=async()=>{
  const paths=kindPage.map((content:kindType)=>(`/kind/${content.kind}`));
  return {
    paths,
    fallback:false,
  }
}
export const getStaticProps:GetStaticProps=async()=>{
  const data= await client.get({endpoint: 'blog'});
  return{
    props:{
      blog:data.contents,
    },
    revalidate: 5,
  }
}
type Props={
  blog:blogdata[]
}
const PageList:NextPage<Props> = ({blog}) => {
  const {page}=useRouter().query;
  const pageData:blogdata[]=blog.filter((item:blogdata)=>item.kind2[0]===page);
  pageData.sort((x,y)=>{
    const dateA=new Date(x.createdAt);
    const dateB=new Date(y.createdAt);
    return dateA>dateB?1:-1;
  })
  return (
    <>
      <Head>
        <title>{page as string}</title>
        <meta name="description" content={`${page as string}のページです。`} />
      </Head>
      <Header/>
      <Back 
        link='/'
      />
      <main>
        <h2 className={styleKingPage.aboutPage}>{pageData[0].kind[0] as string}</h2>
        <div className={styleKingPage.containar}>
          <ol className={styleKingPage.numberlist}>
            {pageData.map((item:blogdata,index:number)=>(
              <li key={index}>
                <Link href={`/blog/${item.id}`}>
                  <Button variant="text" sx={{fontSize:15,textAlign:"left"}}>
                    {item.title}
                  </Button>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </main>
    </>
  );
}

export default PageList;