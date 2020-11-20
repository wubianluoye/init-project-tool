<template>
  <div id="app">
    <van-nav-bar
      v-if="showNav"
      :title="$route.meta.title"
      left-arrow
      left-text="返回"
      @click-left="$router.go(-1)"
    />
    <div class="view">
      <router-view />
    </div>
    <div v-if="showTabbar" id="nav">
      <van-tabbar v-model="active" route>
        <van-tabbar-item icon="home-o" name="home" to="/">标签</van-tabbar-item>
        <van-tabbar-item icon="search" name="about" to="/about">标签o</van-tabbar-item>
        <van-tabbar-item icon="smile-o" name="list" to="/list">标签1o</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, NavBar } from 'vant'

export default {
  name: 'App',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [NavBar.name]: NavBar
  },
  data() {
    return {
      active: 'home'
    }
  },
  computed: {
    showNav() {
      return this.$route.meta?.showNav
    },
    showTabbar() {
      return this.$route.meta?.showTabbar
    }
  }
}
</script>

<style lang="less">
body{
  display: flex;
  justify-content: center;
}

#app {
  width: 100%;
  height: 100%;
  max-width: 10rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.view{
  width: 100%;
  overflow-y: auto;
  flex-grow: 1;
  flex-shrink: 1;
  padding-bottom: 10px;
}

#nav{
  height: 50px;
  flex-shrink: 0;
  flex-grow: 0;
}

.has-tabar{
  height: calc(100% - 50px);
}
</style>
