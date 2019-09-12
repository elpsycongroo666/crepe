<template>
  <div class="room_type">
    <!-- 表单制作 -->
    <el-table :data="roomInfo"
              style="width: 100%">
      <el-table-column prop="sourcePrice"
                       label="价格来源"
                       width="420">
      </el-table-column>
      <el-table-column prop="type"
                       label="低价房型"
                       width="420">
      </el-table-column>
      <el-table-column prop=""
                       label="最低价格/每晚">
        <template slot-scope="scope">
          <span class="hight-light larger">¥ 121 </span>起
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
      roomInfo: [{
        sourcePrice: "携程",
        type: "高级大床房A",
        lowerPrice: "120"
      },
      {
        sourcePrice: "艺龙",
        type: "高级大床房A",
        lowerPrice: "174"
      },
      {
        sourcePrice: "Hotels.com",
        type: "高级大床房A",
        lowerPrice: "150"
      },
      ]
    }
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
