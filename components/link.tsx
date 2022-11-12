import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Link from "next/link";
import { FC, ReactNode } from "react";
import { link, SNSLink } from "../data/linkdata";
import linkstyle from "./styles/link.css";
type Props={
  link:link[];
  children:ReactNode[];
}

const Headerlink:FC<Props> = ({link,children}) => {
  return (
    <div>
      {link.map((item,index)=>(
        <div key={index} className={linkstyle.li}>
          <Link href={item.link} className={linkstyle.link}>
            {children[index]}<br/>
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Headerlink;