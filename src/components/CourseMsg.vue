<template>
  <div>
    <div class="coursebox">
      <div class="name f-course-black">{{ course.name }}</div>
      <div class="numInfo f-cb f-course-grey">
        <span class="f-fl f-db mark">
          <span class="u-course-stars_bg f-fl">
            <span class="u-course-stars_active" :style="{ width: starWidth }"></span>
          </span>
          <span class="f-fl">{{ course.star ? course.star : '0.0' }}分</span>
        </span>
        <span class="f-fl f-db hot">{{ course.amount ? course.amount : 0 }}在学</span>
        <span class="tag">
          <span class="icon-tag-dj">独家</span>
        </span>
      </div>
      <div class="pricebox">
        <div class="price price-novip f-cb">
          <p class="f-fl">
            <span class="yen" v-if="course.discountPrice">¥</span>{{ course.discountPrice ? course.discountPrice.toFixed(2) : '免费' }}
          </p>
          <div class="timebox f-cb f-fl">
            <div class="f-fl timeleft">特价仅剩{{ timer.day }}天{{ timer.hour }}小时{{ timer.second }}分钟</div>
          </div>
          <p class="oprice f-course-grey" v-if="course.price">¥{{ course.price.toFixed(2) }}</p>
        </div>
      </div>
    </div>
    <div class="u-cd-divider" style="height: 8px; background-color: rgb(242, 244, 247);"></div>
    <div class="u-coursebriefintro" id="auto-id-1560256493571">
      <h3 class="tit f-f0 f-course-black u-coursebriefintro-title">课程介绍</h3>
      <p class="txt f-course-grey u-coursebriefintro-content" id="auto-id-1560256493570">
        <span>
          <template v-for="(item, index) in formatting('description')">
            {{ item }}<br :key="index">
          </template>
        </span>
      </p>
      <p class="m-introImage u-coursebriefintro-content" v-for="(item, index) in course.src" :key="index">
        <img :src="item" class="intro-img" style="width: 100%;">
      </p>
      <div class="j-course-target-box">
        <h3 class="tit f-f0 f-course-black u-coursebriefintro-title">适用人群</h3>
        <p class="txt f-course-grey u-coursebriefintro-content u-coursebriefintro-nobottom">
          <template v-for="(item, index) in formatting('ableMsg')">
            {{ item }}<br :key="index">
          </template>
        </p>
      </div>
      <div id="j-course-details-provider-entrance">
        <div name="txt" id="jst-course-details-provider-entrance">
          <div class="ux-course-provider-box f-cb">
            <div class="ux-course-provider-box_logo f-fl">
              <img :src="course.userImg">
            </div>
            <div class="ux-course-provider-box_desc f-fl">
              <div class="desc_name">{{ course.providerName }}</div>
              <div class="desc_num">{{ course.amount ? course.amount : 0 }}位学员</div>
            </div>
            <div class="ux-course-provider-box_btn f-fr">
              <a href="javascript:;">
                进入网校
                <span class="iconfont icon-right1"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <h3 class="tit f-f0 f-course-black u-coursebriefintro-title">讲师</h3>
      <div class="teacher-wrap u-coursebriefintro-content">
        <div class="learfloat">
          <div class="teacher-img">
            <img :src="course.userImg">
          </div>
          <div class="teacher-name">{{ course.userName }}</div>
        </div>
        <p class="txt f-course-grey des">
          <span>{{ course.selfMsg }}</span>
        </p>
      </div>
      <div class="teacher-wrap u-coursebriefintro-content" v-if="course.connoisseur">
        <div class="learfloat">
          <div class="teacher-img">
            <img src="http://edu-image.nosdn.127.net/CFD2999B76C502CF3B0CAEAD4375174A.jpg?imageView&thumbnail=120y120&quality=100">
          </div>
          <div class="teacher-name">云课堂行家</div>
        </div>
        <p class="txt f-course-grey des">
          <span>行家是云课堂优秀讲师推荐栏目。在这个栏目中，我们将优选课程内容优质、教学水平优秀、对学生负责的优秀讲师和讲师团队，为用户学习高质量内容提供建议。</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    course: Object
  },
  computed: {
    timer () {
      if (this.course.timer) {
        var timer = this.course.timer - new Date().getTime()
        var day = parseInt(timer / 1000 / 60 / 60 / 24)
        var hour = parseInt(timer / 1000 / 60 / 60 % 24)
        var second = parseInt(timer / 1000 / 60 % 60)
      }
      return { day, hour, second }
    },
    starWidth () {
      if (this.course.star) {
        var width = this.course.star * (66 / 5) + 5 * parseInt(this.course.star)
      }
      return width + 'px'
    }
  },
  methods: {
    formatting (val) {
      if (this.course[val]) {
        var arr = this.course[val].split('\n')
      }
      return arr
    }
  }
}
</script>

<style lang="scss" scoped>
.u-course-stars_bg{
  display: block;
  position: relative;
  width: 86px;
  height: 13px;
  background: rgba(0, 0, 0, 0) url(//edu-image.nosdn.127.net/b2d624b0-1c2c-4670-a57f-d891b22d6d66.png?imageView&quality=100) center center no-repeat;
  background-size: contain;
}
.u-course-stars_active {
  height: 13px;
  background: rgba(0, 0, 0, 0) url(//edu-image.nosdn.127.net/4b13c7d5-142b-47a8-928c-c8069b4ef178.png?imageView&quality=100) 0 0 no-repeat;
  background-size: 86px;
  position: absolute;
  top: 0;
  left: 0;
}
.icon-tag-dj {
  line-height: 1;
  padding: 2px;
  float: right;
  color: #70B6F8;
  border: 1px solid #70B6F8;
  border-radius: 2px;
  margin-top: -3px;
  margin-left: 6px;
}
.mark {
  margin-right: 9px;
}
.txt {
  border-bottom: 0;
  padding-bottom: 20px;
}
.des {
  padding-left: 67px;
}
.teacher-img{
  float: left;
}
.teacher-name {
  float: left;
  height: 48px;
  line-height: 48px;
  margin-left: 18px;
  font-size: 15px;
  color: #666;
}
.learfloat {
  height: 48px;
  clear: both;
}
.u-coursebriefintro-content {
  margin: 0 4%;
}
.tit {
  font-size: 15px;
  margin-top: 20px;
  margin-bottom: 7px;
  line-height: 21px;
}
.ux-course-provider-box_btn {
  float: right;
  a{
    margin-top: 8px;
    display: inline-block;
    width: 80px;
    height: 34px;
    line-height: 34px;
    border-radius: 2px;
    text-align: center;
    font-size: 13px;
    color: #70788C;
    position: relative;
    span{
      position: absolute;
      top: 1px;
      font-size: 16px;
    }
  }
}
.desc_num {
  font-size: 12px;
  color: #8B8F97;
}
.desc_name {
  font-size: 15px;
  color: #333740;
  margin-bottom: 8px;
}
.ux-course-provider-box_desc {
  margin-top: 5px;
}
.ux-course-provider-box_logo {
  background-color: #ccc;
  width: 45px;
  height: 45px;
  border-radius: 5px;
  margin-right: 8px;
  img{
    width: 100%;
  }
}
.ux-course-provider-box {
  padding: 10px 12px 12px 0;
  margin-left: 12px;
  border-top: 1px solid rgba(221, 221, 221, 0.4);
  border-bottom: 1px solid rgba(221, 221, 221, 0.4);
  overflow: hidden;
}
.teacher-img {
  img{
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #99A4BF;
  }
}
.txt {
  font-size: 14px;
  line-height: 19px;
  padding-bottom: 15px;
  border-bottom: 1px solid #e6eae5;
}
.f-course-black {
  color: #3C4A55;
}
.u-coursebriefintro-title, .u-coursebriefintro-content {
  margin: 0 4%;
}
.tit {
  font-weight: bold;
  font-size: 15px;
  margin-top: 20px;
  margin-bottom: 7px;
  line-height: 21px;
}
.oprice {
  text-decoration: line-through;
  font-size: 12px !important;
  padding: 10px 0;
  clear: left;
}
.timeleft {
  border: 1px solid #ff632a;
  color: #ff632a;
  margin-right: 4px;
  padding: 3px;
  margin-left: 15px;
}
.f-fl {
  float: left;
}
.f-cb {
  p {
    font-size: 20px;
    span {
      font-size: 12px;
    }
  }
}
.f-course-black {
  color: #3c4a55;
}
.pricebox {
  border-top: 1px solid #e6eaf2;
}
.pricebox {
  overflow: hidden;
  margin-right: -4%;
  padding-top: 15px;
  margin-top: 6px;
}
.f-course-grey {
  color: #70788c;
}
.numInfo {
  padding: 9px 0;
  font-size: 12px;
  overflow: hidden;
}
.name {
  font-size: 18px;
  line-height: 26px;
}
.coursebox {
  padding: 18px 4% 14px 4%;
}
</style>
