import { asset, Head } from "fresh/runtime";
import { define } from "tools/utils.ts";
import { cn } from "tools/css.ts";

import { images } from "data/static.ts";

export default define.page(function Home() {
  return (
    <main
      className={cn(
        "max-w-[100cqi] overflow-hidden @container/main contain-inline-size",
      )}
    >
      <Head>
        <link rel="stylesheet" href={asset("/css/scroll-mark.css")} />
      </Head>
      <h3 className="text-center text-2xl font-bold mb-4">
        每次滚动, 都有一张图片在滚动区域的最中间
      </h3>
      <ul
        class={cn(
          // 引用的css文件使用的class
          "snap-x-container",
          // base
          "overflow-x-auto flex items-center gap-4 snap-x snap-mandatory scroll-smooth contain-size",
          // 移动端
          "size-[100cqi]",
          // 平板或以上
          "md:h-[400px] lg:w-full ",
        )}
      >
        {images.map((image, index) => (
          <li
            key={index}
            tabIndex={index}
            className={cn(
              // base
              "shrink-0 bg-white/30 relative  rounded-xl @container/item last:mr-[30cqb] first:ml-[30cqb]",
              " size-[40cqb] aspect-square",
              " snap-center snap-always",
            )}
          >
            <img
              src={image.src}
              alt={image.alt}
            />
          </li>
        ))}
      </ul>
    </main>
  );
});
