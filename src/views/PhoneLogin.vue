<template>
  <div class="denglu">
    <div class="g-content">
      <div class="g-main">
          <div class="u-tab f-cb">
        <a class="tab1 iconfont icon-xin">使用短信验证登录</a>
    </div>
         <div class="inputbox">
    <!--Regular if0-->
        <div class="u-logo"><div class="u-logo-img3">  <a href="#" class="iconfont icon-shouji"></a></div></div>

    <!--Regular if1-->
        <div class="u-input box">
        <input type="text" maxlength="11" spellcheck="false" tabindex="1" autocomplete="off" class="dlemail j-nameforslide" name="email" placeholder="请输入手机号" id="phoneipt">
    </div>

    <div class="u-tip"><div class="u-success u-clear"></div></div>
    <!--Regular if2-->
</div>
   <div class="inputbox">
    <div class="u-logo"><div class="u-logo-img2"> <a href="#" class="iconfont icon-suo"></a></div></div>
    <div class="u-input box">
        <input type="password" spellcheck="false" tabindex="2" autocomplete="new-password" class="j-inputtext dlemail" name="email" placeholder="请输入密码">

    </div>
    <!--Regular if3-->
        <div class="u-tip" style="display: none;"><div class="u-success u-clear"></div></div>

</div>
<div class="f-cb loginbox">
        <a tabindex="8" id="submitBtn" class="u-loginbtn btncolor tabfocus">登 录</a>
    </div>
    <div class="m-unlogin">
        <!--Regular if6-->
            <div class="b-unlogn">
                <input type="checkbox" name="" id=""/>
                <span class="u-checkbox "> 十天内免登录
                </span>
            </div>
            |
        <div class="wj">
        <a target="_blank" href="https://mob.163.com/web/passwdfind" data-outlink="1" class="forgetpwdReg">忘记密码？</a>
        <!--Regular if7-->
        </div>
    </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.denglu{
    height: 100%;
}
.u-tab {
    width: 335px;
    padding: 0 0 30px 0;
    margin-top: 10px;
    font-size: 12px;
  a{
      float: right;
      font-size: 12px;
  }
}
.u-logo .u-logo-img3 a{
    display: inline-block;
    width: 22px;
    height: 24px;

    }
.m-cnt .u-input {
    position: relative;
    float: left;
    width: 243px;
    height: 44px;
}
.u-logo .u-logo-img2 a{
    display: inline-block;
    width: 22px;
    height: 24px;

    }

.inputbox{
    width: 333px;
    border-radius: 2px;
    height: 44px;
    line-height: 44px;
    z-index: 19;
    position: relative;
    border: 1px solid #c5cddb;
    background: #fff;
    font-size: 12px;
    margin: 12px auto;
}
.u-logo{
    float: left;
    width: 21px;
    text-align: center;
    padding: 0 5px 0 10px;
}
  .u-input input {
    width: 235px;
    height: 44px;
    line-height: 44px;
    border: 0;
    padding: 0;
    padding-left: 5px;
    font-size: 14px;
}
    .u-loginbtn {
    background: #2CC17B !important;
    border-radius: 2px;
    display: block;
    width: 100%;
    height: 44px;
    cursor: pointer;
    text-align: center;
    color: #fff;
    font-size: 18px;
    line-height: 44px;

}
.m-cnt .m-unlogin .b-unlogn .u-checkbox {
    display: block;
    float: left;
    width: 14px;
    height: 14px;
    cursor: pointer;
    border: solid 1px #aaa;
    color: #999;
    font-size: 12px;
}
.loginbox{
    width: 330px;
    margin:10px auto;
}
.m-unlogin{
    display:flex;
    margin:0 20px;
    line-height: 12px;
    height: 12px;
}
</style>
