<template>
  <div>
    <transition name="component-fade" mode="out-in">
      <keep-alive include="Home">
        <router-view></router-view>
      </keep-alive>
    </transition>
    <footer class="mw-footer j-mw-footer">
      <div class="um-common-footer">
        <router-link class="um-common-footer_item" to="/index">
          <i class="iconfont icon-xiaofangzi"></i>
          <div class="um-common-footer_item_text">首页</div>
        </router-link>
        <router-link class="um-common-footer_item" to="/study">
          <i class="iconfont icon-book1"></i>
          <div class="um-common-footer_item_text">我的学习</div>
        </router-link>
        <router-link class="um-common-footer_item" :to="{name: 'center'}">
          <i class="iconfont icon-wode"></i>
          <div class="um-common-footer_item_text">帐号</div>
        </router-link>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Index',
  methods: {
    loadMore () {
      window.onscroll = () => {
        let height = document.documentElement.clientHeight + scrollY
        let Height = document.documentElement.offsetHeight
        // console.log(y, Height, height, this)
        if (Height - height < 100 && this.$store.state.home.isload) {
          this.$store.commit('home/changeLoad')
        }
      }
    }
  },
  created () {
    this.loadMore()
  }
}
</script>

<style lang="scss" scoped>
.mw-footer{
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  z-index: 100;
  position: fixed;
  bottom: 0;
  left: 0;
}
.um-common-footer{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-top: 1px solid #E6EAF2;
  height: 54px;
}
.um-common-footer_item{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #3C4A55;
  i{
    font-size: 25px;
  }
}
.um-common-footer_item_text{
  margin-top: 5px;
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>
