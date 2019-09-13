<template>
  <div class="hotel_info">

    <!-- 基本信息 -->
    <el-row class="assets_item">
      <el-col :span="4">基本信息</el-col>
      <el-col :span="20">
        <el-row class="base_info">
          <el-col :span="6">入住时间: 14:00之后</el-col>
          <el-col :span="6">离店时间: 12:00之前</el-col>
          <el-col :span="6">2014年开业 / 2014年装修</el-col>
          <el-col :span="6">酒店规模: 119间客房</el-col>

        </el-row>
      </el-col>

    </el-row>

    <!-- 主要设施 -->
    <el-row class="assets_item">
      <el-col :span="4">主要设施</el-col>
      <el-col :span="20">
        <span class="assets_info">吹风机</span>
        <span class="assets_info">外币兑换服务</span>
        <span class="assets_info">wifi</span>
        <span class="assets_info">电梯</span>
        <span class="assets_info">热水壶</span>

      </el-col>
    </el-row>

    <!-- 停车服务 -->
    <el-row class="assets_item">
      <el-col :span="4">停车服务</el-col>
      <el-col :span="20">
        <el-row class="base_info">
          -
        </el-row>
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
