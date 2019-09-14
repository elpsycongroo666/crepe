<template>
  <el-row>
    <el-col :span="18"
            class="left">
      <h2>发现新攻略</h2>
      <p class="share">分享你的个人游记，让更多人看到哦~</p>
      <el-input v-model="article.shareTitle"
                placeholder="请输入标题"
                class="title"></el-input>

      <!-- 富文本框组件 -->
      <div class="editor">
        <VueEditor class="size"
                   ref="vueEditor"
                   :config="config" />
      </div>

      <!-- 搜索选择城市 -->
      <div class="search">
        <span>选择城市</span>
        <el-autocomplete v-model="article.departCity"
                         :fetch-suggestions="querySearchAsync"
                         placeholder="请搜索游玩城市"></el-autocomplete>
      </div>

      <!-- 发布按钮 -->
      <div class="public">
        <el-button type="primary"
                   size="small"
                   @click="handlePublic">发布</el-button>&nbsp;&nbsp;
        <span>或者</span>
        <a href="#"
           class="save"
           @click="handleSavve">保存到草稿</a>
      </div>
    </el-col>
    <div class="aside">
      <el-col :span="4"
              class="draft-box">
        <h4 class="draftTitle">草稿箱 ({{this.posts.length}})</h4>
        <div class="draftList">
          <div class="draftItem"
               v-for="(item,index) in posts"
               :key="index">
            <div class="draftPostTitle"
                 @click="handleEditor(index)">{{item.shareTitle}}
              <i class="el-icon-edit"></i>
              <el-button type="text"
                         class="delPost"
                         @click="handleDelete(index)">删除</el-button>
            </div>

            <p class="postTime">{{item.time}}</p>
          </div>
        </div>
      </el-col>
    </div>
  </el-row>
  <!-- <div class="app">
    <VueEditor class="size" ref="vueEditor" :config="config"/>
  </div>-->
</template>

<script>
import "quill/dist/quill.snow.css";
import moment from 'moment'
let VueEditor;

if (process.browser) {
  VueEditor = require("vue-word-editor").default;
}
export default {
  name: "app",
  components: {
    VueEditor
  },
  data () {
    return {
      config: {
        modules: {
          // 工具栏
          toolbar: [
            ["bold", "italic", "underline", "strike"], // toggled buttons
            ["blockquote", "code-block"],
            ["image", "video"],
            [{ header: 1 }, { header: 2 }], // custom button values
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }], // superscript/subscript
            [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
            [{ direction: "rtl" }] // text direction
          ]
        },
        // 主题
        theme: "snow",
        uploadImage: {
          url: "http://localhost:1337/upload",
          name: "files",
          uploadBefore (file) {
            return true;
          },
          uploadProgress (res) { },
          uploadSuccess (res, insert) {
            insert("http://localhost:1337" + res.data[0].url);
          },
          uploadError () { },
          showProgress: false
        },

        uploadVideo: {
          //url: "http://157.122.54.189:9095/upload",
          url: "http://localhost:1337/upload",
          name: "files",
          uploadBefore (file) {
            return true;
          },
          uploadProgress (res) { },
          uploadSuccess (res, insert) {
            insert("http://localhost:1337" + res.data[0].url);
          },
          uploadError () { }
        }
      },
      posts: [],
      article: {
        shareTitle: "",
        departCity: "",
        departCode: "",
        content: "",
        time: ''
      },
      city: []
    };
  },

  mounted () {
    // this.posts=localStorage.getItem('posts')
    this.posts = JSON.parse(localStorage.getItem("posts"))
  },

  methods: {
    //点击保存至草稿箱
    handleSavve () {
      this.article.content = this.$refs.vueEditor.editor.root.innerHTML;
      this.article.time = moment(new Date()).format('YYYY-MM-DD')
      const posts = JSON.parse(localStorage.getItem("posts")) || [];
      posts.unshift(this.article);
      localStorage.setItem("posts", JSON.stringify(posts));
      this.posts = JSON.parse(localStorage.getItem('posts'));
      this.$message.success('保存成功');
      this.article.shareTitle = '';
      this.article.departCity = '';
      this.$refs.vueEditor.editor.root.innerHTML = '';
    },

    //点击标题编辑
    handleEditor (index) {
      // console.log(123)
      // const arr=JSON.parse(localStorage.getItem('posts'))
      // console.log(this.article)
      // console.log(index)
      // console.log(this.posts[index])
      this.article.shareTitle = this.posts[index].shareTitle
      this.$refs.vueEditor.editor.root.innerHTML = this.posts[index].content
      this.article.departCity = this.posts[index].departCity
    },

    //点击删除
    handleDelete (index) {
      // console.log(index)
      // console.log(123)
      const arr = JSON.parse(localStorage.getItem('posts'))
      console.log(arr)
      arr.forEach((e, i) => {
        console.log(e)
        if (index === i) {
          //删除数据
          arr.splice(index, 1)
          //删除的提示
          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!',
            });
            window.location.reload()
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        }
      })
      localStorage.setItem('posts', JSON.stringify(arr))
    },

    //发布文章
    handlePublic () {
      // this.article.time = moment(new Date()).format('YYYY-MM-DD')
      console.log(this.article);
      this.$axios({
        url: '/posts',
        method: 'post',
        data: {
          content: this.article.content,
          title: this.article.title,
          city: this.article.departCity
        },
        headers: {
          Authorization: `Bearer ${this.$store.state.user.userInfo.token}`
        }
      }).then(res => [
        console.log(res),
        this.$message.success('发布成功')
      ]).catch(err => {
        console.log(err)
      })

    },

    //选择城市
    querySearchAsync (value, cb) {
      if (!value) {
        return cb([]);
      }
      this.$axios({
        url: "/cities",
        params: { name: value }
      }).then(res => {
        // console.log(res.data);
        const { data } = res.data;
        // console.log(data);
        const newData = [];
        data.forEach(v => {
          v.value = v.name;
          newData.push(v);
          this.article.departCity = newData[0].value;
          this.article.departCode = newData[0].sort;
        });
        cb(newData);
      });
    }
  }
};
</script>

<style lang="less">
.left {
  h2 {
    font-size: 23px;
    margin-top: 15px;
    font-weight: 500;
  }
  .size {
    height: 400px;
  }
  .share {
    color: #999;
    font-size: 12px;
    margin: 10px 0;
  }
  .title {
    width: 750px;
    height: 40px;
    border-radius: 5px;
    margin-bottom: 20px;
  }
  .search {
    margin-top: 60px;
  }
  .public {
    margin: 20px 0;
    .save {
      color: orange !important;
      font-size: 14px;
    }
  }
}
.aside {
  .draft-box {
    border: 1px solid #eee;
    padding: 15px;
    margin-top: 20px;
    width: 200px;
    float: right;
    .draftTitle {
      font-weight: 400;
      font-size: 16px;
      color: #666;
      margin-bottom: 10px;
      // .delPost{
      //   float: right
      // }
    }
    .draftItem {
      font-size: 14px;
      margin-bottom: 10px;
      position: relative;
      .delPost {
        float: right;
        cursor: pointer;
        color: pink;
      }
      .postTime {
        color: #999;
      }
      .draftPostTitle {
        &:hover {
          color: orange;
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
