<template>
  <el-row class="post-title"
          type="flex"
          justify="space-between">
    <h4>推荐攻略</h4>
    <el-button type="primary"
               icon="el-icon-edit"
               class="post_el-button">
      <nuxt-link to="/post/create">
        写游记
      </nuxt-link>
    </el-button>
  </el-row>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.post-title {
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
  position: relative;
  align-items: center;

  h4 {
    font-weight: 400;
    font-size: 18px;
    color: orange;

    &:after {
      display: block;
      content: "";
      width: 72px;
      height: 2px;
      background: orange;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }

  .post_el-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;

    &:hover {
      background: rgb(102, 177, 255);
    }
  }
}
</style>
