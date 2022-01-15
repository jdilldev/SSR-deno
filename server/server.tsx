import { Application, Router } from "https://deno.land/x/oak@v6.0.1/mod.ts";
import { React, ReactDOMServer, ReactDOM } from "../dep.ts";
import App from '../client/App.tsx'

const app = new Application();

const router = new Router();
router.get("/", handlePage);

app.use(router.routes());
app.use(router.allowedMethods());

console.log("server is running on http://localhost:8000/");
await app.listen({ port: 8000 });


// deno-lint-ignore no-explicit-any
function handlePage(ctx: any) {
    try {
        const body = ReactDOMServer.renderToString(<App />);
        ctx.response.body = `<!DOCTYPE html>
  <html lang="en" style="height:100vh; font-family:Avenir">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body style="background:cornflowerblue; display:flex;justify-content:center;align-items:center">
    <div id="root">${body}</div>
  </body>
  </html>`;
    } catch (error) {
        console.error(error);
    }
}