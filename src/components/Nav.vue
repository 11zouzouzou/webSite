<template>
  <div>
    <div v-if="!state.isMobile" class="nav">
      <div class="nav-content">
        <el-row :gutter="20">
          <el-col :span="3">
            <router-link to="/hello">
              <img class="logo" alt="Zouzouzou" src="../assets/logo.jpg" />
            </router-link>
          </el-col>
          <el-col :span="15">
            <el-menu :router="true" :default-active="state.activeIndex" active-text-color="#409eff" class="el-menu-demo" mode="horizontal">
              <el-menuItem :route="l.path" :index="l.index" v-for="l in state.list" :key="l.index">
                {{ l.name }}
              </el-menuItem>
            </el-menu>
          </el-col>
          <!-- TODO remove "1" -->
          <el-col v-if="computedUserInfo._id + '1'" :span="4">
            <div class="nav-right">
              <el-dropdown>
              <span class="el-dropdown-link">
                Zouzouzou
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <template #dropdown>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="logout">登 出</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            </div>
          </el-col>
          <el-col v-else :span="3">
            <div class="nav-right">
              <el-button size="small" type="primary">登录</el-button>
              <el-button size="small" type="danger">注册</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div v-else class="nav">mobile</div>
  </div>
</template>
<script lang="ts">
import { useStore } from 'vuex'
import { computed, defineComponent, reactive, watch } from 'vue'
import { NavListItem, UserInfo } from '../types/index'
import { useRoute, useRouter } from 'vue-router'
import { key } from '../store'
import { isMobileOrPc } from '../utils/utils'
import { SAVE_USER } from '../store/types'

export default defineComponent({
  name: 'Nav',
  setup(props, context) {
    const store = useStore(key)
    const state = reactive({
      visible: false,
      handleFlag: '',
      title: '首页',
      list: [
        {
          index: '1',
          path: '/',
          name: '首页',
        },
        {
          index: '2',
          path: '/articles',
          name: '文章',
        },
        {
          index: '3',
          path: '/archive',
          name: '归档',
        },
        //后续TODO
        // {
        //   index: '4',
        //   path: '/project',
        //   name: '项目',
        // },
        // {
        //   index: '5',
        //   path: '/timeline',
        //   name: '历程',
        // },
        // {
        //   index: '6',
        //   path: '/message',
        //   name: '留言',
        // },
        // {
        //   index: '7',
        //   path: '/about',
        //   name: '关于',
        // },
      ] as Array<NavListItem>,
      activeIndex: '0',
      enterSlideUp: false,
      leaveSlideDown: false,
      isShow: false,
      isMobile: isMobileOrPc(),
    })

    const routeChange = (val: any, oldVal: any) => {
      let ret = false
      for (let i = 0; i < state.list.length; i++) {
        const l: NavListItem = state.list[i]
        if (l.path === val.path) {
          state.activeIndex = i + 1 + ''
          state.title = l.name
          ret = true
          break
        }
      }
      if (!ret) {
        state.activeIndex = '0'
        state.title = 'unknow'
      }
    }

    //监听路由
    const router = useRouter()
    const route = useRoute()
    const unwatch = watch(
      route,
      (newVal, oldVal) => {
        routeChange(newVal, oldVal)
      },
      { immediate: true }
    )

    const computedUserInfo = computed(() => {
      let userInfo: UserInfo = {
        _id: '',
        name: '',
        avatar: '',
      }
      if (window.sessionStorage.userInfo) {
        //TODO save userInfo
        userInfo = JSON.parse(window.sessionStorage.userInfo)
        store.commit(SAVE_USER, { userInfo })
      }
      if (store.state.user && store.state.user.userInfo) {
        userInfo = store.state.user.userInfo
      }
      return userInfo
    })

    return {
      state,
      routeChange,
      computedUserInfo,
      // unwatch
    }
  },
  mounted() {
    this.routeChange(this.$route, this.$route)
  },
  unmounted() {
    // this.unwatch();
  },
  //vue2
  // watch: {
  //   $route: {
  //     handler(val: any, oldVal: any) {
  //       this.routeChange(val, oldVal);
  //     },
  //     immediate: true,
  //   },
  // }
})
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  .nav-content {
    width: 1200px;
    margin: 0 auto;
  }
  .logo {
    height: 50px;
    margin: 0;
    border-radius: 50%;
    margin-top: 5px;
  }
  .el-menu.el-menu--horizontal {
    border-bottom: none;
  }
  .el-menu--horizontal > .el-menu-item {
    cursor: pointer;
    color: #333;
  }
  .nav-right {
    position: relative;
    padding-top: 15px;
    text-align: right;
    .el-dropdown {
      cursor: pointer;
      padding-right: 60px;
    }
    .el-dropdown-link {
      cursor: pointer;
      color: #409eff;
    }
    .el-icon-arrow-down {
      font-size: 12px;
    }
    .user-img {
      position: absolute;
      top: -15px;
      right: 0;
      width: 50px;
      border-radius: 50%;
    }
  }
}
</style>
