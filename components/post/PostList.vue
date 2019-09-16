<template>
  <div>
    <div class="post-item"
         v-if="data.images.length > 1">
      <div class="post-content">
        <h4 class="post-title">
          <nuxt-link :to='"/post/detail?id="+data.id'>
            {{data.title}}
          </nuxt-link>
        </h4>
        <p class="post-desc">
          <nuxt-link :to='"/post/detail?id="+data.id'>
            {{data.summary}}
          </nuxt-link>
        </p>
      </div>
      <el-row class="post_card-images post-cover"
              type="flex"
              justify="space-between">
        <nuxt-link :to='"/post/detail?id="+data.id'
                   v-for="(item,index) in data.images"
                   :key="index">
          <img :src="item"
               alt="">
        </nuxt-link>
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
    </div>

    <!-- 只有一张图片的结构 -->
    <div class="post-item-One"
         v-else>
      <el-row class="post-cover-one">
        <nuxt-link :to='"/post/detail?id="+data.id'
                   v-for="(item,index) in data.images"
                   :key="index">
          <img :src="item"
               alt="">
        </nuxt-link>
      </el-row>

      <div class="post-content-one">
        <h4 class="post-title-one">
          <nuxt-link :to='"/post/detail?id="+data.id'>
            {{data.title}}
          </nuxt-link>
        </h4>

        <p class="post-desc-one">
          <nuxt-link :to='"/post/detail?id="+data.id'>
            {{data.summary}}
          </nuxt-link>
        </p>

        <el-row class="post-info-one"
                type="flex"
                justify="space-between">
          <el-row class="post-info-left-one"
                  type="flex">
            <span>
              <i class="el-icon-location-outline"></i>{{data.cityName}}
            </span>
            <el-row class="post-user-one"
                    type="flex">
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
          <span class="post-info-right-one">

            {{data.like}}赞
          </span>
        </el-row>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      //只有一张图片的时候
      OneImg: 'OnlyOneImg',


    }
  },

  //------------------------------------------//
  props: {
    data: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style lang="less" scoped>
img {
  width: 100%;
  display: block;
}

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
  // align-items: center;
  overflow: hidden;
  > a {
    float: left;
  }
  img {
    width: 100%;
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

//只有一张图片的时候的样式
.post-item-One {
  * {
    margin: 0;
    padding: 0;
  }

  vertical-align: middle;
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  display: flex;

  .post-cover-one {
    width: 220px;
    height: 150px;
    overflow: hidden;
    flex-shrink: 0;
    margin-right: 10px;
    box-sizing: border-box;

    &:before {
      display: table;
      content: "";
    }

    &:after {
      clear: both;
      display: table;
      content: "";
    }
  }

  .post-content-one {
    width: 470px;

    .post-title-one {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 15px;
      font-weight: 400;
      font-size: 18px;
    }

    .post-desc-one {
      margin-bottom: 15px;
      line-height: 1.5;
      font-size: 14px;
      height: 63px;
      overflow: hidden;
      text-overflow: ellipsis;

      a {
        color: #666;
      }
    }

    .post-info-left-one {
      font-size: 12px;
      color: #999;
      align-items: center;
      box-sizing: border-box;

      .post-user-one {
        margin-right: 10px;
        align-items: center;
        box-sizing: border-box;
        vertical-align: middle;

        img {
          display: block;
          width: 16px;
          height: 16px;
          border-radius: 100px;
          margin: 5px;
        }

        a {
          color: orange;
        }
      }

      span {
        margin-right: 10px;
      }
    }

    .post-info-right-one {
      color: orange;
    }
  }
}
</style>
