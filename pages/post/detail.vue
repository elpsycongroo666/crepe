<template>
  <div class="container el-row is-justify-space-between el-row--flex">
    <!-- 主体部分 -->
    <div class="main">
      <!-- 面包屑导航 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/post' }">旅游攻略</el-breadcrumb-item>
        <el-breadcrumb-item>攻略详情</el-breadcrumb-item>
      </el-breadcrumb>

      <!-- 标题部分 -->
      <h1>{{detailData.title}}</h1>
      <div class="post-info">
        <span>攻略：{{detailData.updated_at}}</span>
        <span>阅读：{{detailData.watch}}</span>
      </div>

      <!-- 内容部分 -->
      <div class="post-content"
           v-html="detailData.content">
        {{detailData.content}}
      </div>

      <!-- 点评部分 -->
      <div class="post-ctrl">
        <div class="el-row is-justify-center el-row--flex">
          <div class="ctrl-item">
            <i class="iconfont iconpinglun"></i>
            <p>评论(100)</p>
          </div>
          <div class="ctrl-item"
               @click="handleCollect">
            <i class="iconfont iconstar1"></i>
            <p>收藏</p>
          </div>
          <div class="ctrl-item">
            <i class="iconfont iconfenxiang"></i>
            <p>分享</p>
          </div>
          <div class="ctrl-item"
               @click="handlePraise">
            <i class="iconfont iconding"></i>
            <p>点赞({{detailData.like}})</p>
          </div>
        </div>
      </div>

      <!-- 评论区部分 -->
      <detailCommend />

    </div>

    <!-- 侧边栏部分 -->
    <detailAside />

  </div>
</template>

<script>
import detailAside from '@/components/post/detailAside.vue'
import detailCommend from '@/components/post/detailCommend.vue'
import moment from 'moment'
export default {
  data () {
    return {
      detailData: {},//当前页面的数据
    }
  },
  methods: {
    handlePraise () { // 文章点赞
      const { id } = this.$route.query
      this.$axios({
        url: '/posts/like',
        headers: { Authorization: `Bearer ${this.$store.state.user.userInfo.token}` },
        params: { id }
      })
        .then(res => {
          if (res.status === 200) {
            this.$message(res.data.message)
          }
        })
      // console.log(123)
    },
    handleCollect () { //文章收藏
      const { id } = this.$route.query
      this.$axios({
        url: '/posts/star',
        headers: { Authorization: `Bearer ${this.$store.state.user.userInfo.token}` },
        params: { id }
      })
        .then(res => {
          // console.log(res)
          if (res.status === 200) {
            this.$message(res.data.message)
          }
        })
    },
    getData () {
      // 获取文章数据
      const { id } = this.$route.query
      this.$axios({
        url: '/posts',
        params: { id }
      })
        .then(res => {
          console.log(res)
          if (res.status === 200) {
            this.detailData = res.data.data[0]
            this.detailData.updated_at = moment(this.detailData.updated_at).format('YYYY-MM-DD hh:mm')
            this.likes = res.data.data[0].like
          }
        })
    }
  },
  components: {
    detailAside,
    detailCommend
  },
  mounted () {
    this.getData()
  },
  watch: {
    // watch可以监听this下的所有属性
    $route () {
      // 参数变化就改变数据
      this.getData()
    }
  }
}
</script>

<style scoped>
.container {
  width: 1000px;
  margin: 0 auto;
  padding-top: 20px;
}
.main {
  width: 700px;
}
.main h1 {
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
}
.main .post-content >>> * {
  max-width: 700px !important;
}
.main .post-info {
  color: #999;
  padding: 20px;
  text-align: right;
}
.main .post-info span {
  margin-left: 20px;
}
.main .post-content {
  line-height: 1.5;
}
.main .post-content >>> img {
  margin: 10px 0;
}
.main .post-ctrl {
  padding: 50px 0 30px;
}
.main .post-ctrl .ctrl-item {
  margin: 0 20px;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
}
.main .post-ctrl .ctrl-item i {
  display: block;
  font-size: 28px;
  color: orange;
}
.main .post-ctrl .ctrl-item p {
  margin-top: 5px;
  font-size: 14px;
  color: #999;
}
.el-page {
  color: #303133;
  font-weight: 700;
  white-space: nowrap;
  padding: 2px 5px;
}
</style>
