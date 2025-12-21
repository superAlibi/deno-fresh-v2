import { define } from "tools/utils.ts";
import { Head } from "fresh/runtime";
import { asset } from "fresh/runtime";
export default define.page(function StartAnimation() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href={asset("/css/start-nimation.css")} />
      </Head>
      <main>
        <h1 className="text-2xl font-bold">
          @staring-style 用于开场初始动画的作用
        </h1>
        <ul>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@starting-style">
              @starting-style
            </a>
          </li>
        </ul>
        <div className="container">
          <p>This is a container</p>
        </div>
      </main>
    </>
  );
});
