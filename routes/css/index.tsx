import { define } from "tools/utils.ts";

export const handler = define.handlers((ctx) => {
  return ctx.redirect("/css/scroll-container-snap-state");
});
