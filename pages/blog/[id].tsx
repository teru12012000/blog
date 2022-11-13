import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Head from "next/head";
import Back from "../../components/Back";
import Header from "../../components/Header";
import { blogdata } from "../../data/blogdata";
import { client } from "../../libs/client";
import blogstyle from "../../styles/blogpage.css";
type props={
  blog:blogdata
}
export const getStaticPaths:GetStaticPaths<Params>=async()=>{
  const data=await client.get({endpoint:"blog"});
  
  const paths=data.contents.map((content:blogdata)=>(`/blog/${content.id}`));
  return {
    paths,
    fallback:false,
  }
}
export const getStaticProps:GetStaticProps<props,Params>=async(context)=>{
  
  const id=context.params?.id;
  const data=await client.get({
    endpoint:"blog",
    contentId: id,
  })
  return{
    props:{
      blog:data,
    }
  }
   
}


const Blog:NextPage<props> = ({blog}) => {
  return (
    <div>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.detail} />
      </Head>
      <Header/>
      <Back/>
      <div className={blogstyle.content}>
        <h1>{blog.title}</h1>
        <p>作成日: {blog.createdAt}</p>
        <div dangerouslySetInnerHTML={{__html:`${blog.body}`}}></div>
      </div>
    </div>
  );
}

export default Blog;