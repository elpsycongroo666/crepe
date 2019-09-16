<template>
  <div class="post_container">
    <el-row class="el-row"
            type="flex"
            justify="space-between">
      <!-------------------------------------------- 右边导航栏 ---------------------------------------------->
      <div class="post_menus-wrapper">
        <PostMenusWrapper />
      </div>

      <!-------------------------------------------- 左边文章内容 ---------------------------------------------->
      <div class="post-wrapper">

        <!-- 搜索框和推荐城市 -->
        <PostSearch @setPostDataList="setPostDataList" />

        <!-- 文章标题 -->
        <PostTitle />

        <!-- 文章列表 -->
        <div class="post-list">
          <PostList v-for="(item,index) in PostDataList"
                    :key="index"
                    :data="item" />
        </div>

        <!-- 分页 -->
        <el-row type="flex"
                justify="center"
                style="margin-top:10px;">
          <el-pagination @size-change="handleSizeChange"
                         @current-change="handleCurrentChange"
                         :current-page="pageIndex"
                         :page-sizes="[2, 4, 6, 8]"
                         :page-size="pageSize"
                         layout="total, sizes, prev, pager, next, jumper"
                         :total="total">
          </el-pagination>
        </el-row>
      </div>
    </el-row>
  </div>
</template>

<script>
//引入攻略组件
import PostList from "@/components/post/PostList.vue";      //文章列表
import PostSearch from "@/components/post/PostSearch.vue";  //搜索框和推荐城市
import PostTitle from "@/components/post/PostTitle.vue";  //文章标题
import PostMenusWrapper from "@/components/post/PostMenusWrapper.vue"; //右边的导航

//--------------------------------------------//
export default {
  components: {
    PostList,
    PostSearch,
    PostTitle,
    PostMenusWrapper
  },


  //----------------------------------------//
  data () {
    return {
      pageIndex: 1,
      pageSize: 2,
      total: 0,
      start: 1,
      limit: 2,
      city: '',
      PostData: {},
      // post_search: '',
      PostDataList: [],
      //缓存文章列表数据
      // cachePostDataList: {},

      id: ''
    };
  },


  //----------------------------------------//
  watch: {
    // watch可以监听this下的所有属性
    $route () {
      // 请求文章列表数据
      this.getPostData();
    }
  },





  //------------------------------------//
  methods: {






    //请求文章数据列表
    getPostData () {
      this.getDataAx();
      // this.$axios({
      //   url: 'posts',
      //   params: {
      //     _start: 1,
      //     _limit: this.pageSize
      //   }
      //   // params: this.$route.query
      // }).then(res => {
      //   console.log(res)
      //   this.PostDataList = res.data.data;
      //   // this.cachePostDataList = { ...res.data };
      //   // this.PostDataList = this.PostData.data;
      //   this.total = res.data.total;
      //   // this.PostDataList = this.PostData.data.slice((this.pageIndex - 1) * this.pageSize, this.pageIndex * this.pageSize);
      // })

    },



    //过滤城市
    setPostDataList (CityData) {
      this.city = CityData;
      this.getDataAx();
      //   // console.log(999)
      //   // console.log(Newarr)
      //   // this.PostDataList = Newarr;
      //   // this.total = Newarr.length;
      //   // this.PostDataList = Newarr.slice((this.pageIndex - 1) * this.pageSize, this.pageIndex * this.pageSize);
    },

    //分页的点击事件
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
      this.limit = val;

      this.getDataAx();
      // this.PostDataList = this.PostData.data.slice(0, val);


    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
      this.start = val;
      this.getDataAx();
      // console.log(this._start)
      // this.PostDataList = this.PostData.data.slice((this.pageIndex - 1) * this.pageSize, this.pageIndex * this.pageSize);
      // this.$axios({
      //   url: "posts",
      //   params: {
      //     city: '',
      //     _start: val,
      //     _limit: val
      //   }
      // })
    },



    //封装一个接口请求
    getDataAx () {
      let obj = {
        _start: this.start,
        _limit: this.limit,
        // id: this.id
      }
      if (this.city) {
        obj.city = this.city
      }

      this.$axios({
        url: "posts",         //+ "?_start=" + this._start + "&limit=" + this._limit,
        params: obj
      }).then(res => {
        console.log(res.data)
        this.PostData = res.data
        this.PostDataList = this.PostData.data
        this.total = res.data.total
        // this.city = res.data.data.cityName
        // this.id = res.data.data.id
      })
    }

  },

  //--------------------------------//
  mounted () {
    console.log(this._start);

    this.getPostData()
  }

};
</script>

<style lang="less" scoped>
.post_container {
  width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
}

* {
  margin: 0;
  padding: 0;
}

.el-row {
  box-sizing: border-box;
}

// 右边导航栏样式
.post_menus-wrapper {
  position: relative;
  width: 260px;
  z-index: 2;
}

//左边文章内区样式
.post-wrapper {
  width: 700px;
}

// 分页
el-pagination {
  white-space: nowrap;
  padding: 2px 5px;
  color: #303133;
  font-weight: 700;
}
</style>
