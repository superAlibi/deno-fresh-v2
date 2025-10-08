import { define } from "tools/utils.ts";
import { githubSignInCallback } from "tools/ky-auth.ts";

export const handler = define.handlers({
  async GET(ctx) {
    const { response } = await githubSignInCallback(ctx.req);
    return response;
  },
});
