export type bodytype={
  fieldId:string;
  body:string;
}
export type codetype={
  fieldId:string;
  code:string;
}
export type languagetype={
  fieldId:string;
  langage:string[];
}
export type blogdata={
  id:string;
  createdAt: string;
  updatedAt: string;
  publishedA: string;
  revisedAt: string;
  title:string;
  body:bodytype[];
  detail:string;
  code:codetype[];
  langage:languagetype[]
}