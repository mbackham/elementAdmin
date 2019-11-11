<template>
  <el-table :data="articles">
    <el-table-column prop="title" label="标题" width="140"></el-table-column>
    <el-table-column prop="body" label="内容" width="120"></el-table-column>
  </el-table>
</template>

<script>
export default {
  data() { 
   return{
     articles:[]
   }
  },
  created(){
this.$http.get('articles').then(res=>{
  this.articles= res.data
})
  }
}
</script>

<style>
</style>
