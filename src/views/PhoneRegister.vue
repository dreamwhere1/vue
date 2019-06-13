<template>
  <div class="g-content">
    <div class="g-main">
      <div class="m-classLogin f-f0" id="j-mobile-tel-register">
        <div class="inputbox">
          <!--Regular if0-->
          <div class="u-logo">
            <div class="u-logo-img3 " >
                <a href="#" class="iconfont icon-shouji"></a>
            </div>
          </div>
          <div class="u-input box">
            <input
              type="tel"
              maxlength="11"
              spellcheck="false"
              tabindex="1"
              autocomplete="off"
              class="dlemail j-nameforslide"
              name="email"
              placeholder="请输入手机号"
              id="phoneipt"
            >
          </div>
          <div class="u-tip">
            <div class="u-success u-clear"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="ckbox m-ckcnt slidebox f-cb" id="auto-id-1560239040638" style="position: relative;"></div>
    <div class="m-pccnt f-cb">
      <div class="m-pcbox">
        <div class="inputbox3 m-mb m-pc f-fl">
          <div class="u-input">
            <input
              type="tel"
              autocomplete="off"
              spellcheck="false"
              tabindex="5"
              maxlength="6"
              data-max-length="6"
              class="j-inputtext pcin"
              name="phonecode"
              placeholder="请输入短信验证码"
            >
          </div>
          <div class="u-tip">
            <div class="u-success u-clear"></div>
          </div>
        </div>
        <div class="pcbtn f-fl">
          <a class="tabfocus " >获取验证码</a>
        </div>
      </div>
    </div>
    <div class="inputbox">
    <div class="u-logo">
    <div class="u-logo-img2">
        <a href="#" class="iconfont icon-suo"></a>
   </div>
   </div>
    <div class="u-input box">
        <input type="password" spellcheck="false" tabindex="6" autocomplete="new-password" class="j-inputtext dlemail" name="email" placeholder="请输入密码" id="auto-id-1560239040641">
    </div>
        <div class="u-tip" style="display: none;"><div class="u-success u-clear"></div></div>

</div>
<div class="f-cb loginbox">
        <a tabindex="8" id="submitBtn" class="u-loginbtn btncolor tabfocus">注 册</a>
    </div>
    <div class="fur-item fur-agree">
        <label id="auto-id-1560239040644">
            <!--Regular if7-->
            <span class="u-zc-agree u-zc-agree-select"><input type="checkbox" class="zc-un-login" id="auto-id-1560239040642">
            </span> 我同意<a data-outlink="1" tabindex="-1" target="_blank" href="//reg.163.com/agreement_mobile.shtml">《服务条款》</a> 和 <a data-outlink="1" tabindex="-1" target="_blank" href="//reg.163.com/agreement_mobile_ysbh.shtml" id="auto-id-1560239040643">《网易隐私政策》</a>
        </label>
    </div>
  </div>
</template>
<script>
export default {
  data: () => {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.g-content {
  min-height: 100%;
  position: relative;
  padding: 30px 0 0 0;
  height: 407px;
}
.inputbox {
  width: 333px;
  border-radius: 2px;
  height: 44px;
  line-height: 44px;
  position: relative;
  border: 1px solid #c5cddb;
  background: #fff;
  font-size: 12px;
  margin: 12px auto;
}
.m-mb ,.inputbox3{
  border: 0;
}

.u-input input {
  width: 206px;
  height: 44px;
  line-height: 44px;
  border: 0;
  padding: 0;
  padding-left: 5px;
  box-sizing: border-box;
  font-size: 14px;
}
.u-logo {
  float: left;
  width: 21px;
  text-align: center;
  padding-left: 10px;
}
.u-logo .u-logo-img3 {

  background-position: 0 -78px;

}
.u-logo-img3 a{
     font-size:16px;
}
 .m-pccnt {
    margin-top: 30px;
}
.m-pcbox{
  width:330px;
  height: 46px;
  position: relative;
  margin:20px auto;
}
 .m-pccnt .inputbox {
    width: 333px;
    border-radius: 2px;
    height: 44px;
    line-height: 44px;
}
 .pcbtn {
    width: 108px;
    position: absolute;
    top: 0;
    right: 0;
    border: 1px solid #2CC17B;
    height: 44px;
    line-height: 44px;
}
.tabfocus{
    width: 100%;
    height: 44px;
    line-height: 44px;
    display: block;
    text-align: center;
     color: #2CC17B;
     font-size: 14px;

}
.m-pccnt .u-input{
    width: 207px;
    height: 46px;
    margin:0;
    border: 1px solid #c5cddb;
}
.loginbox {
    margin-bottom: 10px;
    width: 335px;
    margin:20px auto;
}
.u-loginbtn {
    display: block;
    width: 100%;
    height: 44px;
    cursor: pointer;
    text-align: center;
    color: #fff;
    background:#2CC17B;
    font-size: 18px;
    line-height: 44px;
}
.fur-item{
    margin: 0 20px;
}
</style>
