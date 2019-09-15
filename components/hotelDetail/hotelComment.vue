<template>
  <div class="comment">
    <h4>0条真实用户评论</h4>
    <el-row class="comment_info">
      <el-col :span="4">
        <p>总评数：82</p>
        <p>好评数：14</p>
        <p>差评数：6</p>
      </el-col>
      <el-col :span="5"
              class="recomment_score">
        <!-- 星星 -->
        <el-rate class="starts"
                 v-model="value"
                 disabled
                 :allow-half="true"
                 show-score
                 text-color="#ff9900"
                 :colors="['#F7BA2A', '#F7BA2A', '#F7BA2A']"
                 void-icon-class="el-icon-star-off"
                 void-color="#C6D1DE"
                 @change="handelScope">
        </el-rate>
        <!-- 星星底下的推荐 -->
        <div class="recomd">
          推荐
        </div>
      </el-col>

      <!-- 环境评分 -->
      <el-col :span="3">
        <div class="circle">
          <el-progress type="circle"
                       :percentage="70"
                       :width="70"
                       color="#f90"
                       :stroke-width="2"
                       :show-text="false">
          </el-progress>
          <span class="text">
            <span>环境</span>
            <span>7.3</span>
          </span>
        </div>
      </el-col>

      <!-- 产品评分 -->
      <el-col :span="3">
        <div class="circle">
          <el-progress type="circle"
                       :percentage="70"
                       :width="70"
                       :stroke-width="2"
                       color="#f90"
                       :show-text="false">
          </el-progress>
          <span class="text">
            <span>产品</span>
            <span>7.5</span>
          </span>
        </div>
      </el-col>

      <!-- 服务评分 -->
      <el-col :span="3">
        <div class="circle">
          <el-progress type="circle"
                       :percentage="70"
                       :width="70"
                       :stroke-width="2"
                       color="#f90"
                       :show-text="false">
          </el-progress>
          <span class="text">
            <span>服务</span>
            <span>7.3</span>
          </span>
        </div>
      </el-col>

    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 3.5

    }
  },

  methods: {
    // 操作星星的分数
    handelScope (score) {
      score = this.value
    }
  },

  mounted () {
    // 组件加载完毕时，调用方法
    this.handelScope()
  }



}
</script>

<style lang="less" scoped>
@import "../../assets/styles/main.less";

.comment {
  margin-top: 40px;
  .comment_info {
    padding: 20px 0;
    color: @drakTextColor;

    // 星星样式开始
    .recomment_score {
      position: relative;
      // 推荐字体样式
      .recomd {
        position: absolute;
        top: 0;
        left: 18%;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border: 2px solid @mainColor;
        color: @mainColor;
        line-height: 70px;
        text-align: center;
        // 透明度
        opacity: 0.25;
        // 旋转角度
        transform: rotate(-30deg);
        font-size: x-large; //字体加大
      }
      // 组件星星样式
      .starts {
        margin-top: 20px;
        /deep/.el-rate__icon {
          font-size: 23px;
        }
      }
    }

    // 圈圈样式开始
    .circle {
      width: 70px;
      position: relative;
      // 更换圈圈底部的背景颜色
      /deep/ .el-progress-circle {
        svg {
          path {
            &:first-child {
              stroke: #fff;
            }
          }
        }
      }

      // 圈圈里的字体样式
      .text {
        position: absolute;
        top: 50%;
        left: 50%;
        color: #ff9900;
        transform: translate(-50%, -50%);
        text-align: center;
      }
    }
  }
}
</style>
