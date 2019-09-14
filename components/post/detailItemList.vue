<template>
  <div class="cmt-floor">
    <div class="cmt-content">
      <div class="cmt-info">
        {{data.account.nickname}}
        <i>{{data.account.updated_at}}</i>
        <span>{{data.level}}</span>
      </div>
      <p class="cmt-message">
        {{data.content}}
      </p>
      <div class="el-row el-row--flex"></div>
      <div class="cmt-ctrl">
        <a href="javascript:;">回复</a>
      </div>
    </div>
    <floor :data="data.parent"
           v-if="data.parent" />
  </div>
</template>

<script>
export default {
  name: "floor",
  props: {
    data: {
      type: Object,
      default: {
        account: {}
      }
    }
  },
  mounted () {
    console.log(this.data, 123)
  }
}
</script>

<style lang="less" scoped>
.cmt-floor {
  background: #f9f9f9;
  border: 1px solid #ddd;
  padding: 2px;
  .cmt-content {
    padding: 5px 10px 0;
    &:hover {
      a {
        display: block;
        text-decoration: underline;
      }
    }
    .cmt-info {
      font-size: 12px;
      color: #666;
      i {
        color: #999;
      }
      span {
        float: right;
      }
    }
    .cmt-message {
      margin-top: 10px;
    }
    .cmt-ctrl {
      height: 20px;
      line-height: 20px;
      font-size: 12px;
      color: #1e50a2;
      text-align: right;
      * {
        display: none;
      }
    }
  }
}
</style>
