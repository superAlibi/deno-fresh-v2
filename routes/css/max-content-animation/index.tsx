import { define } from "tools/utils.ts";
import { cn } from "tools/css.ts";
import { Head } from "fresh/runtime";
import { asset } from "fresh/runtime";
export default define.page(function MaxContentAnimation() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href={asset("/css/not-interpolate-size-max-content-animation.css")}
        />
      </Head>
      <main
        className={cn(
          "max-w-[100cqi] @container/main contain-inline-size mx-auto",
        )}
      >
     
        <div class={cn("size-[100cqi] flex gap-4")}>
          <section
            tabIndex={0}
            className={cn(
              "h-[calc(var(--size-field)*10)] overflow-hidden focus-within:h-auto hover:h-auto transition-all duration-300",
            )}
          >
            <button class={cn("btn btn-primary peer")} type="button">
              写法1
            </button>
            <main>
              <p>Tanuki is the silent phantom of MDN.</p>
              <ul>
                <li>
                  <strong>Height</strong>: 3.03m
                </li>
                <li>
                  <strong>Weight</strong>: 160kg
                </li>
                <li>
                  <strong>Tech Fu</strong>: 7
                </li>
                <li>
                  <strong>Bad Jokes</strong>: 9
                </li>
              </ul>
            </main>
          </section>
          <section
            tabIndex={0}
          >
            <button class={cn("btn btn-primary peer")} type="button">
              写法2
            </button>
            <main
              className={cn(
                "h-0 overflow-hidden peer-focus:h-auto peer-hover:h-auto transition-all duration-300",
              )}
            >
              <p>Tanuki is the silent phantom of MDN.</p>
              <ul>
                <li>
                  <strong>Height</strong>: 3.03m
                </li>
                <li>
                  <strong>Weight</strong>: 160kg
                </li>
                <li>
                  <strong>Tech Fu</strong>: 7
                </li>
                <li>
                  <strong>Bad Jokes</strong>: 9
                </li>
              </ul>
            </main>
          </section>
        </div>
      </main>
    </>
  );
});
