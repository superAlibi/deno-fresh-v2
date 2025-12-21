import { define } from "tools/utils.ts";
import { cn } from "tools/css.ts";
import { Head } from "fresh/runtime";
import { asset } from "fresh/runtime";
export default define.page(function AnimationTimeline() {
  const meta = "云逸尘的fresh项目";
  return (
    <>
      <Head>
        <link rel="stylesheet" href={asset("/css/animation-timeline.css")} />
      </Head>
      <main
        className={cn(
          " overflow-hidden ",
        )}
      >
        <h1>滚动时间线</h1>
        <div
          className={cn(
            "size-[80cqi] mx-auto overflow-hidden",
          )}
        >
          <ul
            className={cn(
              "scroll-container overflow-y-auto relative flex flex-col gap-2 h-full",
              "flex flex-col gap-2 items-center mx-auto @container/list contain-inline-size ",
              "snap-y snap-mandatory scroll-smooth",
            )}
          >
            {Array.from(meta).map((char, index) => (
              <li
                key={index}
                className={cn(
                  "size-[90cqi] bg-accent-content  flex items-center justify-center  shrink-0",
                  "snap-center snap-always",
                )}
              >
                <h2 className={cn("text-4xl font-bold")}>{char}</h2>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
});
