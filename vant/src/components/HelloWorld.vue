<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noopener"
      >vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
        >babel</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router"
          target="_blank"
          rel="noopener"
        >router</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex"
          target="_blank"
          rel="noopener"
        >vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
        >eslint</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest"
          target="_blank"
          rel="noopener"
        >unit-jest</a>
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
          rel="noopener"
        >Forum</a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
          rel="noopener"
        >Community Chat</a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
          rel="noopener"
        >Twitter</a>
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <p>wngdngn</p>
        <a
          href="https://router.vuejs.org"
          target="_blank"
          rel="noopener"
        >vue-router</a>
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
        >vue-devtools</a>
      </li>
      <li>
        <a
          href="https://vue-loader.vuejs.org"
          target="_blank"
          rel="noopener"
        >vue-loader</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
        >awesome-vue</a>
      </li>
    </ul>
    <van-button>主要按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">成功按钮</van-button>
    <van-button size="large" type="warning">大号按钮</van-button>
    <van-button icon="https://img.yzcdn.cn/vant/user-active.png" type="danger">
      按钮
    </van-button>
    <div class="flex-box">
      <div class="left">我是左边</div>
      <div class="center">我是中间</div>
      <div class="right">我是右边</div>
    </div>
  </div>
</template>

<script>
import { Button } from 'vant'

export default {
  name: 'HelloWorld',
  components: {
    [Button.name]: Button
  },
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      loading: true
    }
  },
  created() {
    // console.log(this.dayjs().format('YYYY-MM-DD'))
    // this.$http.get("/index").then(res => {
    //   console.log(res);
    // });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.flex-box {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  .center {
    width: 100px;
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  li {
    display: inline-block;
    margin: 0 10px;
    color: #fd1;
  }
}

a {
  color: #42b983;
}
</style>
