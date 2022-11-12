import { createClient } from "microcms-js-sdk";

export const client=createClient({
  serviceDomain: "terushiblog",
  apiKey:process.env.API_KEY||'',
});


