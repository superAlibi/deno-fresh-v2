import { Head } from "fresh/runtime";
import { define } from "tools/utils.ts";
import { Car, Link } from "lucide-react";
import { FaBeer } from "react-icons/fa";
import { FaGithub, FaSignOutAlt } from "react-icons/fa";
export default define.page(function Home(ctx) {
  console.log("nikename", ctx.state.nikeName, "deviceId", ctx.state.deviceId);

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
