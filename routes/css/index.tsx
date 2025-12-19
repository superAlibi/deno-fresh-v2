import { asset, Head } from "fresh/runtime";
import { define } from "tools/utils.ts";

const images = Array.from(
  { length: 6 },
  (_, index) => asset(`images/snap${index + 1}.jpeg`),
);
export default define.page(function Home(ctx) {
  return (
    <main>
      <Head>
        <link rel="stylesheet" href={asset("css/index.css")} />
      </Head>
      <h3 className="text-center text-2xl font-bold">
        每次滚动, 都有一张图片在滚动区域的最中间
      </h3>
      <ul class="snap-x-container flex gap-4 max-w-[800px] mx-auto overflow-x-auto p-4 snap-x snap-mandatory scroll-smooth">
        {images.map((image, index) => (
          <li
            key={index}
            className="h-40 aspect-2/1 snap-center first:ml-80 last:mr-80"
          >
            <img className="h-full " src={image} alt={`snap-${index + 1}`} />
          </li>
        ))}
      </ul>
    </main>
  );
});
