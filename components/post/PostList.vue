<template>
  <div>
    <div class="post-item">

      <h4 class="post-title">{{data.title}}</h4>

      <p class="post-desc">
        <nuxt-link to="/">
          {{data.summary}}
        </nuxt-link>
      </p>
      <el-row class="post_card-images"
              type="flex"
              justify="space-between">
        <nuxt-link to="#"
                   v-for="(item,index) in data.images"
                   :key="index">
          <img :src="item"
               alt="">
        </nuxt-link>
        <!-- <nuxt-link to="#">
        <img src="@/images/u=3215222857,1774393785&fm=26&gp=0.jpg"
             alt="">
      </nuxt-link>
      <nuxt-link to="#">
        <img src="@/images/u=3215222857,1774393785&fm=26&gp=0.jpg"
             alt="">
      </nuxt-link> -->
      </el-row>

      <el-row class="post-info"
              type="flex"
              justify="space-between">
        <el-row class="post-info-left">
          <span>
            <i class="el-icon-location-outline"></i>{{data.cityName}}
          </span>
          <el-row class="post-user">
            by
            <nuxt-link to="#">
              <img :src="`${$axios.defaults.baseURL}${$store.state.user.userInfo.user.defaultAvatar}`"
                   alt="">
            </nuxt-link>
            <nuxt-link to="#">
              {{$store.state.user.userInfo.user.nickname}}
            </nuxt-link>
          </el-row>
          <span>
            <i class="el-icon-view"></i>{{data.watch}}
          </span>
        </el-row>
        <span class="post-info-right">

          {{data.like}}赞
        </span>
      </el-row>

      <!-- 只有一张图片的样式 -->

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },

  props: {
    data: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style lang="less" scoped>
.post-item {
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
}

.post-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 15px;
  font-weight: 400;
  font-size: 18px;

  &:hover {
    color: orange;
    cursor: pointer;
  }
}

* {
  margin: 0;
  padding: 0;
}

.post-desc {
  margin-bottom: 15px;
  line-height: 1.5;
  font-size: 14px;
  height: 63px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
}

.post_card-images {
  margin: 15px 0;
  box-sizing: border-box;
  align-items: center;

  img {
    width: 220px;
    height: 150px;
  }
}

.post-info {
  box-sizing: border-box;

  .post-info-left {
    font-size: 12px;
    color: #999;
    align-items: center;
    display: flex;
    box-sizing: border-box;

    > span {
      margin-right: 10px;
    }

    .post-user {
      margin-right: 10px;
      align-items: center;
      display: flex;
      box-sizing: border-box;

      img {
        display: block;
        width: 16px;
        height: 16px;
        border-radius: 100px;
        margin: 5px;
      }

      > a {
        color: orange;
      }
    }
  }

  .post-info-right {
    color: orange;
  }
}
</style>
