import { Head } from "fresh/runtime";
import { define } from "tools/utils.ts";
import { FaGithub, FaSignOutAlt } from "react-icons/fa";
import { githubGetSessionId } from "tools/auth.ts";
export const handler = define.handlers({
  async GET(ctx) {
    const githubSessionId = await githubGetSessionId(ctx.req);
    ctx.state.githubSessionId = githubSessionId;
    // return ctx.next();
    return ctx;
  },
});
export default define.page(function Home(ctx) {
  return (
    <div class="px-4 py-8 flex flex-col max-w-3xl mx-auto  min-h-screen">
      <Head>
        <title>云逸尘的fresh项目</title>
      </Head>
      <header className="flex items-center justify-between mb-8 gap-10">
        <div className="navbar bg-base-100 shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li>
                  <a href="https://notes.lucardo.website">笔记</a>
                </li>
                <li>
                  <a href="https://remix.lucardo.website">博客案例</a>
                </li>
                <li>
                  <a href="https://github.com/superAlibi">
                    <FaGithub size={24} />
                  </a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">fresh 案例</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a href="https://notes.lucardo.website">笔记</a>
              </li>
              <li>
                <a href="https://remix.lucardo.website">博客案例</a>
              </li>
              <li>
                <a href="https://github.com/superAlibi">
                  github <FaGithub size={24} />
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            {ctx.state.githubSessionId
              ? (
                <a
                  title="Sign out"
                  href="/api/oauth/signout"
                  class="btn btn-square rounded-full"
                >
                  <FaSignOutAlt size={24} />
                </a>
              )
              : (
                <a
                  title="使用 GitHub 登录"
                  href="/api/oauth/signin"
                  type="button"
                  className="btn btn-outline "
                >
                  login with GitHub
                  {/* <FaGithub size={24} /> */}
                </a>
              )}
          </div>
        </div>
      </header>
      <div>内容部分</div>
    </div>
  );
});
