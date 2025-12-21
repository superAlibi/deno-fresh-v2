import { define } from "tools/utils.ts";
import { cn } from "tools/css.ts";
import { Head } from "fresh/runtime";
import { asset } from "fresh/runtime";
export default define.page(function ScrollBar() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href={asset("/css/scroll-bar.css")} />
        <title>滚动条颜色</title>
      </Head>
      <main
        className={cn(
          "contain-inline-size overflow-y-hidden",
        )}
      >
        <h1>滚动条颜色 2025</h1>
        <article
          className={cn(
            "scroll-bar-container  overflow-y-auto h-[100cqi] bg-base-200",
          )}
        >
          <pre>
            {`
  .scroll-bar-container {
      scrollbar-width: thin;
      scrollbar-color: blue blueviolet;
  }
            `}
          </pre>
          <p className="relative h-[300cqi] bg-base-300">
            <span className="sticky top-0 left-0 bg-base-200">
              这是很长的一段内容的容器
            </span>
          </p>
        </article>
      </main>
    </>
  );
});
