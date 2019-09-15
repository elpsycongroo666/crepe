<template>
  <div class="cmt-comment">
    <h4 class="cmt-title">评论</h4>
    <!-- 评论输入框 -->
    <div class="cmt-input">
      <div class="el-textarer">
        <el-input type="textarea"
                  placeholder="说点什么吧..."
                  v-model="textarea"
                  class="commend-textarea">
        </el-input>
      </div>
    </div>

    <!-- 文件上传和按钮  -->
    <div class="cmt-input-upload el-row is-justify-space-between el-row--flex">
      <!-- 图片 -->
      <div class="cmt-pics">
        <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                   list-type="picture-card"
                   :on-preview="handlePictureCardPreview"
                   :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible"
                   size="tiny">
          <img width="100%"
               :src="dialogImageUrl"
               alt="">
        </el-dialog>
      </div>
      <div>
        <el-button type="primary"
                   class="cmt-sub">提交</el-button>
      </div>
    </div>

    <!-- 评论列表区域 -->
    <div class="cmt-list">
      <div class="cmt-item"
           v-for="(item,index) in commendList"
           :key="index">
        <div class="cmt-info">
          <img :src="`${$axios.defaults.baseURL}${item.account.defaultAvatar}`"
               alt="">
          {{item.account.nickname}}
          <i>{{item.created_at}}</i>
          <span>{{item.level}}</span>
        </div>
        <div class="cmt-content">
          <detailItemList :data="item.parent" />
          <div class="cmt-new">
            <p class="cmt-message">
              {{item.content}}
            </p>
            <div class="el-row el-row--flex">
              <div class="cmt-pic"
                   v-for="(image,index) in item.pics"
                   :key="index"><img :src="`${$axios.default.baseURL}${image.url}`"
                     alt=""
                     v-for="image in item.pics"
                     :key="image.id"></div>
            </div>
            <div class="cmt-ctrl">
              <a href="javascript:;">回复</a>
            </div>
          </div>
        </div>
      </div>

      <!-- 分页结构 -->
      <div class="el-row is-justify-center el-row--flex"
           style="margin-top:10px">
        <el-pagination @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page="pageIndex"
                       :page-sizes="[1, 2, 3, 4]"
                       :page-size="100"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="total"
                       class="el-page">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import detailItemList from '@/components/post/detailItemList.vue'
export default {
  data () {
    return {
      commendList: [], //评论数据
      total: 1,//总的评论数
      pageSize: 2, //当前页面显示数据的条数
      pageIndex: 1,//当前页码
      textarea: '', //评论框内容
      dialogVisible: false,//是否打开预览图
      dialogImageUrl: '',//打开的预览图的存放路径
    }
  },
  methods: {
    handlePictureCardPreview () { //点击上传文件时，可以通过 file.response 拿到服务端返回数据

    },
    handleRemove () {// 文件列表移除文件时的钩子

    },
    handleSizeChange () { //切换当前显示数据的条数

    },
    handleCurrentChange () { //切换当前页码

    }
  },
  mounted () {
    const { id } = this.$route.query
    this.$axios({
      url: '/posts/comments',
      params: { post: id, _limit: this.pageSize, _start: this.pageIndex }
    })
      .then(res => {
        console.log(res)
        if (res.status === 200) {
          this.commendList = res.data.data
          this.total = res.data.total
        }
      })
  },
  components: {
    detailItemList
  }
}
</script>

<style lang="less" scoped>
.cmt-comment {
  .cmt-title {
    font-weight: normal;
    font-size: 18px;
    margin-bottom: 20px;
  }
  // 评论输入框
  .cmt-input {
    margin-bottom: 10px;
    .el-textarea {
      display: inline-block;
      width: 100%;
      font-size: 14px;
      vertical-align: bottom;
    }
  }
  // 图片上传
  .cmt-input-upload {
    margin-bottom: 30px;
    .cmt-sub {
      padding: 7px 15px;
      font-size: 12px;
      border-radius: 3px;
    }
  }
  // 评论列表
  .cmt-list {
    border: 1px solid #ddd;
  }
  .cmt-item {
    border-bottom: 1px dashed #ddd;
    padding: 20px 20px 5px;
    .cmt-info {
      margin-bottom: 10px;
      font-size: 12px;
      color: #666;
      img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
      }
      * {
        vertical-align: top;
      }
      * {
        color: #999;
      }
      span {
        float: right;
      }
    }
    .cmt-content {
      padding: 0 0 0 30px;
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
      &:hover {
        a {
          display: block;
          text-decoration: underline;
        }
      }
      * {
        display: none;
      }
    }
  }
}
</style>
