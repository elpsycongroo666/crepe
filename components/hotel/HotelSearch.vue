
<style lang="less" scoped>
@import "~styles/main.less";
.search {
  display: flex;
  /deep/ .el-input__inner {
    border: 1px solid @borderColor;
  }
}
.search__city {
  width: 140px;
  margin-right: 12px;
}
.search__price {
  display: flex;
}
.search__number {
  width: 132px;
  margin-left: 5px;
}
.search__price-btn {
  margin-left: 12px;
  padding: 0 20px;
  background-color: @mainColor;
  border: none;
  &&:hover {
    background-color: @subColor;
  }
}
</style>
<template>
  <!-- S 酒店搜索模块 -->
  <div class="search">

    <div class="search__city">
      <el-autocomplete v-model="name"
                       :fetch-suggestions="querySearchAsync"
                       placeholder="目的地"
                       @select="handleSelect"
                       :debounce="500"></el-autocomplete>
    </div>
    <!-- /搜索城市 -->

    <div class="search__price">
      <el-date-picker class="search__date"
                      v-model="name"
                      type="daterange"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期">
      </el-date-picker>
      <el-input class="search__number"
                placeholder="人数未定"
                suffix-icon="iconfont iconuser"
                v-model="number">
      </el-input>
      <el-button type="primary"
                 class="search__price-btn">查看价格</el-button>
    </div>
    <!-- /搜索价格 -->

  </div>
  <!-- S 酒店搜索模块 -->
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data () {
    return {
      name: '',//城市
      date: null,//日期
      number: void 0,//人数
    }
  },
  computed: {
    ...mapState({
      currentCity: state => state.hotel.currentCity//获取当前城市
    })
  },
  methods: {
    ...mapActions({
      getCites: 'hotel/getCites'//请求搜索城市数据
    }),
    ...mapMutations({
      SET_SCENICSDATA: 'hotel/SET_SCENICSDATA',//设置城市风景数据
      SET_CURRENTCITY: 'hotel/SET_CURRENTCITY'//设置当前城市数据
    }),
    /* --------------------------公用函数-------------------------------- */
    formatData (_arr) {
      return _arr.map(item => {
        item.value = item.name.replace(/市/, '')
        return item
      })
    },
    /* --------------------------事件处理-------------------------------- */
    handleSelect (item) { //选择城市触发
      this.SET_SCENICSDATA(item.scenics)
      this.SET_CURRENTCITY(item)
    },
    querySearchAsync (queryString, cb) { // 显示搜索建议
      this.getCites(queryString).then(data => {
        const newData = this.formatData(data)
        this.$T.debounce(cb.bind(this, newData), 300)()
      })
    }
  },
  mounted () {
    this.name = this.currentCity.name
  }
}
</script>
