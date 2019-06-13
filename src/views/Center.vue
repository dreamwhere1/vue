<template>
  <div class="upm-setting f-pr" id="auto-id-1560418986793">
    <div class="upm-setting_header f-cb">
      <!--Regular if4-->
      <img
        class="upm-setting_header_img"
        src="//edu-image.nosdn.127.net/7c5a8d29-ce20-4f97-a3a6-49872772667d.png?imageView&amp;quality=100&amp;thumbnail=100y100"
        alt="头像"
      >
      <router-link class="upm-setting_login" to="/login">登录/注册</router-link>
    </div>

    <ul class="upm-setting_item_wrap upm-setting_items">
      <!--Regular list-->
      <!--inlcude-->
      <a href="javascript:;" target="_blank" class="upm-setting_link">
        <li class="upm-setting_item">
          <span class="iconfont icon-licai"></span>
          我的订单
          <span class="ux-ykt-icon-right-arrow f-fr"></span>
          <!--Regular if6-->
        </li>
      </a>

      <!--inlcude-->
      <a href="javascript:;" target="_blank" class="upm-setting_link">
        <li class="upm-setting_item">
          <span class="iconfont icon-lipinka"></span>
          我的优惠券
          <span class="ux-ykt-icon-right-arrow f-fr"></span>
          <!--Regular if7-->
        </li>
      </a>

      <!--inlcude-->
      <a href="javascript:;" target="_blank" class="upm-setting_link">
        <li class="upm-setting_item">
          <span class="iconfont icon-gwc"></span>
          我的购物车
          <span class="ux-ykt-icon-right-arrow f-fr"></span>
          <!--Regular if8-->
        </li>
      </a>

      <!--inlcude-->
      <a href="javascript:;" target="_blank" class="upm-setting_link">
        <li class="upm-setting_item">
          <span class="iconfont icon-baitiao"></span>
          我的学习卡
          <span class="ux-ykt-icon-right-arrow f-fr"></span>
          <!--Regular if9-->
        </li>
      </a>
    </ul>
    <div class="bar"></div>
    <ul class="upm-setting_item_wrap" id="auto-id-1560418986792">
      <!--Regular list-->
      <!--inlcude-->
      <a
        href="javascript:;"
        target="_blank"
        class="upm-setting_link"
        id="auto-id-1560418986791"
      >
        <li class="upm-setting_item" id="auto-id-1560418986790">
          <span class="iconfont icon-tuichu"></span>
          分享赚学费
          <span class="ux-ykt-icon-right-arrow f-fr"></span>
          <!--Regular if10-->
        </li>
      </a>

      <!--inlcude-->
      <a
        href="javascript:;"
        target="_blank"
        class="upm-setting_link"
        style="display: none;"
      >
        <li class="upm-setting_item">
          <span class="upm-setting_icon ux-ykt-icon-privacy"></span>
          隐私政策
          <span class="ux-ykt-icon-right-arrow f-fr"></span>
          <!--Regular if11-->
        </li>
      </a>
    </ul>
    <div class="void"></div>
  </div>
</template>

<style lang="scss" scoped>
.void{
  flex: 1;
  background: #f2f4f7;
}
.bar{
  height: 8px;
  background: #f2f4f7;
}
.iconfont{
  margin-left: -30px;
  margin-right: 15px;
  color: #aaa;
}
.upm-setting_item {
    height: 54px;
    line-height: 22px;
    font-size: 16px;
    color: #333333;
    box-sizing: border-box;
    padding: 16px 0;
    border-top: 1px solid #ddd;
    margin-left: 46px;
}
ul{
  a{
    color: #333;
    &:first-child{
      li{
        border-top: 0;
      }
    }
  }
}
.upm-setting_item_wrap {
  background: #fff;
}
.upm-setting_header_img {
    width: 55px;
    height: 55px;
    border-radius: 55px;
    margin-right: 13px;
    float: left;
}
.upm-setting_header {
  text-align: left;
  box-sizing: border-box;
  padding: 15px 0 15px 13px;
  background: #fff;
  overflow: hidden;
  a{
    line-height: 55px;
    float: left;
    display: block;
    font-size: 16px;
    color: #333;
  }
}
.upm-setting{
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
