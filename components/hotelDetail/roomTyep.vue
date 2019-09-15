<template>
  <div class="room_type">
    <!-- 酒店合作的其他产品来源 -->
    <el-table :data="data.products"
              style="width: 100%"
              @row-click="handelclick">
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
  // 接收父组件的数据
  props: {
    data: {
      type: Object,
      default: {}
    }
  },

  methods: {
    // 点击产品跳转到不同的页面
    handelclick (row) {
      console.log(row)
      if (row.name === "携程") {
        window.open('https://hotels.ctrip.com/hotel/694679.html')
      }
      if (row.name === "艺龙") {
        window.open('http://hotel.elong.com/hangzhou/')
      }
      if (row.name === "Hotels.com") {
        window.open('https://www.hotels.cn/ho490716/?pa=1&q-check-out=2019-09-18&tab=description&q-room-0-adults=2&YGF=3&q-check-in=2019-09-17&MGT=1&WOE=3&WOD=2&ZSX=0&SYE=3&q-room-0-children=0')
      }
    }
  },
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
