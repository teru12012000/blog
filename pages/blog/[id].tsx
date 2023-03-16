import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Head from "next/head";
import Back from "../../components/Back";
import Header from "../../components/Header";
import { blogdata } from "../../data/blogdata";
import { client } from "../../libs/client";
import blogstyle from "../../styles/blogpage.css";
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/vs2015.css';
import { useEffect } from "react";
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
  const dataleng:number=blog.body.length;
  useEffect(()=>{
    console.log(dataleng);
    hljs.highlightAll();
  },[])
  
  return (
    <div>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.detail} />
      </Head>
      <Header/>
      <Back/>
      <div className={blogstyle.content}>
        <div style={{textAlign:"center"}}>
          <h1>{blog.title}</h1>
          <p>作成日: {blog.createdAt}</p>
        </div>
        <div style={{boxShadow:"0px 0px 5px",}}>
        
          {[...Array(dataleng)].map((_,index:number)=>(
            <div key={index} style={{margin:"10px"}}>
              <div dangerouslySetInnerHTML={{__html:`${blog.body[index].body}`}}></div>
              <pre style={{width:"30%"}}><code className={blog.langage[index].langage}>{blog.code[index].code}</code></pre>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;