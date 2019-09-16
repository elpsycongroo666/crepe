/**
 * @Author: Joe Yao
 * @Date: 2019-09-16 09:43:17
 * @Last Modified by: Joe Yao
 * @Last Modified time: 2019-09-16 09:57:03
 */
<style lang="less" scoped>
@import "~styles/main.less";
.pagination {
  /deep/ .btn-prev span,
  /deep/ .btn-next span {
    font-size: 12px !important;
    font-weight: bold !important;
  }
  /deep/ .btn-prev,
  /deep/ .btn-next {
    padding: 0 5px;
    border-radius: 4px;
    color: #fff;
    background-color: @btnColor;
    &:hover {
      background-color: @subColor;
    }
  }
  /deep/.el-pager li.active {
    color: @subColor;
  }
  /deep/.el-pager li:hover {
    color: @subColor;
  }
}
</style>
<template>
  <!-- S 酒店首页模块 -->
  <div class="pagination ">
    <el-pagination @size-change="handleSizeChange"
                   @current-change="handleCurrentChange"
                   :current-page="pageNum"
                   :page-sizes="[10, 15, 20]"
                   :page-size="pageSize"
                   layout="total, sizes, prev, pager, next, jumper"
                   :total="hotelData.total"
                   prev-text="上一页"
                   next-text="下一页">
    </el-pagination>
  </div>
  <!-- S 酒店首页模块 -->

</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HotelPagination',
  computed: {
    ...mapState({
      hotelData: state => state.hotel.hotelData
    })
  },
  data () {
    return {
      pageSize: 5, //页面数据长度
      pageNum: 1 //页数
    }
  },
  methods: {
    handleSizeChange (val) {// 改变页面数据条数
      this.pageSize = val
      this.getData()
    },
    handleCurrentChange (val) {// 跳转到第几页
      this.pageNum = val
      this.getData()
    },
    getData () { // 获取数据
      const { query } = this.$route
      this.$router.push({ path: '/hotel', query: { ...query, _start: (this.pageNum - 1) * this.pageSize, _limit: this.pageSize } })
    }
  }
}
</script>
