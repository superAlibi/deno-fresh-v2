import { define } from "tools/utils.ts";

export default define.layout(function cssNavLayout({ Component }) {
  return (
    <div>
      <Component />
    </div>
  );
});
