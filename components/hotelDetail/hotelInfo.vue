<template>
  <div class="hotel_info">

    <!-- 房间基本信息 -->
    <el-row class="assets_item">
      <el-col :span="4">基本信息</el-col>
      <el-col :span="20">
        <el-row class="base_info">
          <el-col :span="6">入住时间: 14:00之后</el-col>
          <el-col :span="6">离店时间: 12:00之前</el-col>
          <el-col :span="6"> {{data.creation_time}}/ {{data.renovat_time}}</el-col>
          <el-col :span="6">酒店规模: {{data.roomCount}}间客房</el-col>

        </el-row>
      </el-col>

    </el-row>

    <!-- 主要设施 -->
    <el-row class="assets_item">
      <el-col :span="4">主要设施</el-col>
      <el-col :span="20"
              v-for="(item,index) in data.hotelassets"
              :key="index">
        <span class="assets_info">{{item.name}}</span>

      </el-col>
      <el-col :span="20"
              v-show="data.hotelassets.length === 0">
        <span>-</span>
      </el-col>
    </el-row>

    <!-- 停车服务 -->
    <el-row class="assets_item">
      <el-col :span="4">停车服务</el-col>
      <el-col :span="20">
        -
      </el-col>
    </el-row>

    <!-- 品牌信息 -->
    <el-row class="assets_item">
      <el-col :span="4">品牌信息</el-col>
      <el-col :span="20">
        <el-row class="base_info">
          -
        </el-row>
      </el-col>
    </el-row>

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
}
</script>

<style lang="less" scoped>
@import "../../assets/styles/main.less";

.hotel_info {
  // 每条信息的共同样式
  .assets_item {
    padding: 20px 10px;
    border-bottom: 1px solid #eee;
    font-size: 14px;
    .base_info {
      color: @drakTextColor;
    }
    // 主要设施的内容
    .assets_info {
      padding: 4px 10px;
      margin-right: 10px;
      border-radius: 4px;
      background-color: #eee;
      border: 1px solid #eee;
      color: @drakTextColor;
    }
  }
}
</style>
