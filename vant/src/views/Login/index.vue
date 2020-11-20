<template>
  <div class="login-box">
    <div class="form-box">
      <h2 class="title">{{ title }}</h2>
      <van-form
        class="form"
        @submit="onSubmit"
      >
        <van-field
          v-model="form.username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          autocomplete="off"
          :rules="unameRules"
        />
        <van-field
          v-model="form.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          autocomplete="off"
          :rules="pswRules"
        />
        <div style="margin: 16px;">
          <van-button plain round block type="primary" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { Form, Field, Button } from 'vant'

export default {
  name: 'Login',
  components: {
    [Form.name]: Form,
    [Button.name]: Button,
    [Field.name]: Field
  },
  data() {
    return {
      title: process.env.VUE_APP_TITLE,
      unameRules: [
        { required: true, message: '请填写用户名' },
        { required: true, pattern: /.{2,}/, message: '用户名少为2位', trigger: 'onChange' }
      ],
      pswRules: [
        { required: true, message: '请填写密码' },
        { required: true, pattern: /.{8,}/, message: '密码至少为8位', trigger: 'onChange' }
      ],
      form: {
        username: 'abc123',
        password: 'abc123456'
      }
    }
  },
  created() {

  },
  methods: {
    onSubmit() {
      this.$store.commit('app/SET_TOKEN', 'yes')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
.login-box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    font-size: 24px;
    padding-bottom: 20px;
  }
  .form {
    padding: 20px 0 10px;
    box-shadow: 0 0 8px #aaa;
    background: #fff;
    border-radius: 6px;
  }
}
</style>
