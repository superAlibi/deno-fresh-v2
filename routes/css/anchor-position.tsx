import { define } from "tools/utils.ts";
import { cn } from "tools/css.ts";

export default define.page(function AnchorPosition() {
  return (
    <div>
      <h1>锚点定位能力</h1>
      参考连接
      <ul>
        <li>
          <a
            class={cn("link t")}
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Anchor_positioning/Using"
          >
            使用锚点定位
          </a>
        </li>
        <li>
          <a
            class={cn("link t")}
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/anchor"
          >
            anchor() 函数
          </a>
        </li>
      </ul>
    </div>
  );
});
