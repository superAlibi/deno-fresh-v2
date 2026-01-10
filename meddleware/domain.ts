import { define } from "tools/utils.ts";

export const domainMiddleware = define.middleware((ctx) => {
  console.log("host is", new URL(ctx.req.url).host);
  if (new URL(ctx.req.url).host.includes("fresh.lucardo.website")) {
    return ctx.redirect("https://fresh.luchador.dev", 301);
  }
  return ctx.next();
});
