import { define } from "tools/utils.ts";
import { ThemeTrigger } from "islands/theme-trigger.tsx";
import { FaGithub, FaSignOutAlt } from "react-icons/fa";

export default define.layout(function cssNavLayout({ Component, state }) {
  return (
    <div class="px-4  flex flex-col max-w-4xl mx-auto  min-h-screen">
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
            <a href="/" className="btn btn-ghost text-xl">fresh 案例</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <details>
                  <summary>css 案例</summary>
                  <ul className="bg-base-100 rounded-t-none p-2">
                    <li>
                      <a href="/css" className="whitespace-nowrap">
                        滚动和锚点
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a href="https://github.com/superAlibi">
                  github逛逛<FaGithub size={20} />
                </a>
              </li>
              <li>
                <details>
                  <summary>其他站点</summary>
                  <ul className="bg-base-100 rounded-t-none p-2">
                    <li>
                      <a
                        href="https://notes.lucardo.website"
                        className="whitespace-nowrap"
                      >
                        博客&笔记
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://remix.lucardo.website"
                        className="whitespace-nowrap"
                      >
                        react-router 7
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            {state.githubSessionId
              ? (
                <a
                  title="Sign out"
                  href="/api/oauth/signout"
                  class="btn btn-square rounded-full"
                >
                  退出登录<FaSignOutAlt size={24} />
                </a>
              )
              : (
                <a
                  title="使用 GitHub 登录"
                  href="/api/oauth/signin"
                  type="button"
                  className="btn btn-outline "
                >
                  使用 GitHub 登录
                  {/* <FaGithub size={24} /> */}
                </a>
              )}
          </div>
        </div>
      </header>
      <Component />
    </div>
  );
});
