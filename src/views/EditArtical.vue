<template>
  <el-form @submit.native.prevent="saveArtile" ref="form" :model="article" label-width="120px">
    <el-form-item label="文章标题">
      <el-input v-model="article.title"></el-input>
    </el-form-item>

    <el-form-item label="文章内容">
      <el-input type="textarea" v-model="article.body"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">保存</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      article: {}
    }
  },
  created(){
    this.fetch()
  },
  methods: {
    saveArtile() {
      this.$http.put(`articles/${this.$route.params.id}`, this.article).then(res => {
        //console.log(res.data);
        this.$message({
          message: "文章更新成功",
          type: "success"
        })
        this.$router.push("/articles/index");
      })
      // console.log(this.article  );
    },
    fetch() {
      this.$http.get(`articles/${this.$route.params.id}`).then(res => {
        this.article = res.data;
      })
    }
  }
};
</script>