import { define } from "tools/utils.ts";

import { HeaderNavbar, MenuItem } from "../components/header-nav.tsx";
/**
 * 菜单配置
 */
const menus: MenuItem[] = [
  {
    label: "案例",
    children: [
      {
        label: "滚动和锚点",
        href: "/css",
      },
      {
        label: "滚动和状态",
        href: "/css/cards",
      },
      {
        label: "webrtc",
        href: "/webrtc",
      },
    ],
  },

  {
    label: "其他站点",
    children: [
      {
        label: "博客&笔记",
        href: "https://notes.lucardo.website",
      },
      {
        label: "react-router 7",
        href: "https://remix.lucardo.website",
      },
    ],
  },
  {
    label: (
      <>
        github逛逛
      </>
    ),
    href: "https://github.com/superAlibi",
  },
];
export default define.layout(function cssNavLayout({ Component, state }) {
  return (
    <div class="px-4  flex flex-col max-w-4xl mx-auto @container/layout min-h-screen">
      <header className="flex items-center justify-between mb-8 gap-10">
        <HeaderNavbar state={state} menus={menus} />
      </header>
      <Component />
    </div>
  );
});
