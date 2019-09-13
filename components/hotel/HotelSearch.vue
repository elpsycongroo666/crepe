
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
                       @select="handleSelect"></el-autocomplete>
    </div>
    <!-- /搜索城市 -->

    <div class="search__price">
      <el-date-picker class="search__date"
                      v-model="date"
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

export default {
  components: {},
  data () {
    return {
      name: '南京',
      date: null,
      number: 0,
    }
  },
  computed: {},
  watch: {},
  methods: {
    /* --------------------------事件处理-------------------------------- */
    handleSelect () { },
    querySearchAsync (queryString, cb) { }
  },
  mounted () {

  }
}
</script>
