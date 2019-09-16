<template>
  <div class="cmt-comment">
    <h4 class="cmt-title">评论</h4>

    <!-- 回复任务的tag标签 -->
    <el-tag :closable="true"
            :disable-transitions="false"
            v-show="tagVisible"
            @close="handleClose"
            class="tag">
      回复 @{{nickname}}
    </el-tag>

    <!-- 评论输入框 -->
    <div class="cmt-input">
      <div class="el-textarer">
        <el-input type="textarea"
                  placeholder="说点什么吧..."
                  v-model="form.content"
                  class="commend-textarea">
        </el-input>
      </div>
    </div>

    <!-- 文件上传  -->
    <div class="cmt-input-upload el-row is-justify-space-between el-row--flex">
      <!-- 图片 -->
      <div class="cmt-pics">
        <el-upload :action="`${$axios.defaults.baseURL}/upload`"
                   list-type="picture-card"
                   name="files"
                   :on-remove="handleRemove"
                   :before-upload="handleBefore"
                   :headers="{ Authorization: `Bearer ${$store.state.user.userInfo.token}`}"
                   :http-request="customUpLoad"
                   ref="upload">
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
                   class="cmt-sub"
                   @click="submit">提交</el-button>
      </div>
    </div>

    <!-- 评论列表 -->
    <div class="cmt-list"
         v-show="this.total">
      <div class="cmt-item"
           v-for="(item,index) in commendList"
           :key="index">
        <div class="cmt-info">
          <img :src="`${$axios.defaults.baseURL}${item.account.defaultAvatar}`"
               alt="">
          {{item.account.nickname}}
          <i>{{item.updated_at | timeFormat}}</i>
          <span>{{item.level}}</span>
        </div>
        <div class="cmt-content">
          <detailItemList :data="item.parent"
                          v-if="item.parent" />
          <div class="cmt-new">
            <p class="cmt-message">
              {{item.content}}
            </p>
            <div class="el-row el-row--flex">
              <div class="cmt-pic"
                   @click="showImageDialog(image.url)"
                   v-for="(image,index) in item.pics"
                   :key="index"><img :src="`${$axios.defaults.baseURL}${image.url}`"
                     alt="">
              </div>
            </div>
            <div class="cmt-ctrl">
              <a href="javascript:;"
                 @click="replay(item.id,item.account.nickname)">回复</a>
            </div>
          </div>
        </div>
      </div>

      <!-- 分页结构 -->
      <div class="el-row is-justify-center el-row--flex"
           style="margin-top:10px"
           v-show="this.total">
        <el-pagination @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page="pageIndex"
                       :page-sizes="[2, 3, 4, 5]"
                       :page-size="pageSize"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="total"
                       class="el-page">
        </el-pagination>
      </div>

    </div>

    <!-- 抢占沙发 -->
    <div class="sofa"
         v-show="!this.total">
      暂无评论，赶紧抢占沙发！
    </div>

    <!-- 评论区大图片展示 -->
    <el-dialog :visible.sync="imageDialogFormVisible"
               size="tiny">
      <img width="100%"
           :src="`${$axios.defaults.baseURL}${this.imgUrl}`"
           alt="">
    </el-dialog>
  </div>
</template>

<script>
import detailItemList from '@/components/post/detailItemList.vue'
import moment from 'moment'
export default {
  data () {
    return {
      commendList: [], //评论数据
      total: 1,//总的评论数
      pageSize: 2, //当前页面显示数据的条数
      pageIndex: 0,//当前页码
      textarea: '', //评论框内容
      dialogVisible: false,//是否打开预览图
      dialogImageUrl: '',//打开的预览图的存放路径
      imageDialogFormVisible: false, //评论区图片展示
      imgUrl: "",//为展示大图存储路径
      form: {
        content: "",//评论内容
        pics: [], //图片数组
        post: this.$route.query.id,//文章id
        follow: 0 //回复id
      },
      tagVisible: false, //tag标签隐藏
      nickname: '' //存储tag标签@的人名字
    }
  },
  methods: {
    handleClose () { //隐藏tag标签
      this.tagVisible = false
      this.form.follow = ''
    },
    submit () { //评论提交
      console.log(this.form)
      this.$axios({
        url: '/comments',
        method: 'post',
        data: this.form,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.$store.state.user.userInfo.token}`
        }
      })
        .then(res => {
          console.log(res)
          if (res.status === 200) {
            this.$message.success(res.data.message)
            // 刷新
            this.getCommendList()
            // 重置文本域
            this.form.content = ""
            // 清除已上传的文件列表
            this.$refs.upload.clearFiles()
          }
        })
    },
    handleBefore (file) { //文件上传之前
      // console.log(file) type: "image/jpeg"
      if (file.type.indexOf('image') !== 0) {
        this.$message.warning('请选择类型为jpg,png,jpeg的文件')
        return false
      }
    },
    customUpLoad (files) { //自定义文件上传
      this.$axios.post(`${this.$axios.defaults.baseURL}/upload`, null, {
        // transformRequest 允许在向服务器发送前，修改请求数据
        transformRequest: [
          () => {
            let formData = new FormData();
            formData.append('files', files.file);
            return formData
          }
        ]
      })
        .then(res => {
          console.log(res)
          this.form.pics.push(res.data[0])
        })
    },
    handleRemove (file, fileList) {// 文件列表移除文件时的钩子
      for (let i = 0; i < this.form.pics.length; i++) {
        if (this.form.pics[i].name === file.name) {
          this.form.pics.splice(i, 1)
        }
      }
    },
    handleSizeChange (val) { //切换当前显示数据的条数
      this.pageSize = val
      //刷新页面
      this.getCommendList()
    },
    handleCurrentChange (val) { //切换当前页码
      this.pageIndex = (val - 1) * 2
      this.getCommendList() //刷新页面
    },
    getCommendList () { //获取评论数据
      const { id } = this.$route.query
      this.$axios({
        url: '/posts/comments',
        params: { post: id, _limit: this.pageSize, _start: this.pageIndex }
      }).then(res => {
        console.log(res)
        if (res.status === 200) {
          this.commendList = res.data.data
          this.total = res.data.total
          this.$store.commit('post/setCommendSize', res.data)
        }
      })
    },
    showImageDialog (url) { //展示图片对话框
      // // 弹出对护框
      this.imageDialogFormVisible = true
      this.imgUrl = url
    },
    replay (id, nickname) { //回复
      // 显示tag标签
      this.tagVisible = true
      // 传递回复时需要传递的id
      this.form.follow = id
      // 存储tag @的用户名
      this.nickname = nickname
    }
  },
  mounted () {
    this.getCommendList()//获取评论数据
  },
  components: {
    detailItemList
  },
  filters: {
    timeFormat (value) {
      return moment(value).format('YYYY-MM-DD hh:mm')
    }
  },
  watch: {
    // 深度监听仓库数据变化
    '$store.state.post.replayData': {
      handler (newData, oldData) {
        // 显示tag标签
        if (this.nickname) {
          this.tagVisible = true
        }
        // 传递回复时需要传递的id
        this.form.follow = this.$store.state.post.replayData.id
        // 存储tag @的用户名
        this.nickname = this.$store.state.post.replayData.nickname
      },
      deep: true,
      immediate: true
    },
    $route () {
      // 刷新评论数据
      this.getCommendList()
    }
  }
}
</script>

<style lang="less" scoped>
.cmt-comment {
  // 回复标签
  .tag {
    margin-bottom: 10px;
  }
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
      .cmt-new {
        &:hover {
          a {
            display: block;
            text-decoration: underline;
          }
        }
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
      position: relative;
      a {
        display: none;
      }
    }
    // 评论图片
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
  // 抢占沙发
  .sofa {
    color: #999;
    font-size: 14px;
    text-align: center;
    padding: 30px 0;
    border: 1px dashed #ddd;
    margin-bottom: 20px;
  }
}
</style>
