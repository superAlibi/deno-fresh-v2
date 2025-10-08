import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import { Car } from "lucide-react";
import { FaBeer } from "react-icons/fa";
export default define.page(function Home(ctx) {
  console.log("Shared value " + ctx.state.shared);

  return (
    <div class="px-4 py-8 mx-auto fresh-gradient min-h-screen">
      <Head>
        <title>Fresh counter</title>
      </Head>
      <button
        type="button"
        className="btn btn-primary rounded-full"
      >
        <Car />
        <FaBeer />
      </button>
    </div>
  );
});
