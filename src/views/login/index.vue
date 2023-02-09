<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="login-container">
    <div class="login-body">
      <div class="login-slogan"></div>
      <div class="login-content">
        <h1 class="login-title">福田e家后台管理系统</h1>
        <el-form class="login-form" ref="loginForm" :model="loginForm">
          <el-form-item class="login-form-item" prop="loginname">
            <el-input
              ref="loginname"
              v-model="loginForm.loginname"
              placeholder="请输入登录账号"
              name="loginname"
              type="text"
              class="login-input"
              clearable
            >
              <slot>
                <i class="el-input__icon el-icon-user"></i>
              </slot>
            </el-input>
          </el-form-item>
          <el-form-item class="login-form-item" prop="password">
            <el-input
              ref="password"
              :type="passwordType"
              v-model="loginForm.password"
              placeholder="请输入登录密码"
              name="password"
              class="login-input"
            >
              <solt>
                <i class="el-input__icon el-icon-lock"></i>
              </solt>
            </el-input>
            <span class="show-pwd">
              <svg-icon :name="passwordType === 'password' ? 'eye-off' : 'eye-on'" />
            </span>
          </el-form-item>
          <el-form-item class="login-form-item login-form-checkbox">
            <el-checkbox v-model="isChecked" class="login-checkbox">记录登录密码</el-checkbox>
          </el-form-item>
          <!-- :disabled="loginForm.loginname === '' || loginForm.password === ''" -->
          <el-button ref="loginButton" type="primary" class="login-button">登录</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// defineOptions({
//   name: "Login"

import { ref } from 'vue'

// });
const loading = false
const isChecked = true
const password = ref('')
// const = false
const passwordType = 'password'
const loginForm = {
  loginname: '',
  password: ''
}
</script>
<style lang="less" scoped>
.login-container {
  position: relative;
  height: 100vh;
  background: url('https://obs-fix-video.obs.cn-north-1.myhwclouds.com/img_1652161415063') no-repeat
    center bottom;
  background-size: cover;
  min-width: 1080px;
  min-height: 680px;
  overflow: auto;
  .login-cover {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.001);
  }
  .login-body {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 100;
    display: flex;
    box-sizing: border-box;
    width: 1000px;
    height: 580px;
    // background-color: $colorWhite;
    transform: translate3d(-50%, -50%, 0);
  }
  .login-slogan {
    flex: none;
    display: block;
    width: 520px;
    height: 580px;
    background: url('https://obs-fix-video.obs.cn-north-1.myhwclouds.com/img_1652161648918')
      no-repeat center;
    background-size: cover;
  }
  .login-content {
    display: block;
    flex: auto;
    height: 100%;
    padding: 120px 60px 0;
  }
  .login-title {
    color: #06192d;
    font-size: 24px;
    // font-weight: $fontWeightBold;
    line-height: 32px;
    text-align: center;
    margin-bottom: 26px;
  }
  .login-input {
    color: #06192d;
    // font-size: $fontSizeNormal;
    // font-weight: $fontWeightNormal;
  }
  .login-button {
    display: block;
    width: 100%;
    font-size: 18px;
    // font-weight: $fontWeightNormal;
    margin-top: 80px;
    padding: 12px 20px;
  }
  .login-form-checkbox {
    margin-top: -10px;
    margin-bottom: 30px;
  }
  .login-footer {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 199;
    height: 48px;
    background-color: #17243e;
    .footer-content {
      color: #fff;
      font-size: 12px;
      line-height: 20px;
      text-align: center;
      padding: 14px 20px;
    }
    .link {
      color: #fff;
      font-size: 12px;
    }
  }
  .show-pwd {
    position: absolute;
    right: 16px;
    top: 50%;
    font-size: 16px;
    color: #092a4f;
    cursor: pointer;
    user-select: none;
    margin-top: -20px;
  }
  deep {
    .el-form-item__content {
      // font-size: $fontSizeNormal;
      // font-weight: $fontWeightNormal;
    }
    .login-input .el-input__inner {
      background-color: #f6f9ff !important;
      border: 1px solid #f6f9ff;
      color: #06192d;
      // font-size: $fontSizeNormal;
      // font-weight: $fontWeightNormal;
    }
    .el-input__prefix,
    .el-input__suffix {
      color: #092a4f;
    }
    .el-input.is-active .el-input__inner,
    .el-input__inner:focus {
      border-color: #165dff;
    }
    input:-webkit-autofill,
    textarea:-webkit-autofill,
    select:-webkit-autofill {
      box-shadow: 0 0 0 999px #f6f9ff inset;
      // font-size: $fontSizeNormal;
      // font-weight: $fontWeightNormal;
    }
    input::-webkit-input-placeholder {
      color: #72849a;
    }
  }
}
@media screen and (max-width: 1439px) {
  .login-container {
    min-width: 940px;
    min-height: 580px;
    .login-body {
      width: 850px;
      height: 490px;
    }
    .login-slogan {
      width: 440px;
      height: 490px;
      background: url('https://obs-fix-video.obs.cn-north-1.myhwclouds.com/img_1652161681862')
        no-repeat center;
      background-size: cover;
    }
    .login-content {
      padding: 70px 30px 0;
    }
  }
}
</style>
