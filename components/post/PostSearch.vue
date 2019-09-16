<template>
  <div class="post_search-wrapper">

    <!-- 搜索框 -->
    <el-row class="post_search-bar"
            type="flex"
            justify="space-between">
      <input type="text"
             placeholder="请输入想去的地方，比如：'广州'"
             v-model="post_search"
             @keyup.enter="handleFilterCity" />
      <i class="el-icon-search"
         @click="handleFilterCity"></i>
    </el-row>
    <div class="post_search-recommend">
      推荐：
      <span @click="GZ">广州</span>
      <span @click="SH">上海</span>
      <span @click="BJ">北京</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      post_search: ''

    }
  },

  //-------------------------------------------------//
  methods: {
    handleFilterCity () {
      const CityData = this.post_search;
      this.$emit("setPostDataList", CityData)
    },

    GZ () {
      this.post_search = '广州'
      this.handleFilterCity()
    },
    SH () {
      this.post_search = '上海'
      this.handleFilterCity()
    },
    BJ () {
      this.post_search = '北京'
      this.handleFilterCity()
    }
  },

  //---------------------------------------------------//
  props: {
    data: {
      type: Object,
      default: ''
    }
  },

  //--------------------------------------------------------//
  computed: {
    // filterData () {

    // }
  }

}
</script>

<style lang="less" scoped>
.post_search-wrapper {
  .post_search-bar {
    width: 100%;
    box-sizing: border-box;
    height: 40px;
    line-height: 40px;
    border: 3px solid orange;
    align-items: center;

    input {
      flex: 1;
      padding: 0 20px;
      line-height: 40px;
      outline: none;
      border: none;
      background: none;
    }

    i {
      font-size: 24px;
      color: orange;
      font-weight: 700;
      margin-right: 10px;
    }
  }

  .post_search-recommend {
    padding: 10px 0;
    font-size: 12px;
    color: #666;

    span {
      margin-right: 5px;
      &:hover {
        border-bottom: 1px solid orange;
        color: orange;
        cursor: pointer;
      }
    }
  }
}
</style>
