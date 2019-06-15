<template>
  <div class="studymodel">
    <van-tabs v-model="active" class="van_tab" title-active-color="#2cc17b" color='#2cc17b'>
      <van-tab title="我的课程" v-bind:class="{'curriculum':iscurriculum,'curriculum_miciro':ismicoro}">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功！" :success-duration="1000" style="overflow: unset">
          <router-link :to="'/course?courseId=' + item.courseId" v-for="item in couseelists" :key="item.courseId" tag="li">
            <img :src="item.bigPicUrl" alt="" class="photo">
            <div class="news">
              <span>{{ item.resName }} </span> <br>
              <i>开始学习</i>
            </div>
          </router-link>
          <p>已经到底部了亲</p>
        </van-pull-refresh>
      </van-tab>
      <van-tab title="我的微专业" class="miciro">
        <img src="//swap.stu.126.net/res/images/wap/common/newBlank.png?7b6c25677a53976b44f4d028d9dc761f">
        <p>未学习微专业哦~</p>
        <a class="mw-myclass-empty_btn" href="javascript:;">去发现精彩微专业</a>
      </van-tab>
    </van-tabs>
    <div class="void"></div>
  </div>
</template>

<script>
import http from '../common/http'
export default {
  data () {
    return {
      active: 0,
      couseelists: [],
      iscurriculum: true,
      ismicoro: false,
      isLoading: false
    }
  },
  created () {
    this.getCourseList()
  },
  methods: {
    getCourseList () {
      http.get('/userInfo').then(res => {
        // console.log(res)
        this.isLoading = false
        this.couseelists = res.courseList
        if (this.res === '') {
          this.iscurriculum = false
          this.ismicoro = true
        }
      })
    },
    onRefresh () {
      this.getCourseList()
    }
  }
}

</script>

<style lang="scss"  scoped>
.studymodel{
  height: 100%;
  display: flex;
  flex-direction: column;
  .void{
    flex: 1;
  }
}
.miciro{
  height: 280px;
  width: 100%;
  img{
    margin: 0 auto;
    padding: 0;
    border: 0;
    text-align: center;
    width: 120px;
    display: block;
    margin-top: 40px;
  }
  a{
    display: block;
    height: 40px;
    width: 200px;
    border-radius: 5px;
    line-height: 36px;
    text-align: center;
    font-size: 15px;
    color: #3c4a55;
    background: #2cc17b;
    margin: 0 auto;
    color: #fff;
    text-decoration: none;
  }
  p{
    font-size: 14px;
    color: #99a4bf;
    margin-top: 20px;
    margin-bottom: 30px;
    text-align: center;
  }
}
.curriculum {
  font-size: 14px;
  p{
    text-align: center;
    padding: 0 15px 0;
    line-height: 30px;
    color: #99a4bf;
  }
  li{
    padding: 17px 10px 17px 15px;

    border-bottom: 1px solid rgba(221, 221, 221, 0.4);
    background: #fff;
    list-style: none;
    .photo{
      width: 122px;
      height: 77px;
      margin-right: 12px;

    }
    .news{
        height: 76px;
        width: 245px;
       display: block;
       float: right;
       span{
          font-size: 16px;
          color: #333;
          line-height: 36px;
       }
       i{
          height: 28px;
          width: 112px;
          color: #2cc17b;
          text-decoration: none;
          font-size: 14px;
          display: inline-block;
          border: 1px solid #2cc17b;
          border-radius: 2.66667rem;
          text-align: center;
          line-height: 28px;
          margin-top: 15px;
          font-style: normal;
       }
    }
  }
}
</style>
