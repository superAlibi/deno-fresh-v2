import { define } from "tools/utils.ts";

export const domainMiddleware = define.middleware((ctx) => {
  console.log("host is", new URL(ctx.req.url).host);
  if (new URL(ctx.req.url).host.includes("fresh.lucardo.website")) {
    throw new Response("https://fresh.luchador.dev", { status: 301 });
  }
  return ctx.next();
});