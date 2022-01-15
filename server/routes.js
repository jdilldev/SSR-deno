import { Router } from 'https://deno.land/x/oak/mod.ts';
import { ReactDOMServer, React } from "../dep.ts";

const router = new Router();


router.get("/", (context) => {
    const body = ReactDOMServer.renderToString(<div>hi</div>);

    context.response.body =
        `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body >
    <div id="root">${body}</div>
  </body>
  </html>`;
});

export default router;