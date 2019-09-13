<template>
  <div class="room_type">
    <!-- 表单制作 -->
    <el-table :data="products1"
              style="width: 100%">
      <el-table-column prop="name"
                       label="价格来源"
                       width="420">
      </el-table-column>
      <el-table-column prop="bestType"
                       label="低价房型"
                       width="420">
      </el-table-column>
      <el-table-column label="最低价格/每晚">
        <template slot-scope="scope">
          <span class="hight-light larger">¥ {{scope.row.price}} </span>起
          <i class="el-icon-arrow-right hight-light"></i>
        </template>

      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {

  data () {
    return {
      // 定义一个数据存储酒店产品数据
      products1: [],

    }
  },

  mounted () {
    // 从vuex中获取酒店产品数据，也可以使用组件传值方法
    setTimeout(() => {
      this.products1 = this.$store.state.hotel.hotelDetail.products
    }, 10)

  }
}
</script>


<style lang="less" scoped>
@import "../../assets/styles/main.less";

.room_type {
  /deep/ .el-table__row {
    cursor: pointer;
  }
  // 价格字体颜色
  .hight-light {
    color: @mainColor;
  }
  // 价格字体大小
  .larger {
    font-size: larger;
  }
}
</style>
