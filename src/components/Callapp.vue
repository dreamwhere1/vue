<template>
  <div>
    <div class="weixinpart" id="j-wappart">
      <div class="m-callAppDownload f-pr">
        <img src="//nos.netease.com/test-edu-image/DD36C55C361EE4C337529D54A87CDD14.png" class="logoimg">
        <a class="appDownload" id="j-appDownload"></a>
      </div>
      <div class="bottomimg">
        <img src="//nos.netease.com/test-edu-image/B388CEF49EE6D5066CA08D25A6987AED.jpg">
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.weixinpart {
  min-height: 450px;
}
.m-callAppDownload {
  background-color: #21a557;
  position: relative;
  min-height: 400px;
  z-index: 10;
  .logoimg {
    width: 200px;
    margin: 0 auto;
    padding: 100px 0 100px;
    display: block;
    z-index: 10;
  }
  .appDownload {
    z-index: 10;
    height: 14.6%;
    width: 100%;
    position: absolute;
    top: 80%;
    background: url(//s.stu.126.net/res/images/mobile/ipHead.png?f17ac03…) no-repeat;
    background-size: contain;
  }
}
.bottomimg {
  z-index: 1;
  font-size: 0;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
}
</style>
