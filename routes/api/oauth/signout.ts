import { define } from "tools/utils.ts";
import { githubSignOut } from "tools/ky-auth.ts";

export const handler = define.handlers({
  GET(ctx) {
    return githubSignOut(ctx.req);
  },
});
