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
      <h1>塞班贵？一定是你的打开方式不对！6000块玩转塞班</h1>
      <div class="post-info">
        <span>攻略：2019-05-22 10:57</span>
        <span>阅读：7457</span>
      </div>

      <!-- 内容部分 -->
      <div class="post-content">
        <p>大家对塞班岛总存在着这样的误解，知道它是美属地盘，就理所当然地觉得这里的花费一定很高，花费高有高的玩法，那如果只有6000块的预算呢？要怎么玩？关于旅行这件事，我们要让钱花得更有道理，收下这份攻略，带你6000块花式玩转塞班。</p>
        <span style="background-color:#fcf2dc"><img src="https://n3-q.mafengwo.net/s10/M00/E8/E4/wKgBZ1octoCABhgLAAafahORRLs91.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90"
               alt=""></span>
        <span style="color:#999">图：塞班岛。 by第5季旅游</span>
        <h2>一、怎样用6000块玩转塞班？</h2>
        <p>大多数出境游客人不做预算或最终花费远远超出预算，对预算的合理分配对控制我们旅行的花费就很重要了，如何只花6000块玩转塞班岛，对预算超支say no？下面从5个方面来为您一一解读：机票+酒店、岛上交通、玩乐项目、吃以及购买纪念品。</p>
        <p><br /></p>
        <h3>1.怎样订机票+酒店性价比最高？</h3>
        <p>机票和酒店的花销往往会占据我们旅行大半的花销，假设机票酒店为塞班行预算的一半，剩下的吃行玩购为预算的另一半，如果能在机票酒店这部分省下钱，也就意味着在塞班岛用来吃行玩购的钱就增加了<img src="https://images.mafengwo.net/images/i/face/brands_v3/6@2x.png"
               alt=""></p>
        <p><br /></p>
        <p><span><img src="https://p1-q.mafengwo.net/s10/M00/E9/33/wKgBZ1octwiAAKAoAAJ9ixcJc9M71.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90"
                 alt=""></span></p>
        <p><br /></p>
        <p>怎样去塞班？可以转机也可以直飞，转机大多会从韩国转，提前蹲守能买到韩国飞塞班的特价机票，2000以下就能入手，加上国内飞韩国的机票来回塞班得5000+，还没算上在塞班的住宿费用，转机还有中途等待的时间，光花在路途上的时间就比直飞要多上一倍甚至更多，转乘奔波劳累，非联程票还要担心行李托运问题，所以建议大家有直飞还是尽量选择直飞。</p>
        <p>在酒店上，旅途中我们呆在酒店的时间远比在外游玩的时间少，酒店干净整洁基本就能满足我们休息的需求，塞班不是个享受酒店的地方而且还真不能跟国内星级酒店等位比较，所以不建议大家花过多的钱在塞班的酒店体验上。</p>
        <p>怎样在机票酒店上获得最高性价比的体验？ 直飞塞班的航班一般和酒店一起打包成机票+酒店套餐，价格要比单定机票、酒店要更加便捷实惠，往往3千多就能把机票和酒店一键搞定。</p>
      </div>

      <!-- 收藏部分 -->
      <div class="post-ctrl">
        <div class="el-row is-justify-center el-row--flex">
          <div class="ctrl-item">
            <i class="iconfont iconpinglun"></i>
            <p>评论(100)</p>
          </div>
          <div class="ctrl-item">
            <i class="iconfont iconstar1"></i>
            <p>收藏</p>
          </div>
          <div class="ctrl-item">
            <i class="iconfont iconfenxiang"></i>
            <p>分享</p>
          </div>
          <div class="ctrl-item">
            <i class="iconfont iconding"></i>
            <p>点赞(51)</p>
          </div>
        </div>
      </div>

      <!-- 评论区部分 -->
      <div class="cmt-comment">
        <h4 class="cmt-title">评论</h4>
        <!-- 评论输入框 -->
        <div class="cmt-input">
          <div class="el-textarer">
            <el-input type="textarea"
                      :rows="2"
                      placeholder="说点什么吧..."
                      v-model="textarea"
                      style="resize: none; min-height:33px;">
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
          <div class="cmt-item">
            <div class="cmt-info">
              <img src="http://157.122.54.189:9095/assets/images/avatar.jpg"
                   alt="">
              魔法少女
              <i>2019-09-13 8:08</i>
              <span>1</span>
            </div>
            <div class="cmt-content">
              <div class="cmt-new">
                <p class="cmt-message">
                  111
                </p>
                <div class="el-row el-row--flex">
                  <div class="cmt-pic"><img src="http://157.122.54.189:9095/uploads/667b1a7ac6ea4b9787e3d89214ed8e99.jpg"
                         alt=""></div>
                </div>
                <div class="cmt-ctrl">
                  <a href="javascript:;">回复</a>
                </div>
              </div>
            </div>
          </div>
          <div class="cmt-item">
            <div class="cmt-info">
              <img src="http://157.122.54.189:9095/assets/images/avatar.jpg"
                   alt="">
              魔法少女
              <i>2019-09-13 8:08</i>
              <span>1</span>
            </div>
            <div class="cmt-content">
              <div class="cmt-new">
                <p class="cmt-message">
                  111
                </p>
                <div class="el-row el-row--flex">
                  <div class="cmt-pic"><img src="http://157.122.54.189:9095/uploads/667b1a7ac6ea4b9787e3d89214ed8e99.jpg"
                         alt=""></div>
                </div>
                <div class="cmt-ctrl">
                  <a href="javascript:;">回复</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="el-row is-justify-center el-row--flex"
             style="margin-top:10px">
          <el-pagination @size-change="handleSizeChange"
                         @current-change="handleCurrentChange"
                         :current-page="pageIndex"
                         :page-sizes="[1, 2, 3, 4]"
                         :page-size="100"
                         layout="total, sizes, prev, pager, next, jumper"
                         :total="400"
                         class="el-page">
          </el-pagination>
        </div>

      </div>

    </div>

    <!-- 侧边栏部分 -->
    <detailAside />

  </div>
</template>

<script>
import detailAside from '@/components/post/detailAside.vue'
export default {
  data () {
    return {
      pageSize: 2, //当前页面显示数据的条数
      pageIndex: 1,//当前页码
      total: 5,//当前数据总数
      textarea: '', //评论框内容
      dialogVisible: false,//是否打开预览图
      dialogImageUrl: ''//打开的预览图的存放路径
    }
  },
  methods: {
    handleSizeChange () { //切换当前显示数据的条数

    },
    handleCurrentChange () { //切换当前页码

    },
    handlePictureCardPreview () { //点击上传文件时，可以通过 file.response 拿到服务端返回数据

    },
    handleRemove () {// 文件列表移除文件时的钩子

    }
  },
  components: {
    detailAside
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 1000px;
  margin: 0 auto;
  padding-top: 20px;
}
.main {
  width: 700px;
  // 标题部分样式
  h1 {
    padding: 20px 0;
    border-bottom: 1px solid #ddd;
  }
  // 文章信息描述
  .post-info {
    color: #999;
    padding: 20px;
    text-align: right;
    span {
      margin-left: 20px;
    }
  }
  // 内容部分样式
  .post-content {
    line-height: 1.5;
    img {
      margin: 10px 0;
    }
    * {
      max-width: 700px !important;
    }
  }
  // 收藏图标样式部分
  .post-ctrl {
    padding: 50px 0 30px;
    .ctrl-item {
      cursor: pointer;
      font-size: 20px;
      text-align: center;
      margin: 0 20px;
      i {
        display: block;
        color: orange;
        font-size: 28px;
      }
      p {
        margin-top: 5px;
        font-size: 14px;
        color: #999;
      }
    }
  }
  // 评论区
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
  }
  // 评论列表
  .cmt-list {
    border: 1px solid #ddd;
  }
  .cmt-item {
    border-bottom: 1px dashed #ddd;
    padding: 20px 20px 5px;
    .cmt-info {
      font-size: 12px;
      margin-bottom: 10px;
      color: #666;
      vertical-align: top;
      img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
      }
      i {
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
    .cmt-pic {
      width: 80px;
      height: 80px;
      border-radius: 6px;
      overflow: hidden;
      padding: 5px;
      border: 1px dashed #ddd;
      margin-right: 5px;
      margin-top: 10px;
    }
    .cmt-ctrl {
      height: 20px;
      line-height: 20px;
      color: #1e50a2;
      text-align: right;
      font-size: 12px;
      a {
        display: none;
      }
    }
  }
  .el-page {
    color: #303133;
    font-weight: 700;
    white-space: nowrap;
    padding: 2px 5px;
  }
}
</style>
