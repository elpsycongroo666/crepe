<style lang="less" scoped>
@import "~styles/main.less";
.bar {
  display: flex;
  align-items: center;
  /deep/ .el-breadcrumb__inner {
    font-size: 12px;
    color: #666;
  }
  /deep/ .el-breadcrumb__item:last-child {
    .el-breadcrumb__inner {
      color: @subColor;
      font-weight: 600;
    }
  }
}
.bar__text-here {
  font-size: 12px;
  line-height: 20px;
  color: #333;
}
.bar__crub {
  font-size: 12px;
  line-height: 20px;
}
</style>
<template>
  <!-- S 酒店工具栏模块 -->
  <div class='bar'>

    <div class="bar__text">
      <span class="bar__text-here">您在这里：</span>
    </div>
    <!-- /工具栏文章模块 -->

    <div class="bar__crumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="(item,index) in data"
                            :to="item.path"
                            :key="index">{{ item.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- /工具栏面包屑模块 -->

  </div>
  <!-- E 酒店工具栏模块 -->

</template>

<script>

export default {
  props: {
    data: { //面包屑导航数据
      type: Array,
      default: () => [
        { name: '酒店', path: null },
        { name: '酒店预定', path: null },
      ]
    }
  }
}
</script>
