<template>
  <div class="container">
    <el-row>
      <el-col :span="18"
              class="left">
        <h2>发现新攻略</h2>
        <p>分享你的个人游记，让更多人看到哦~</p>
        <el-input v-model="title"
                  placeholder="请输入标题"
                  class="title"></el-input>
        <!-- 富文本框组件 -->
        <div class="editor">
          <!-- <VueEditor></VueEditor> -->
          <VueEditor ref="vueEditor" />
        </div>
        <!-- 搜索选择城市 -->
        <div class="search">
          <span>选择城市</span>
          <el-autocomplete v-model="form.departCity"
                           :fetch-suggestions="querySearchAsync"
                           placeholder="请搜索游玩城市"></el-autocomplete>
        </div>
        <!-- 发布按钮 -->
        <div class="public">
          <el-button type="primary"
                     size="small">发布</el-button>&nbsp;&nbsp;
          <span>或者</span>
          <a href="#"
             class="save">保存到草稿</a>
        </div>
      </el-col>
      <el-col :span="4"
              class="caogao">
        草稿箱（0）
      </el-col>
    </el-row>
  </div>
</template>

<script>
import VueEditor from "@/components/post/editor.vue";
export default {
  components: {
    VueEditor
  },
  data () {
    return {
      title: "",
      content: '',
      city: [],
      form: {
        departCity: "",
        departCode: ""
      }
    };
  },
  methods: {
    // handlePublic () {
    //   this.content = this.$refs.vueEditor.editor.root.innerHTML
    //   console.log(this.content)
    // },
    querySearchAsync (value, cb) {
      if (!value) {
        return cb([]);
      }
      this.$axios({
        url: "/cities",
        params: { name: value }
      }).then(res => {
        console.log(res.data);
        const { data } = res.data;
        console.log(data);
        const newData = [];
        data.forEach(v => {
          v.value = v.name;
          newData.push(v);
          this.form.departCity = newData[0].value;
          this.form.departCode = newData[0].sort;
        });
        cb(newData);
      });
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 1000px;
  margin: 0 auto;
  h2 {
    font-size: 23px;
    margin-top: 15px;
    font-weight: 500;
  }
  p {
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
  .caogao {
    border: 1px solid #eee;
    padding: 15px;
    margin-top: 20px;
    width: 200px;
    float: right;
  }
}
</style>
