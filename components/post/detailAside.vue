<template>
  <div class="aside">
    <h4>相关攻略</h4>
    <div class="recommend-list">
      <nuxt-link to="/post/detail?id=4"
                 class="item">
        <div class="post-imgText el-row el-row--flex">
          <div class="post-img"><img src=""
                 alt="">
          </div>
          <div class="post-text">
            <div>魔法少女</div>
            <p>2019-09-13 12:40 阅读 3</p>
          </div>
        </div>

      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.aside {
  width: 280px;
  h4 {
    font-weight: 400;
    font-size: 18px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
  }
  .item {
    display: block;
    padding: 20px 0;
    border-bottom: 1px solid #ddd;
    .post-img {
      margin-right: 10px;
      overflow: hidden;
      background-color: #ddd;
      width: 100px;
      height: 80px;
      flex-shrink: 0;
    }
    .post-text {
      flex: 1;
      position: relative;
      div {
        line-height: 1.4em;
        height: 2.8em;
        overflow: hidden;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
      }
      p {
        position: absolute;
        bottom: 0;
        left: 0;
        font-size: 12px;
        color: #999;
      }
    }
  }
}
</style>
