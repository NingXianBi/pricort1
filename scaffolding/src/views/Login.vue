<template>
  <div>
    <!-- 顶部导航开始 -->
    <div>
      <mt-header title="学前端到 到学问!">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <router-link to="register" slot="right">注册</router-link>
      </mt-header>
    </div>
    <!-- 顶部导航结束 -->
    <!-- 表单区域开始 -->
    <div>
      <mt-field
        type="text"
        label="用户名"
        placeholder="请输入用户名"
        disabledClear
        v-model="username"
        @blur.native.capture="checkUsername"
        :state="usernameState"
      ></mt-field>

      <mt-field
        type="password"
        label="密码"
        placeholder="请输入密码"
        v-model="password"
        @blur.native.capture="checkPassword"
        :state="passwordState"
      ></mt-field>
      <mt-button type="primary" size="large" @click="handle"
        >快速登录</mt-button
      >
    </div>
    <!-- 表单区域结束 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      conpassword: "",
      usernameState: "",
      passwordState: "",
    };
  },

  methods: {
    //用户注册
    checkUsername() {
      let usernameRegExp = /^[0-9A-Za-z]{4,6}$/;
      if (usernameRegExp.test(this.username)) {
        this.usernameState = "success";
        return true;
      } else {
        this.$toast({
          message: "用户名错误",
          position: "middle",
          duration: 3000,
        });
        this.usernameState = "error";
        return false;
      }
    },
    //校验密码
    checkPassword() {
      let passwordRegExp = /^[0-9A-Za-z]{4,6}$/;
      if (passwordRegExp.test(this.password)) {
        this.passwordState = "success";
        return true;
      } else {
        this.$toast({
          message: "密码错误",
          position: "middle",
          duration: 3000,
        });
        this.passwordState = "error";
        return false;
      }
    },
    handle() {
      if (this.checkUsername() && this.checkPassword()) {
        //客户端发送请求
        //拼接this.axios.post('/login','username=' + this.username + '&password=' + this.password).then(res=>{})
        //模板字符串
        this.axios
          .post(
            "/login",
            `username=${this.username} &password=${this.password}`
          )
          .then((res) => {
            //登录失败
            if (res.data.code == 201) {
              this.$messagebox
                .confirm("登录失败,是否注册新用户", "提示信息")
                .then(() => {
                  this.$router.push("register");
                })
                .catch((error) => {});
              //登录成功
            } else if (res.data.code == 200) {
              this.$router.push("/");
            }
          });
      }
    },
  },
};
</script>