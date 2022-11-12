import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { blogdata } from "../../data/blogdata";
import { client } from "../../libs/client";
type props={
  blog:blogdata
}
export const getStaticPaths:GetStaticPaths<Params>=async()=>{
  const data=await client.get({endpoint:"blog"});
  
  const paths=data.contents.map((content:blogdata)=>(`/blog/${content.id}`));
  console.log(paths)
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
      <h1>{blog.title}</h1>
      <p>作成日: {blog.createdAt}</p>
      <div dangerouslySetInnerHTML={{__html:`${blog.body}`}}></div>
    </div>
  );
}

export default Blog;