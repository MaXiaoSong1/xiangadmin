<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <Aside></Aside>
      </el-aside>
      <el-main>
        <Main></Main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import Header from './Header'
import Aside from './Aside'
import Main from './Main'
</script>

<style lang="scss" scoped>
.el-container {
  height: 100% !important;
}

.el-header,
.el-footer {
  padding: 0;
  background-color: #4338ca;
  color: #fff;
}

.el-aside {
  background-color: #ffffff;
  color: #333;
}

.el-main {
  background-color: #f3f4f6;
  color: #333;
}
</style>
