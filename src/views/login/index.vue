<template>
  <div class="login-container">
    <div class="login-body">
      <div class="login-slogan"></div>
      <div class="login-content">
        <h1 class="login-title">福田e家后台管理系统</h1>
        <el-form
          class="login-form"
          ref="loginForm"
          :model="loginForm"
          :rules="loginRules"
        >
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
              @keyup.enter.native="handleLogin"
            >
              <solt>
                <i class="el-input__icon el-icon-lock"></i>
              </solt>
            </el-input>
            <span class="show-pwd" @click="showPwd">
              <svg-icon
                :name="passwordType === 'password' ? 'eye-off' : 'eye-on'"
              />
            </span>
          </el-form-item>
          <el-form-item class="login-form-item login-form-checkbox">
            <el-checkbox v-model="isChecked" class="login-checkbox"
              >记录登录密码</el-checkbox
            >
          </el-form-item>
          <!-- :disabled="loginForm.loginname === '' || loginForm.password === ''" -->
          <el-button
            ref="loginButton"
            type="primary"
            class="login-button"
            :loading="loading"
            :disabled="loginBtnHD"
            @click.native.prevent="handleLogin"
            >登录</el-button
          >
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import { Component, Vue, Watch } from "vue-property-decorator";
// import { Route } from "vue-router";
// import { Dictionary } from "vue-router/types/router";
// import { Form as ElForm, Input, Button } from "element-ui";
// import { UserModule } from "@/store/modules/user";

declare function require(string: any): string;

@Component({
  name: "Login",
})
export default class extends Vue {
  public isChecked = true;
  public loginForm = {
    loginname: "",
    password: "",
  };
  public validateUsername = (rule: any, value: string, callback: Function) => {
    if (value.length === 0) {
      callback(new Error("请输入登录账号"));
    } else {
      callback();
    }
  };
  public validatePassword = (rule: any, value: string, callback: Function) => {
    if (value.length === 0) {
      callback(new Error("请输入登录密码"));
    } else {
      callback();
    }
  };
  public loginRules = {
    loginname: [{ validator: this.validateUsername, trigger: "blur" }],
    password: [{ validator: this.validatePassword, trigger: "blur" }],
  };
  public passwordType = "password";
  public loading = false;
  public redirect?: string;
  public otherQuery: Dictionary<string> = {};

  loginBtnHD = false;
  @Watch("loginForm", { deep: true })
  loginBtnChange() {
    this.loginBtnHD = !this.loginForm.loginname || !this.loginForm.password;
  }

  @Watch("$route", { immediate: true })
  public onRouteChange(route: Route) {
    // TODO: remove the "as Dictionary<string>" hack after v4 release for vue-router
    // See https://github.com/vuejs/vue-router/pull/2050 for details
    const query = route.query as Dictionary<string>;
    if (query) {
      this.redirect = query.redirect || "";
      this.otherQuery = this.getOtherQuery(query);
    }
  }

  // 展示密码
  public showPwd() {
    if (this.passwordType === "password") {
      this.passwordType = "";
    } else {
      this.passwordType = "password";
    }
    this.$nextTick(() => {
      (this.$refs.password as Input).focus();
    });
  }
  // 登录处理
  public handleLogin() {
    (this.$refs.loginForm as ElForm).validate(async (valid: boolean) => {
      if (valid) {
        this.loading = true;
        // try {
        //   await UserModule.Login(this.loginForm);
        //   this.loading = false;
        // } catch {
        //   this.loading = false;
        // }
        this.$router.push({
          path: this.redirect || "/",
          query: this.otherQuery,
        });
        // Just to simulate the time of the request
        setTimeout(() => {
          this.loading = false;
        }, 50 * 1000);
      } else {
        return false;
      }
    });
  }

  // 获取链接参数字符串
  public getOtherQuery(query: Dictionary<string>) {
    return Object.keys(query).reduce((acc, cur) => {
      if (cur !== "redirect") {
        acc[cur] = query[cur];
      }
      return acc;
    }, {} as Dictionary<string>);
  }
}
</script>
<style lang="scss" scoped>
.login-container {
  position: relative;
  height: 100vh;
  background: url("https://obs-fix-video.obs.cn-north-1.myhwclouds.com/img_1652161415063")
    no-repeat center bottom;
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
    background-color: $colorWhite;
    transform: translate3d(-50%, -50%, 0);
  }
  .login-slogan {
    flex: none;
    display: block;
    width: 520px;
    height: 580px;
    background: url("https://obs-fix-video.obs.cn-north-1.myhwclouds.com/img_1652161648918")
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
    font-weight: $fontWeightBold;
    line-height: 32px;
    text-align: center;
    margin-bottom: 26px;
  }
  .login-input {
    color: #06192d;
    font-size: $fontSizeNormal;
    font-weight: $fontWeightNormal;
  }
  .login-button {
    display: block;
    width: 100%;
    font-size: 18px;
    font-weight: $fontWeightNormal;
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
  ::v-deep {
    .el-form-item__content {
      font-size: $fontSizeNormal;
      font-weight: $fontWeightNormal;
    }
    .login-input .el-input__inner {
      background-color: #f6f9ff !important;
      border: 1px solid #f6f9ff;
      color: #06192d;
      font-size: $fontSizeNormal;
      font-weight: $fontWeightNormal;
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
      font-size: $fontSizeNormal;
      font-weight: $fontWeightNormal;
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
      background: url("https://obs-fix-video.obs.cn-north-1.myhwclouds.com/img_1652161681862")
        no-repeat center;
      background-size: cover;
    }
    .login-content {
      padding: 70px 30px 0;
    }
  }
}
</style>
