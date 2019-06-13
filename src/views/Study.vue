<template>
  <div class="studymodel">
    <van-tabs v-model="active" class="van_tab" title-active-color="#2cc17b" color='#2cc17b'>
      <van-tab title="我的课程">
        <li>
          <button>开始学习</button>
        </li>
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

export default {
  data () {
    return {
      active: 0,
      couseelists: []
    }
  },
  created () {

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
</style>
