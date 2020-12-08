
<template>
  <div>
    <!-- 顶部导航开始 -->
    <div>
      <mt-header title="学前端到 到学问!">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <router-link to="login" slot="right">注册</router-link>
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

      <mt-field
        type="password"
        label="确认密码"
        placeholder="请再次确认密码"
        v-model="conpassword"
        @blur.native.capture="checkConpassword"
        :state="conpasswordState"
      ></mt-field>
      <mt-button type="primary" size="large" @click="handle"
        >免费注册</mt-button
      >
    </div>
    <!-- 表单区域结束 -->
  </div>
</template>
<style scoped>
.bg {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.pg-canvas{
  position: absolute;
  top:0;
  left: ;
}
.login-body {
    width: 380px;
    height: 380px;
    background-color: #fff;
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -190px;
    margin-left: -190px;
    border-radius: 3px;
    padding: 15px 22px;
    box-shadow: 0 0 10px #eee;
}

.login-title {
    padding: 20px 0px 28px 0px;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: #009688;
}

.login-item {
    margin-top: 20px;
    padding: 0px 10px;
    position: relative;
}

    .login-item .layui-input {
        padding-left: 36px;
    }

    .login-item label {
        position: absolute;
        color: #ccc9c9;
        top: 1px;
        width: 38px;
        line-height: 36px;
        text-align: center;
    }
</style>
<script >
export default {
  data() {
    return {
      username: "",
      password: "",
      conpassword: "",
      usernameState: "",
      passwordState: "",
      conpasswordState: "",
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
    //效验两次密码是否一致
    checkConpassword() {
      if (this.password == this.conpassword) {
        this.conpasswordState = "success";
        return true;
      } else {
        this.$toast({
          message: "两次密码不一致",
          position: "middle",
          duration: 3000,
        });
        this.conpasswordState = "error";
        return false;
      }
    },
    // '/register', 'usename='+ this.username+ '&password=' + this.password
    //   
    handle() {
        if(this.checkUsername() && this.checkPassword() && this.checkConpassword()){     
          this.axios.post('/register', 'username='+ this.username+ '&password=' + this.password).then(res=>{;
          //注册失败
        if(res.data.code==201){
          //显示模态对话框(类似于window.alert)方法
           this.$messagebox("提示信息","用户已经存在")
       }
        if(res.data.code==200){
          //注册成功
           this.$router.push('/')
         }
         });
       }
    },
  },
};

</script>