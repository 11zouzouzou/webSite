<template>
  <div class="nav">
    <div class="nav-content">
      <el-row :gutter="20">
        <el-col :span="3">
          <router-link to="/hello">
          <img class="logo"/>
          这是个导航
          </router-link>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Nav',
  setup() {},
})
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
// .nav {
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 1000;
//   width: 100%;
//   border-bottom: 1px solid #eee;
//   background-color: #fff;
//   .nav-content {
//     width: 1200px;
//     margin: 0 auto;
//   }
//   .logo {
//     height: 50px;
//     margin: 0;
//     border-radius: 50%;
//     margin-top: 5px;
//   }
//   .el-menu.el-menu--horizontal {
//     border-bottom: none;
//   }
//   .el-menu--horizontal > .el-menu-item {
//     cursor: pointer;
//     color: #333;
//   }
//   .nav-right {
//     position: relative;
//     padding-top: 15px;
//     text-align: right;
//     .el-dropdown {
//       cursor: pointer;
//       padding-right: 60px;
//     }
//     .user-img {
//       position: absolute;
//       top: -15px;
//       right: 0;
//       width: 50px;
//       border-radius: 50%;
//     }
//   }
// }
</style>
