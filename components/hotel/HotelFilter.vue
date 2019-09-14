/**
 * @Author: Joe Yao
 * @Date: 2019-09-12 08:52:05
 * @Last Modified by: Joe Yao
 * @Last Modified time: 2019-09-15 00:38:39
 */
<style lang="less" scoped>
@import "~styles/main.less";
.filter {
  padding: 7px 0;
  border: 1px solid @bdColor;
  border-radius: 3px;
  /deep/ .el-slider__button {
    border: 2px solid @mainColor;
  }
  /deep/.el-slider__bar {
    background-color: @mainColor;
  }
}
.filter__item {
  + .filter__item {
    border-left: 1px solid @bdColor;
  }
  padding: 5px 20px;
}
.filter__item-text {
  font-size: 14px;
  color: @drakTextColor;
}
/** 下拉选项修改样式
---------------------------------------- */
.filter__input {
  position: relative;
  width: 100%;
}
.filter__options {
  border: 1px solid @bdColor;
  max-height: 230px;
  min-width: 187px;
  overflow: auto;
}
.el-dropdown-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 38px;
  line-height: 38px;
}
.dropdown-link-text {
  flex: 1;
}
.el-dropdown-menu__item {
  list-style: none;
  line-height: 36px;
  padding: 0 20px;
  margin: 0;
  font-size: 14px;
  color: #606266;
  cursor: pointer;
  outline: 0;
}
</style>
<template>

  <!-- S 酒店首页模块 -->
  <div class="filter">
    <el-row type="flex"
            justify="space-between">
      <el-col :span="8"
              class="filter__item">
        <el-row type="flex"
                justify="space-between">
          <el-col :span="12"
                  class="filter__item-text">价格</el-col>
          <el-col :span="12"
                  class="filter__item-text">0-{{ price }}</el-col>
        </el-row>
        <el-row>
          <el-slider v-model="price"
                     :min="0"
                     :max="4000"
                     :step="10"
                     @change="handlePriceChange"></el-slider>
        </el-row>
      </el-col>
      <!-- /价格模块 -->

      <el-col :span="6"
              class="filter__item">
        <el-row type="flex"
                justify="space-between">
          <el-col :span="12"
                  class="filter__item-text">住宿等级</el-col>
        </el-row>
        <el-row>
          <el-dropdown class="filter__input"
                       placement='bottom'
                       @command="handleLevel">
            <span class="el-dropdown-link">
              <span class="dropdown-link-text">
                {{ levelsOptions }}
              </span>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown"
                              class="filter__options">
              <el-dropdown-item v-for="item in levels"
                                :key="item.id"
                                :command="item.level">
                <i :class="['iconfont', hotellevel_in.indexOf(item.level)>-1? 'iconright-1':'iconcircle']"></i>
                <span>{{ item.name }}</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-row>
      </el-col>
      <!-- /住宿等级模块 -->

      <el-col :span="6"
              class="filter__item">
        <el-row type="flex"
                justify="space-between">
          <el-col :span="12"
                  class="filter__item-text">住宿类型</el-col>
        </el-row>
        <el-row class="filter__item-input">
          <el-dropdown class="filter__input"
                       placement='bottom'
                       @command="handleTypes">
            <span class="el-dropdown-link">
              <span class="dropdown-link-text">不限</span>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown"
                              class="filter__options">
              <el-dropdown-item v-for="item in types"
                                :key="item.id"
                                :command="item.id">
                <i :class="['iconfont', hoteltype_in.indexOf(item.id)>-1? 'iconright-1':'iconcircle']"></i>
                <span>{{ item.name }}</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-row>
      </el-col>
      <!-- /住宿类型模块 -->

      <el-col :span="6"
              class="filter__item">
        <el-row type="flex"
                justify="space-between">
          <el-col :span="12"
                  class="filter__item-text">酒店设施</el-col>
        </el-row>
        <el-row class="filter__input">
          <el-dropdown class="filter__input"
                       placement='bottom'
                       @command="handleAssets">
            <span class="el-dropdown-link">
              <span class="dropdown-link-text">不限</span>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown"
                              class="filter__options">
              <el-dropdown-item v-for="item in assets"
                                :key="item.id"
                                :command="item.id">
                <i :class="['iconfont', hotelasset_in.indexOf(item.id)>-1? 'iconright-1':'iconcircle']"></i>
                <span>{{ item.name }}</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-row>
      </el-col>
      <!-- /酒店设施模块 -->

      <el-col :span="6"
              class="filter__item">
        <el-row>
          <el-col :span="12"
                  class="filter__item-text">酒店品牌</el-col>
        </el-row>
        <el-row class="filter__item-input">
          <el-dropdown class="filter__input"
                       placement='bottom'
                       @command="handleBrands">
            <span class="el-dropdown-link">
              <span class="dropdown-link-text">不限</span>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown"
                              class="filter__options">
              <el-dropdown-item v-for="item in brands"
                                :key="item.id"
                                :command="item.id">
                <i :class="['iconfont', hotelbrand_in.indexOf(item.id)>-1? 'iconright-1':'iconcircle']"></i>
                <span>{{ item.name }}</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-row>
      </el-col>
      <!-- /酒店品牌模块 -->

    </el-row>
  </div>
  <!-- E 酒店首页模块 -->

</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'HotelFilter',
  data () {
    return {
      /* --------------------------选中条件数据-------------------------------- */
      price: 4000,
      hotellevel_in: [],
      hoteltype_in: [],
      hotelasset_in: [],
      hotelbrand_in: [],
      /* --------------------------筛选选项数据-------------------------------- */
      assets: [],
      brands: [],
      levels: [],
      types: [],
      /* --------------------------description-------------------------------- */
      query: {}
    }
  },
  computed: {
    levelsOptions () {
      let str = ''
      if (Array.isArray(this.hotellevel_in)) {
        if (this.hotellevel_in.length > 0) {
          str = `已选择${this.hotellevel_in.length}项`
        } else {
          str = '不限'
        }
      } else {
        str = this.hotellevel_in
      }

      return str
    }
  },
  watch: {
    '$route': {
      immediate: true,
      deep: true,
      handler: function (to, from) { //调用接口发送请求
        this.$T.extend(this, to.query)

        console.log(this.hotellevel_in)
      }
    }
  },
  methods: {
    ...mapActions({
      getOptions: 'hotel/getOptions'
    }),
    /* ---------------------------公用函数---------------------------------- */
    routerPush (key, command) {
      const { query } = this.$route
      let temp = []
      if (!query[key]) {
        temp = [command]
      } else {
        const index = query[key].indexOf(command)
        if (index > -1) {
          temp = query[key].filter((item, i) => i !== index)
        } else {
          temp = [...new Set([...query[key], command])]
        }
      }
      this.$router.push({ path: '/hotel', query: { ...query, [key]: temp } })
    },
    /* --------------------------事件处理函数-------------------------------- */
    handlePriceChange (val) {
      const { query } = this.$route
      this.$router.push({ path: '/hotel', query: { ...query, price_lt: val } })
    },
    handleLevel (command) {
      this.routerPush('hotellevel_in', command)
    },
    handleTypes (command) {
      this.routerPush('hoteltype_in', command)
    },
    handleAssets (command) {
      this.routerPush('hotelasset_in', command)
    },
    handleBrands (command) {
      this.routerPush('hotelbrand_in', command)
    }
  },
  mounted () {
    this.price = +this.query.price_lt //设置默认值
    this.getOptions().then(res => { //请求获取选项参数
      this.$T.extend(this, res)
    })
  }
}
</script>
