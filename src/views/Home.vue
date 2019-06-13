<template>
  <div class="box">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功！" :success-duration="1000">
      <header class="j-mw-header">
        <div id="j-mw-header" class="mw-header">
          <router-link class="mw-header_logo ga-click" to="/"></router-link>
          <router-link to="/callApp">
            <div id="j-mw-header_app" class="mw-header_app j-mw-header_app">App查看</div>
          </router-link>
          <div class="mw-header_search">
            <router-link to="/search" class="iconfont icon-ss"></router-link>
          </div>
        </div>
      </header>
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in bannerList" :key="index">
          <img :src=" item.photoUrl" :alt="item.name">
        </van-swipe-item>
      </van-swipe>
      <div class="mw-firstCateIconSet">
        <div class="icon-box">
          <div class="icon-cell" v-for="(icon, index) in iconList" :key="index">
            <a href="javascript:;">
              <div class="icon-round">
                <img :src="icon.photoUrl">
              </div>
            </a>
            <div class="icon-txt">{{ icon.name }}</div>
          </div>
        </div>
      </div>
      <div class="mw-custom-module-wrap" v-for="(section, id) in sectionList" :key="id">
        <div class="mw-divide" v-if="id < load"></div>
        <div class="mw-inner-box" v-if="id < load">
          <div class="mw-custom-module">
            <div class="custom-top f-cb">
              <div class="custom-name">{{ section.sectionName }}</div>
            </div>
              <div v-for="(item, index) in section.elementDtoList" :key="index" class="custom-card custom-card-small custom-card-withPrice" :class="id === 1 || ((id === 3 || id === 4 || id ===5 ) && index === 0) ? 'flag' : ''" >
                <router-link :to="'/course?courseId='+item.id">
                  <div class="img-box">
                    <img :src="item.photoUrl">
                  </div>
                  <div class="course-title two-row-limit" v-if="id != 1">{{ item.name }}</div>
                  <div class="course-price" v-if="id != 6 && id != 7">{{ item.courseCardVo ? '￥' + item.courseCardVo.yktCourseCardv.price : '' }}</div>
                </router-link>
              </div>
          </div>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      isLoading: false
    }
  },
  computed: {
    ...mapState('home', ['bannerList', 'iconList', 'sectionList', 'load'])
  },
  methods: {
    ...mapActions('home', ['getBanner', 'getIcon', 'getSection']),
    onRefresh () {
      this.getBanner()
      this.getIcon()
      this.getSection()
      setTimeout(() => {
        this.isLoading = false
      }, 500)
    }
  },
  created () {
    this.getBanner()
    this.getIcon()
    this.getSection()
  }
}
</script>

<style lang="scss" scoped>
.course-price {
  margin-top: 6px;
  font-size: 16px;
  line-height: 18px;
  color: #ff632a;
}
.f-cb{
  flex: 100%;
}
.flag{
  flex: 100% !important;
}
.course-title {
  margin-top: 9px;
  font-size: 16px;
  line-height: 22px;
  color: #3c4a55;
}
.two-row-limit {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.custom-card-withPrice {
  margin-bottom: 25px;
}
.custom-card-small {
  flex: 0 0 49%;
}
.box {
  margin-bottom: 55px;
}
.mw-header {
  height: 55px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 12px 0 17px;
  background-color: #fff;
  display: flex;
  align-items: center;
}
.mw-header_logo {
  display: block;
  height: 27px;
  width: 127px;
  margin-right: 9px;
  background: #fff
    url(//nos.netease.com/edu-image/a9333338-6b0e-4e56-a34a-77b2a2268b4a.png?imageView&quality=100)
    center center no-repeat;
  background-size: contain;
}
.mw-header_app {
  height: 21px;
  width: 67px;
  box-sizing: border-box;
  color: #2cc17b;
  line-height: 21px;
  text-align: center;
  border-radius: 10px;
  font-size: 12px;
  border: 1px solid #2cc17b;
}
.mw-header_search {
  padding-right: 23px;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  a {
    float: right;
  }
}
img {
  width: 100%;
}
.mw-firstCateIconSet {
  margin-bottom: 30px;
}
.icon-box {
  display: flex;
  margin: 0 auto;
  width: 92%;
  flex-wrap: wrap;
}
.icon-cell {
  margin-top: 23px;
  flex: 25%;
}
.icon-round {
  margin: 0 auto;
  width: 42px;
  height: 42px;
}
.icon-txt {
  margin-top: 9px;
  text-align: center;
  font-size: 14px;
}
.mw-inner-box {
  display: flex;
  width: 92%;
  margin: 0 auto;
}
.mw-divide {
  width: 100%;
  height: 12px;
  background-color: #f2f4f7;
}
.mw-custom-module {
  width: 100%;
  padding-top: 22px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.custom-top {
  margin-bottom: 17px;
  font-size: 16px;
  font-weight: bold;
  color: #3c4a55;
}
</style>
