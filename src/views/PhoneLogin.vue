<template>
  <div class="denglu">
    <div class="g-content">
      <div class="g-main">
        <div class="u-tab f-cb">
          <a class="tab1 iconfont icon-youxiang">使用短信验证登录</a>
        </div>
        <div class="inputbox">
          <div class="u-logo">
            <div class="u-logo-img3">
              <a href="#" class="iconfont icon-shouji"></a>
            </div>
          </div>
          <div class="u-input box">
            <input
              type="text"
              maxlength="11"
              spellcheck="false"
              tabindex="1"
              autocomplete="off"
              class="dlemail j-nameforslide"
              placeholder="请输入手机号"
               v-model="phone"
              id="phoneipt"
            >
          </div>

          <div class="u-tip">
            <div class="u-success u-clear"></div>
          </div>
        </div>
        <div class="inputbox">
          <div class="u-logo">
            <div class="u-logo-img2">
              <a href="#" class="iconfont icon-suo"></a>
            </div>
          </div>
          <div class="u-input box">
            <input
              type="password"
              spellcheck="false"
              tabindex="2"
              autocomplete="new-password"
              class="j-inputtext dlemail"
               v-model="password"
              placeholder="请输入密码"
            >
          </div>
        </div>
        <div class="f-cb loginbox">
          <a tabindex="8" id="submitBtn" class="u-loginbtn btncolor tabfocus" v-on:click="handleLogin" >登 录</a>
        </div>
        <div class="m-unlogin">
          <div class="b-unlogn">
            <input type="checkbox" checked>
            <span class="u-checkbox">十天内免登录&nbsp;|&nbsp;</span>
          </div>
          <div class="wj">
            <a href="javascript:;" class="forgetpwdReg">忘记密码？</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  data () {
    return {
      // username: 'admin',
      // password: '123456'
      phone: '',
      password: '',
      isLogin: true
    }
  },
  methods: {
    checkFormData () {
      if (!this.phone || !this.password) {
        this.$toast('手机号和密码不能为空！')
        return false
      }
      return true
    },
    handleLogin () {
      if (this.checkFormData()) {
        this.$toast.loading({
          mask: true,
          duration: 0,
          message: '登录中....'
        })
        this.$store.dispatch('login/login', { phone: this.phone, password: this.password, isLogin: this.isLogin }).then(() => {
          Toast.clear()
          Toast.success('登录成功！')
          setTimeout(() => {
            this.$router.push('/index')
          }, 2000)
        }).catch(() => {
          Toast.clear()
          this.$toast('手机号或密码错误！')
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wj{
    float: left;
    line-height: 12px;
}
.denglu{
    height: 100%;
}
.u-tab {
    width: 335px;
    padding: 0 0 10px 0;
    margin: 10px auto;
    font-size: 12px;
  a{
      &::before{
        float: left;
        font-size: 16px;
        margin-top: -1px;
        margin-right: 2px;
      }
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
    margin: 12px auto 24px;
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
    width: 335px;
    margin:10px auto;
}
.m-unlogin{
    width: 335px;
    margin:0 auto;
    line-height: 12px;
    height: 12px;
    padding: 2px 0 9px 0;
    font-size: 12px;
    height: 16px;
    line-height: 16px;
}
.b-unlogn{
    float: left;
    line-height: 12px;
    overflow: hidden;
    input{
        float: left;
        margin: 0 5px 0 0;
    }
}
</style>
