import { asset, Head } from "fresh/runtime";
import { define } from "tools/utils.ts";

export default define.page(function Cards(ctx) {
  return (
    <>
      <Head>
        {/* <link rel="stylesheet" href={asset("/css/ope-prop.css")} /> */}
        <link rel="stylesheet" href={asset("/css/utilities.carousel.css")} />
        <link rel="stylesheet" href={asset("/css/cards.css")} />
      </Head>

      <section class="@container contain-inline-size">
        <header>
          <h2>横向卡片</h2>
          <div class="tags">
            <span>滚动按钮</span>
            <span>滚动标记</span>
            <span>滚动状态查询</span>
            <span>滚动初始目标</span>
            <span>锚点</span>
            <span>全出血</span>
          </div>
          <p>按钮和标记都锚定到底部</p>
        </header>

        <div role="region" aria-label="卡片轮播演示">
          <div
            class=" carousel carousel--scroll-markers carousel--scroll-buttons carousel--offscreen-inert"
            aria-live="polite"
          >
            <div class="carousel__slide" data-label="赛博跳跃者">
              <article class="card snapped">
                <figure>
                  <picture>
                    <img
                      src="https://assets.codepen.io/2585/Roboto.svg"
                      alt="一幅黑白线条画，描绘了一个穿着夹克、裤子和头盔的未来主义人物大步向前"
                      height="500"
                      width="500"
                    />
                  </picture>
                  <figcaption>
                    <h5>赛博跳跃者</h5>
                    <p>
                      探索未来世界的冒险之旅，体验科技与人类智慧的完美结合。
                    </p>
                    <a href="#">查看详情</a>
                  </figcaption>
                </figure>
              </article>
            </div>

            <div class="carousel__slide" data-label="即兴漫步">
              <article class="card">
                <figure>
                  <picture>
                    <img
                      src="https://assets.codepen.io/2585/Entertainment.svg"
                      alt="一幅黑白画，描绘了一个卷发的人，穿着夹克和裤子，手里拿着一个看起来像小型媒体播放器的设备"
                      height="500"
                      width="500"
                    />
                  </picture>
                  <figcaption>
                    <h5>即兴漫步</h5>
                    <p>
                      享受音乐带来的自由与快乐，让节奏引领你的每一步。
                    </p>
                    <a href="#">查看详情</a>
                  </figcaption>
                </figure>
              </article>
            </div>

            <div class="carousel__slide" data-label="机械之爱">
              <article class="card scroll-start">
                <figure>
                  <picture>
                    <img
                      src="https://assets.codepen.io/2585/Mechanical+Love.svg"
                      alt="一幅黑白画，描绘了两个人并排站着，互相拥抱，都背着背包"
                      height="500"
                      width="500"
                    />
                  </picture>
                  <figcaption>
                    <h5>机械之爱</h5>
                    <p>
                      在科技与情感的交汇处，发现人与人之间最真挚的连接。
                    </p>
                    <a href="#">查看详情</a>
                  </figcaption>
                </figure>
              </article>
            </div>

            <div class="carousel__slide" data-label="耐心等待">
              <article class="card">
                <figure>
                  <picture>
                    <img
                      src="https://assets.codepen.io/2585/Waiting.svg"
                      alt="一幅黑白画，描绘了一个盘腿坐着的人"
                      height="500"
                      width="500"
                    />
                  </picture>
                  <figcaption>
                    <h5>耐心等待</h5>
                    <p>
                      在宁静中寻找内心的平衡，学会在等待中发现生活的美好。
                    </p>
                    <a href="#">查看详情</a>
                  </figcaption>
                </figure>
              </article>
            </div>

            <div
              class="carousel__slide"
              data-label="新的开始是美好的"
            >
              <article class="card">
                <figure>
                  <picture>
                    <img
                      src="https://assets.codepen.io/2585/New+Beginnings.svg"
                      alt="一幅黑白画，描绘了一个人坐在扶手椅上读书，椅子上有连接到这个人的电线"
                      height="500"
                      width="500"
                    />
                  </picture>
                  <figcaption>
                    <h5>新的开始是美好的</h5>
                    <p>
                      每一次新的开始都蕴含着无限可能，让我们以开放的心态拥抱变化，在知识的海洋中不断探索，发现真理与智慧的光芒。
                    </p>
                    <a href="#">查看详情</a>
                  </figcaption>
                </figure>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});
