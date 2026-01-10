import { define } from "tools/utils.ts";

export const handler = define.handlers({
  GET(ctx) {
    if (new URL(ctx.req.url).host.includes("fresh.lucardo.website")) {
      throw new Response("https://fresh.luchador.dev", { status: 301 });
    }
    return ctx.next();
  },
});

export default define.page(function App({ Component }) {
  return (
    <html lang="zh-CN">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>云逸尘的fresh项目</title>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
});
