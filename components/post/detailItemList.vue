<template>
  <!-- 递归组件 -->
  <div class="cmt-floor">
    <div class="cmt-content">
      <div class="cmt-info">
        {{data.account.nickname}}
        <i>{{data.account.updated_at | timeFormat}}</i>
        <span>{{data.level}}</span>
      </div>
      <p class="cmt-message">
        {{data.content}}
      </p>
      <div class="el-row el-row--flex">
        <div class="cmt-pic"
             @click="showImageDialog(item.url)"
             v-for="(item,index) in data.pics"
             :key="index">
          <img :src="`${$axios.defaults.baseURL}${item.url}`"
               alt="">
        </div>
      </div>
      <div class="cmt-ctrl">
        <a href="javascript:;"
           @click="replay(data.id,data.account.nickname)">回复</a>
      </div>
    </div>
    <floor :data="data.parent"
           v-if="data.parent" />

    <!-- 大图展示区 -->
    <el-dialog :visible.sync="imageDialogFormVisible"
               size="tiny">
      <img width="100%"
           :src="`${$axios.defaults.baseURL}${this.imgUrl}`"
           alt="">
    </el-dialog>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data () {
    return {
      imageDialogFormVisible: false,//对话框默认值
      imgUrl: "", //通过这个存储点击时的图片路径
    }
  },
  name: "floor",
  props: {
    data: {
      type: Object,
      default: {
        account: {}
      }
    }
  },
  filters: {
    timeFormat (value) {
      return moment(value).format('YYYY-MM-DD hh:mm')
    }
  },
  methods: {
    showImageDialog (url) {//展开图片
      // 弹出对话框
      this.imageDialogFormVisible = true;
      this.imgUrl = url
    },
    replay (id, nickname) {//回复
      let data = { id, nickname }
      this.$store.commit('post/setReplayData', data)
    }
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
  // 评论列表图片样式
  .cmt-pic {
    width: 80px;
    height: 80px;
    border-radius: 6px;
    overflow: hidden;
    margin-right: 5px;
    margin-top: 10px;
    padding: 5px;
    border: 1px dashed #ddd;
    img {
      width: 100%;
      height: 100%;
      display: block;
      cursor: pointer;
      object-fit: cover;
    }
  }
}
</style>
