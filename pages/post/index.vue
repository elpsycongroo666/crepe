<template>
  <div class="post_container">
    <el-row class="el-row"
            type="flex"
            justify="space-between">
      <!-- 右边导航栏 -->
      <div class="post_menus-wrapper"></div>

      <!-- 左边文章内容 -->
      <div class="post-wrapper">
        <div class="post_search-wrapper">

          <!-- 搜索框 -->
          <el-row class="post_search-bar"
                  type="flex"
                  justify="space-between">
            <input type="text"
                   placeholder="请输入想去的地方，比如：'广州'"
                   v-model="post_search" />
            <i class="el-icon-search"></i>
          </el-row>
          <div class="post_search-recommend">
            推荐：
            <span>广州</span>
            <span>上海</span>
            <span>北京</span>
          </div>
        </div>

        <!-- 文章标题 -->
        <el-row class="post-title"
                type="flex"
                justify="space-between">
          <h4>推荐攻略</h4>
          <el-button type="primary"
                     icon="el-icon-edit"
                     class="post_el-button">写游记</el-button>
        </el-row>

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
import PostList from "@/components/post/PostList.vue";

export default {
  components: {
    PostList
  },
  data () {
    return {
      pageIndex: 1,
      pageSize: 5,
      total: 0,
      PostData: {

      },
      post_search: '',
      PostDataList: []
    };
  },

  watch: {
    // watch可以监听this下的所有属性
    $route () {
      // 请求文章列表数据
      this.getPostData();
    }
  },

  methods: {
    //请求文章数据列表
    getPostData () {
      this.$axios({
        url: 'posts'
        // params: this.$route.query
      }).then(res => {
        console.log(res)
        this.PostData = res.data
        this.total = res.data.total
        this.PostDataList = this.PostData.data
      })
    },


    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
      this.PostDataList = this.PostData.data.slice(0, val);
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
      this.pageIndex = val;
      this.PostDataList = this.PostData.data.slice((this.pageIndex - 1) * this.pageSize, this.pageIndex * this.pageSize)
    },


  },

  mounted () {
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

.post_search-wrapper {
  .post_search-bar {
    width: 100%;
    box-sizing: border-box;
    height: 40px;
    line-height: 40px;
    border: 3px solid orange;
    align-items: center;

    input {
      flex: 1;
      padding: 0 20px;
      line-height: 40px;
      outline: none;
      border: none;
      background: none;
    }

    i {
      font-size: 24px;
      color: orange;
      font-weight: 700;
      margin-right: 10px;
    }
  }

  .post_search-recommend {
    padding: 10px 0;
    font-size: 12px;
    color: #666;

    span {
      margin-right: 5px;
      &:hover {
        border-bottom: 1px solid orange;
        color: orange;
        cursor: pointer;
      }
    }
  }
}

.post-title {
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
  position: relative;
  align-items: center;

  h4 {
    font-weight: 400;
    font-size: 18px;
    color: orange;

    &:after {
      display: block;
      content: "";
      width: 72px;
      height: 2px;
      background: orange;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }

  .post_el-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;

    &:hover {
      background: rgb(102, 177, 255);
    }
  }
}

// 分页
el-pagination {
  white-space: nowrap;
  padding: 2px 5px;
  color: #303133;
  font-weight: 700;
}
</style>
