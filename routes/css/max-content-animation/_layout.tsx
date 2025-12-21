import { define } from "tools/utils.ts";
import { cn } from "tools/css.ts";
export default define.layout(function MaxContentAnimationLayout({ Component }) {
  return (
    <div className="max-w-4xl mx-auto">
      <nav>
        <ul className={cn("menu menu-horizontal")}>
          <li>
            <a
              className={cn("link target:bg-amber-100 hover:bg-amber-100")}
              href="/css/max-content-animation"
            >
              没有使用interpolate-size
            </a>
          </li>
          <li>
            <a
              className={cn("link target:bg-amber-100 hover:bg-amber-100")}
              href="/css/max-content-animation/interpolate-size"
            >
              使用了interpolate-size
            </a>
          </li>
        </ul>
      </nav>
      <p>
        此部分内容解决了什么问题:

        一般来说, 在一个高度不确定的元素和和高度为0之间的过渡动画,
        通过纯css是做不到的 但是问题在与高度也不确定的情况下.
        需要实现这两个高度之间的切换. 需要使用js来实现.

        现在可以通过纯css来实现这个效果了. 只需要使用interpolate-size属性.
      </p>
      <h3>参考连接</h3>
      <ul>
        <li>
          <a
            class={cn("link")}
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/interpolate-size"
          >
            interpolate-size
          </a>
        </li>
      </ul>
      <Component />
    </div>
  );
});
