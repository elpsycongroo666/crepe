/**
 * @Author: Joe Yao
 * @Date: 2019-09-12 08:52:05
 * @Last Modified by: Joe Yao
 * @Last Modified time: 2019-09-13 12:37:19
 */
<style lang="less" scoped>
@import "~styles/main.less";
.filter {
  padding: 7px 0;
  border: 1px solid @bdColor;
  border-radius: 3px;
  /deep/ .el-slider__button {
    border: 2px solid @mainColor;
  }
  /deep/.el-slider__bar {
    background-color: @mainColor;
  }
}
.filter__item {
  + .filter__item {
    border-left: 1px solid @bdColor;
  }
  padding: 5px 20px;
}
.filter__item-text {
  font-size: 14px;
  color: @drakTextColor;
}
/** 下拉选项修改样式
---------------------------------------- */
.filter__input {
  position: relative;
  width: 100%;
}
.filter__options {
  border: 1px solid @bdColor;
  max-height: 230px;
  min-width: 187px;
}
.el-dropdown-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 38px;
  line-height: 38px;
}
.dropdown-link-text {
  flex: 1;
}
.el-dropdown-menu__item {
  list-style: none;
  line-height: 36px;
  padding: 0 20px;
  margin: 0;
  font-size: 14px;
  color: #606266;
  cursor: pointer;
  outline: 0;
}
</style>
<template>

  <!-- S 酒店首页模块 -->
  <div class="filter">
    <el-row type="flex"
            justify="space-between">
      <el-col :span="8"
              class="filter__item">
        <el-row type="flex"
                justify="space-between">
          <el-col :span="12"
                  class="filter__item-text">价格</el-col>
          <el-col :span="12"
                  class="filter__item-text">0-1200</el-col>
        </el-row>
        <el-row>
          <el-slider v-model="price"></el-slider>
        </el-row>
      </el-col>
      <!-- /价格模块 -->

      <el-col :span="6"
              class="filter__item">
        <el-row type="flex"
                justify="space-between">
          <el-col :span="12"
                  class="filter__item-text">住宿等级</el-col>
        </el-row>
        <el-row>
          <el-dropdown class="filter__input"
                       placement='bottom'>
            <span class="el-dropdown-link">
              <span class="dropdown-link-text">不限</span>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown"
                              class="filter__options">
              <el-dropdown-item>
                <i class="iconfont iconcircle"></i>
                <span>一星</span>
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="iconfont iconright-1"></i>
                <span>一星</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-row>
      </el-col>
      <!-- /住宿等级模块 -->

      <el-col :span="6"
              class="filter__item">
        <el-row type="flex"
                justify="space-between">
          <el-col :span="12"
                  class="filter__item-text">住宿类型</el-col>
        </el-row>
        <el-row class="filter__item-input">
          <el-dropdown class="filter__input"
                       placement='bottom'>
            <span class="el-dropdown-link">
              <span class="dropdown-link-text">不限</span>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown"
                              class="filter__options">
              <el-dropdown-item>
                <i class="iconfont iconcircle"></i>
                <span>一星</span>
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="iconfont iconright-1"></i>
                <span>一星</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-row>
      </el-col>
      <!-- /住宿类型模块 -->

      <el-col :span="6"
              class="filter__item">
        <el-row type="flex"
                justify="space-between">
          <el-col :span="12"
                  class="filter__item-text">酒店设施</el-col>
        </el-row>
        <el-row class="filter__input">
          <el-dropdown class="filter__input"
                       placement='bottom'>
            <span class="el-dropdown-link">
              <span class="dropdown-link-text">不限</span>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown"
                              class="filter__options">
              <el-dropdown-item>
                <i class="iconfont iconcircle"></i>
                <span>一星</span>
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="iconfont iconright-1"></i>
                <span>一星</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-row>
      </el-col>
      <!-- /酒店设施模块 -->

      <el-col :span="6"
              class="filter__item">
        <el-row>
          <el-col :span="12"
                  class="filter__item-text">酒店品牌</el-col>
        </el-row>
        <el-row class="filter__item-input">
          <el-dropdown class="filter__input"
                       placement='bottom'>
            <span class="el-dropdown-link">
              <span class="dropdown-link-text">不限</span>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown"
                              class="filter__options">
              <el-dropdown-item>
                <i class="iconfont iconcircle"></i>
                <span>一星</span>
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="iconfont iconright-1"></i>
                <span>一星</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-row>
      </el-col>
      <!-- /酒店品牌模块 -->

    </el-row>
  </div>
  <!-- E 酒店首页模块 -->

</template>

<script>
export default {
  name: 'HotelFilter',
  data () {
    return {
      price: 0
    }
  },
}
</script>
