<template>
  <div class="meuns_wapper">

    <div class="meuns_body">
      <el-row type="flex"
              justify="space-between"
              class="menu-item"
              align="middle"
              v-for="(item,index) in data"
              :key="index"
              @mouseout.native="hideCard(index)"
              @mouseover.native="showCard(index)">
        <el-col>
          <el-row type="flex"
                  justify="space-between"
                  align="middle"
                  class="or">
            <span>{{ item.type }}</span>
            <i class="wn el-icon-arrow-right"></i>
          </el-row>
        </el-col>
        <div v-show="showIndex==index"
             :class="['menus_item_card',{'show':showIndex==index}]">
          <nuxt-link :to="{ path: 'post', query: { city: v.city } }"
                     v-for="(v,i) in item.children"
                     :key="i">
            <el-row class="card_info">
              <el-col :span="2"
                      class="num">{{ i + 1 }}</el-col>
              <el-col :span="4"
                      class="city">
                {{v.city}}
              </el-col>
              <el-col :span="18"
                      class="introduction">{{ v.desc }}</el-col>
            </el-row>
          </nuxt-link>
        </div>
      </el-row>

      <!-- 注释 -->

    </div>

    <!-- 主题推荐 -->
    <div class="menus_recommend">
      <h3>主题推荐</h3>
      <nuxt-link to="#">
        <img src="http://157.122.54.189:9093/images/pic_sea.jpeg"
             alt />
      </nuxt-link>
    </div>
  </div>
</template>


<script>
export default {
  data () {
    return {
      showIndex: null,
      data: []
    };
  },
  mounted () {
    this.$axios({
      url: '/posts/cities',
      method: 'GET'
    }).then(res => {
      this.data = res.data.data
    })
  },
  methods: {
    showCard (index) {
      this.showIndex = index
    },
    hideCard (index) {
      this.showIndex = null
    }
  }
};
</script>




<style lang="less" scoped>
.meuns_wapper {
  width: 260px;
  .meuns_body {
    position: relative;
    font-size: 14px;
    border-bottom: 1px solid #ddd;
    .menu-item {
      height: 40px;
      padding: 0 20px;
      border-left: 1px solid #ddd;
      border-right: 1px solid #ddd;
      border-top: 1px solid #ddd;
      .active {
        color: orange;
        border-right: #fff;
        > i {
          color: orange;
        }
      }

      > i {
        font-size: 20px;
        color: #999;
        // position: absolute;
        right: 15px;
      }
    }
  }
  .menus_recommend {
    margin-top: 20px;
    h3 {
      font-weight: normal;
      font-size: 16px;
      border-bottom: 1px solid #ddd;
      padding-bottom: 10px;
      margin-bottom: 10px;
    }
    a {
      display: block;
      width: 100%;
    }
    img {
      width: 100%;
    }
  }

  .menus_item_card {
    padding-top: 11px;
    // display: none;
    // position: absolute;
    left: 259px;
    top: 0;
    width: 350px;
    font-size: 14px;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    border-right: 1px solid #ddd;
    background-color: #fff;
    z-index: 9999;

    .card_info {
      padding: 0 20px;
      line-height: 37px;
      //   border-right: 1px solid #ddd;
      color: orange;
      &:last-child {
        padding-bottom: 10px;
        border-left: 1px solid #ddd;
      }
      .num {
        font-size: 25px;
        font-style: italic;
      }
      .city {
        &:hover {
          text-decoration: underline;
        }
      }
      .introduction {
        color: #999;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .show {
    position: absolute !important;
    top: 0 !important;
  }
  .or {
    &:hover {
      color: orange;
    }
  }
}
</style>
