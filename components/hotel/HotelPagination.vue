/**
 * @Author: Joe Yao
 * @Date: 2019-09-12 08:52:05
 * @Last Modified by: Joe Yao
 * @Last Modified time: 2019-09-15 00:57:14
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
                   :page-sizes="[5, 10, 15, 20]"
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
      pageSize: 5,
      pageNum: 1
    }
  },
  methods: {
    handleSizeChange (val) {
      this.pageSize = val
      this.getData()
    },
    handleCurrentChange (val) {
      this.pageNum = val
      this.getData()
    },
    getData () {
      const { query } = this.$route
      this.$router.push({ path: '/hotel', query: { ...query, _start: (this.pageNum - 1) * this.pageSize, _limit: this.pageSize } })
    }
  },
  mounted () {
  }
}
</script>
