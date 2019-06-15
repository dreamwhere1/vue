<template>
  <div class="um-editAccount-box">
    <div class="um-myAccount-acount f-cb f-pr">
      <div class="um-myAccount-acount_img f-fl">
        <img :src="userInfo.src">
      </div>
      <div class="um-myAccount-acount_info f-fl">
        <div class="nickname">{{ userInfo.name }}</div>
      </div>
        <div class="um-myAccount-acount_edit f-fr" @click="show = true">编辑</div>
    </div>
    <div class="um-myAccount-leave" @click="leave">退出登录</div>
    <div class="void"></div>
    <van-dialog v-model="show" title="修改昵称" show-cancel-button :before-close="manage" style="width: 304px; text-align: center;">
      <input type="text" class="ux-input" v-model="name">
    </van-dialog>
  </div>
</template>

<script>
import http from '../common/http'
import { Toast } from 'vant'

export default {
  data () {
    return {
      userInfo: '',
      show: false,
      name: ''
    }
  },
  created () {
    http.get('/userInfo').then(res => {
      this.userInfo = res
      this.name = res.name
    })
  },
  methods: {
    leave () {
      if (localStorage.userInfo) {
        localStorage.removeItem('userInfo')
      }
      // console.log(this)
      Toast.success('退出成功！')
      setTimeout(() => {
        this.$router.push('/login')
      }, 2000)
    },
    manage (action, done) {
      if (action === 'confirm') {
        this.userInfo.name = this.name
        done()
      } else if (action === 'cancel') {
        done()
        this.name = this.userInfo.name
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ux-input{
  width: 228px;
  height: 40px;
  line-height: 40px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  color: #555;
  background: #fff;
  border-radius: 2px;
  margin: 30px 0;
  font-size: 14px;
  padding-left: 15px;
}
.void{
  flex: 1;
  background: #f2f4f7;
}
.um-editAccount-box{
  height: 100%;
  display: flex;
  flex-direction: column;
}
.um-myAccount-acount {
  height: 86px;
  background: #fff;
}
.um-myAccount-acount_img {
  float: left;
  height: 55px;
  width: 55px;
  border-radius: 55px;
  overflow: hidden;
  margin: 13px 15px 0 15px;
  img{
    width: 100%;
  }
}
.um-myAccount-acount_info {
  float: left;
  line-height: 86px;
  font-size: 16px;
  color: #333740;
}
.um-myAccount-acount_edit {
  float: right;
  margin-right: 13px;
  line-height: 86px;
  font-size: 15px;
  color: #36B378;
}
.um-myAccount-leave {
  position: fixed;
  height: 48px;
  width: 358px;
  bottom: 35px;
  left: 50%;
  margin-left: -179px;
  border: 1px solid #FF4400;
  border-radius: 0.08rem;
  text-align: center;
  line-height: 48px;
  font-size: 16px;
  color: #FF4400;
}
</style>
