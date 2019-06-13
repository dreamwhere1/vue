<template>
  <div
    class="ux-login-set-wap"
    style="background-image: url(&quot;//edu-image.nosdn.127.net/85c3396e-3851-4c1a-ad4b-d1e062ad53f2.png?imageView&amp;quality=100&quot;);"
  >
    <div class="ux-login-set-wap-topwrap f-pr">
      <div class="ux-login-set-wap-top f-pa">
        <img
          src="//edu-image.nosdn.127.net/c26ea87a-f364-4b52-97d0-dce9851d7761.png?imageView&amp;quality=100"
        >
        <div class="btn-wrap f-cb">
          <a class="f-fl btn-main" href="javascript:;">手机号登录</a>
          <a class="f-fl btn-main" href="javascript:;">手机号快捷注册</a>
        </div>
      </div>
    </div>
    <div class="ux-login-set-wap-bottom">
      <div class="sep f-pr">
        <div class="line"></div>
        <div class="huo">其他方式登录</div>
        <div class="line"></div>
        <div class="other f-pa" style="display: none;"></div>
      </div>
      <div class="third-bind third" id="j-thirdWays">
        <a class="btn-bottom" href="javascript:;">
          <span
            class="f-ib icon"
            style="background-image: url(&quot;//edu-image.nosdn.127.net/8d0ce296-9f92-4f3b-b6fe-8d727a323064.png?imageView&amp;quality=100&quot;);"
          ></span>
          <p>邮箱</p>
        </a>
        <a class="btn-bottom" href="javascript:;">
          <span
            class="f-ib icon"
            style="background-image: url(&quot;//edu-image.nosdn.127.net/15c811d3-6a3d-459b-b100-3f4eb776b2c2.png?imageView&amp;quality=100&quot;);"
          ></span>
          <p>微博</p>
        </a>
        <a class="btn-bottom" href="javascript:;">
          <span
            class="f-ib icon"
            style="background-image: url(&quot;//edu-image.nosdn.127.net/9bd019b4-f657-4674-8550-212d47128d60.png?imageView&amp;quality=100&quot;);"
          ></span>
          <p>QQ</p>
        </a>
        <a class="btn-bottom" href="javascript:;">
          <span
            class="f-ib icon"
            style="background-image: url(&quot;//edu-image.nosdn.127.net/84c18e49-200b-440d-a15c-db363e4b132d.png?imageView&amp;quality=100&quot;);"
          ></span>
          <p>人人</p>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn-bottom {
  flex: 1;
  text-align: center;
  .icon {
    display: inline-block;
    background-size: 100% 100%;
    height: 42px;
    width: 42px;
    margin-bottom: 5px;
  }
  p {
    color: #3C4A55;
    font-size: 12px;
  }
}
.third-bind {
  display: flex;
  width: 87%;
  margin: 0 auto;
}
.huo {
  color: #A4A9B2;
  padding: 0 20px;
  font-size: 13px;
}
.line {
  height: 1px;
  background: #A4A9B2;
  flex: 1;
  margin-top: 8px;
}
.sep {
  display: flex;
  width: 80%;
  margin: 0 auto 20px;
}
.ux-login-set-wap-bottom {
  height: 160px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
.btn-main {
  &:first-child{
    color: #fff;
    background: #2CC17B;
  }
  box-sizing: border-box;
  display: inline-block;
  width: 100%;
  height: 44px;
  line-height: 44px;
  margin-top: 20px;
  border: 1px solid #2CC17B;
  border-radius: 3px;
  text-align: center;
  font-size: 15px;
  color: #2CC17B;
}
.ux-login-set-wap {
  position: fixed;
  box-sizing: border-box;
  width: 100%;
  padding: 26px 5% 0;
  background-size: 100% 100%;
  bottom: 0;
  top: 0;
}
.ux-login-set-wap-topwrap {
  height: 70%;
  position: relative;
}
.ux-login-set-wap-top {
  width: 100%;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  img {
    height: 90px;
    width: 90px;
    max-width: 57%;
    margin: 0 auto 30px;
  }
}
</style>
