<template>
  <div>
    <div class="post" :style="course ? '' : 'height: 0px;'">
      <img :src="course ? course.logoUrl : ''">
    </div>
    <div class="main">
      <van-tabs v-model="active" color="#2cc17b" title-active-color="#2cc17b" title-inactive-color="#333" sticky>
        <van-tab title="简介"><CourseMsg :course="course ? course : {}"></CourseMsg></van-tab>
        <van-tab title="目录">目录</van-tab>
        <van-tab title="评价">评价</van-tab>
      </van-tabs>
    </div>
    <div class="u-coursebottom f-pf">
      <div class="funs">
        <a class="f-fcbrightgray addCart">
          <i class="iconfont icon-gouwuche1"></i>
          <span>加入购物车</span>
        </a>
        <a class="u-btn start">加入学习</a>
      </div>
    </div>
    <div class="m-2top iconfont icon-xiangshang" id="j-brief-2top" style="display: none"></div>
  </div>
</template>

<script>
import CourseMsg from '../components/CourseMsg.vue'
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      active: 0,
      dom: '',
      timer: 0
    }
  },
  computed: {
    ...mapState('course', ['course'])
  },
  methods: {
    ...mapMutations('course', ['resetSourse']),
    ...mapActions('course', ['getCourse']),
    backTop () {
      if (scrollY > 250) {
        if (!this.dom) {
          this.dom = document.getElementById('j-brief-2top')
          this.dom.onclick = () => {
            if (!this.timer) {
              var y = scrollY
              var h = 1
              this.timer = setInterval(() => {
                h += Math.ceil(h * h * 0.001)
                if (h > y) {
                  h = y
                  clearInterval(this.timer)
                  this.timer = 0
                }
                scrollTo(0, y - h)
              }, 10)
            }
          }
        }
        this.dom.style.display = 'block'
      } else if (this.dom) {
        this.dom.style.display = 'none'
      }
    }
  },
  components: {
    CourseMsg
  },
  created () {
    this.getCourse()
    window.addEventListener('scroll', this.backTop)
  },
  beforeDestroy () {
    this.resetSourse()
    window.removeEventListener('scroll', this.backTop)
  }
}
</script>

<style lang="scss" scoped>
.m-2top {
  font-size: 20px;
  color: #fff;
  position: fixed;
  bottom: 108px;
  right: 10px;
  z-index: 20;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 40px;
  background-color: rgba(0, 0, 0, 0.3);
}
.main{
  margin-bottom: 61px;
}
.start {
  box-flex: 1;
  flex: 1;
  color: #fff;
  background: #FF632A;
  font-size: 15px;
  width: 54%;
  float: right;
  text-align: center;
  border-radius: 200px;
}
.f-pf {
  position: fixed;
}
.u-coursebottom {
  box-sizing: border-box;
  width: 100%;
  background-color: #fff;
  left: 0;
  bottom: 0;
}
.addCart {
  width: 80px;
  background: #fff;
  color: #3C4A55;
  i{
    margin-top: 5px;
    display: block;
    height: 20px;
    line-height: 20px;
    font-size: 28px;
  }
  span {
    display: block;
    width: 100%;
    line-height: 25px;
    height: 25px;
  }
}
.funs {
  height: 48px;
  line-height: 48px;
  text-align: center;
  display: flex;
}
.u-coursebottom {
    padding: 7px 8px;
    border-top: 1px solid rgba(221, 221, 221, 0.4);
}
.post {
  img {
    width: 100%;
    vertical-align: top;
  }
}
</style>
