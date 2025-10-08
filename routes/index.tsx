import { Head } from "fresh/runtime";
import { define } from "tools/utils.ts";
import { FaGithub, FaSignOutAlt } from "react-icons/fa";
import { Button } from "@headlessui/react";
export default define.page(function Home() {
  return (
    <div class="px-4 py-8 mx-auto fresh-gradient min-h-screen">
      <Head>
        <title>云逸尘的fresh项目</title>
      </Head>

      <a
        title="Sign in with GitHub"
        href="/api/oauth/signin"
        type="button"
        className="btn btn-square rounded-full"
      >
        <FaGithub size={24} />
      </a>
      <Button className="rounded bg-sky-600 px-4 py-2 text-sm text-white data-hover:bg-sky-500 data-hover:data-active:bg-sky-700">
        日内瓦
      </Button>
      <a
        title="Sign out"
        href="/api/oauth/signout"
        class="btn btn-square rounded-full"
      >
        <FaSignOutAlt size={24} />
      </a>
    </div>
  );
});
