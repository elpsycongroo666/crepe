  <!-- 攻略详情侧边栏组件 -->
<template>
  <div class="aside">
    <h4>相关攻略</h4>
    <div class="recommend-list"
         v-for="item in recommendList"
         :key="item.id">
      <nuxt-link :to="`/post/detail?id=${item.id}`"
                 class="com-item">
        <div class="post-imgText el-row el-row--flex">
          <div class="post-img"><img :src="`${item.images[0]}`"
                 alt="">
          </div>
          <div class="post-text">
            <div>{{item.title}}</div>
            <p>{{item.updated_at |timeForm}} 阅读 {{item.watch}}</p>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data () {
    return {
      recommendList: [] //相关攻略数据
    }
  },
  mounted () {
    // 获取相关攻略的数据
    const { id } = this.$route.query
    this.$axios({
      url: '/posts/recommend',
      params: { id }
    })
      .then(res => {
        console.log(res)
        if (res.status === 200) {
          this.recommendList = res.data.data
        }
      })
  },
  filters: {
    timeForm (value) {
      return moment(value).format('YYYY-MM-DD hh:mm')
    }
  }
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
  .com-item {
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
      img {
        width: 100%;
        height: 100%;
      }
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
