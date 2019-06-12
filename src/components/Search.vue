<template>
  <div>
    <div class="m-search-box" id="j-searchBox">
      <div class="search">
        <section class="search_input">
          <div class="input-box">
            <input v-model.trim="search" type="search" name="搜索" :placeholder="hotSearch.name">
            <span class="chacha" style="display: none;"></span>
          </div>
          <a class="search_btn search_btn-search">搜索</a>
        </section>
        <div class="search_result">
          <ul>
            <li v-for="(item, index) in searchResult" :key="index">{{ item.tt_name }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="hot-keyword" id="j-hotKeywordList" v-show="!searchText">
      <div class="m-keyword">
        <p>热门搜索</p>
        <ul class="keyword">
          <li class="ga-click" v-for="item in hotList" :key="item.id">{{ item.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  watch: {
    search () {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        if (this.search) {
          this.getSearchResult()
        } else {
          this.changeResult()
        }
      }, 500)
    }
  },
  computed: {
    ...mapState('search', ['hotList', 'hotSearch', 'searchText', 'searchResult']),
    search: {
      get () {
        return this.searchText
      },
      set (newVal) {
        this.changeSearch(newVal)
      }
    }
  },
  methods: {
    ...mapActions('search', ['getHotList', 'getHotSearch', 'getSearchResult']),
    ...mapMutations('search', ['changeSearch', 'changeResult', 'resetSourse'])
  },
  created () {
    this.getHotList()
    this.getHotSearch()
  },
  beforeDestroy () {
    this.resetSourse()
  }
}
</script>

<style lang="scss" scoped>
.m-search-box .search_result {
  position: absolute;
  left: 0;
  right: 0;
  top: 50px;
  background: #fff;
  z-index: 101;
  ul {
    padding: 0 17px 0 17px;
    li {
      padding: 14px 0;
      line-height: 18px;
      height: 18px;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #3C4A55;
      position: relative;
      &::after {
        height: 1px;
        content: '';
        background: rgba(221, 221, 221, 0.4);
        width: 100%;
        display: block;
        position: absolute;
        bottom: 0;
      }
    }
  }
}
.keyword{
  li{
    padding: 10px 14px;
    font-size: 15px;
    line-height: 15px;
    margin: 16px 13px 0 0;
    border: 1px solid #E6EAF2;
    border-radius: 20px;
    max-width: 100%;
    display: inline-block;
    color: #8891a7;
  }
}
.m-keyword {
  background: #fff;
  padding: 17px;
  p {
    font-size: 15px;
    color: #3c4a55;
    line-height: 16px;
    padding-bottom: 2px;
  }
}
.m-search-box {
    height: 50px;
}
.search_input {
  height: 38px;
  background: #f6f6f6;
  display: -ms-flexbox;
  display: flex;
  padding: 6px 0 6px 17px;
}
.input-box {
  flex: 0 0 84%;
  position: relative;
  input {
    padding-right: 10px;
    display: block;
    width: 100%;
    margin-right: 17px;
    background: #FFF url(//edu-image.nosdn.127.net/d81f836b-b37f-43fa-85de-98acdbc9478b.png?imageView&quality=100) 10px center no-repeat;
    background-size: 14px 14px;
    border: 1px solid #E6EAF2;
    border-radius: 18px;
    outline: none;
    box-sizing: border-box;
    height: 35px;
    font-size: 14px;
    color: #3C4A55;
    text-indent: 30px;
  }
}
.search_btn {
  font-size: 16px;
  color: #2CC17B;
  display: block;
  height: 36px;
  line-height: 34px;
  text-align: center;
  flex: 1;
}
</style>
