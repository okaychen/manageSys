<template>
    <div class="backlogin">
        <div class="login_container">
            <div class="title">后台登录</div>
            <div class="login_inp_box">
                <input class="login_inp" type="text" placeholder="用户名" v-model="username" />
            </div>
            <div class="login_inp_box">
                <input @keyup.13="login" class="login_inp" type="password" placeholder="密码" v-model="password" />
            </div>

            <div class="login_other">
                <a href="javascript:;">找回密码</a>
                <input type="checkbox" name="remenberme"><label for="">记住我</label>
            </div>

            <div class="login_btn_box">
                <button :disabled="btn_disabled" class="login_btn" @click="login">{{login_status}}</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        data() {
            return {
                username: "admin",
                password: "123456",
                login_status: "登录",
                btn_disabled: false
            }
        },
        methods: {
            login() {
                var _this = this;
                // this.btn_disabled = true;
                // this.login_status = '登录中...';
                console.log(`${this.username},${this.password}`)
                this.$reqs.post("/users/login",{
                    username : this.username,
                    password : this.password
                }).then(function(reslut){
                    console.log(reslut);
                    _this.disablebtn = false;
                    _this.loginText = "登录";
                }).catch(function(error){
                    console.log(error);
                    _this.disablebtn = false;
                    _this.loginText = "登录";
                })
            }
        },
    }
</script>


<style scoped>
    .login_container {
        width: 320px;
        margin: 30px auto;
    }

    .title {
        color: #273444;
        font-size: 1.5em;
        margin-bottom: 20px;
    }

    .login_inp {
        width: 100%;
        height: 40px;
        line-height: 40px;
        margin: 4px 0 10px;
        border-radius: 3px;
        padding: 0 10px;
        outline: none;
        font-size: 16px;
        color: #333;
        box-sizing: border-box;
        border: 1px solid #cad3de;
    }

    .login_inp:focus {
        border: 1px solid #4289dc;
    }

    .login_btn {
        box-sizing: border-box;
        width: 100%;
        height: 40px;
        margin-top: 15px;
        line-height: 40px;
        text-align: center;
        background: #4187db;
        border: none 0;
        border-radius: 3px;
        color: #fff;
        font-size: 16px;
        cursor: pointer;
        outline: none;
        transition: all 0.5 ease;
    }

    .login_btn:hover {
        background: #2668b5;
    }

    .login_btn[disabled] {
        opacity: 0.7;
    }

    .login_btn[disabled]:hover {
        background: #4187db;
    }

    .login_other input[type="checkbox"] {
        float: left;
    }

    .login_other a {
        float: right;
        color: #727f8f;
        text-decoration: none;
    }

    .login_other a:hover {
        color: #273444;
    }

    .login_other input,
    .login_other label {
        float: left;
        color: #727f8f;
    }

    .login_other input {
        margin: 4px 5px 0 0;
    }
</style>