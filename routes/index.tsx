import { Head } from "fresh/runtime";
import { define } from "tools/utils.ts";
import { githubGetSessionId } from "tools/auth.ts";
import { cn } from "tools/css.ts";
export const handler = define.handlers({
  async GET(ctx) {
    const githubSessionId = await githubGetSessionId(ctx.req);
    ctx.state.githubSessionId = githubSessionId;
    // return ctx.next();
    return ctx;
  },
});
export default define.page(function Home({ Component, state }) {
  return (
    <div class="px-4  flex flex-col max-w-4xl mx-auto  min-h-screen">
      <Head>
        <title>首页-云逸尘的fresh项目</title>
      </Head>

      <div>
        欢迎您来到我的fresh项目, 当前登陆状态:{" "}
        {state.githubSessionId ? "已登陆" : "未登陆"}
      </div>

      <h3>本站技术栈</h3>
      <ul>
        <li>fresh</li>
        <li>tailwindcss</li>
        <li>daisyui</li>
        <li>typescript</li>
        <li>deno</li>
        <li>preact</li>
        <li>vite</li>
      </ul>
      <h3>css 相关</h3>
      <ul>
        <li>
          <a class={cn("link text-blue-500")} href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/At-rules/@view-transition">
            @view-transition
          </a>
        </li>
      </ul>
    </div>
  );
});
