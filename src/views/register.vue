<template>
    <div class="register">
        <div class="login_container">
            <div class="title">用户注册</div>
            <div class="login_inp_box">
                <input class="login_inp" type="text" placeholder="用户名" v-model="username" />
            </div>
            <div class="login_inp_box">
                <input class="login_inp" type="password" placeholder="密码" v-model="password" />
            </div>
            <div class="login_inp_box">
                <input @keyup.13="register" class="login_inp" type="password" placeholder="确认密码"
                    v-model="re_password" />
            </div>
            <div class="login_btn_box">
                <button :disabled="btn_disabled" class="login_btn" @click="register">{{register_status}}</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                username: "",
                password: "",
                re_password: "",
                register_status: "注册",
                btn_disabled: false
            }
        },
        methods: {
            register() {
                var _this = this;
                this.axios.post('/users/register', {
                    username: this.username,
                    password: this.password,
                    re_password: this.re_password
                }).then(function (res) {
                    // // res.data.code >>> 0 用户名或密码不能为空 >>> -3 该用户已被注册 >>> -4 两次密码输入不一致 >>> 2 注册成功
                    if (res.data.code === 2) {
                        _this.$message({
                            message: res.data.message,
                            type: 'success'
                        })
                        _this.$router.push({
                            path: '/login'
                        })
                    } else {
                        _this.$message({
                            message: res.data.message,
                            type: 'error'
                        })
                    }
                }).catch(function (err) {
                    console.log(err);
                })
            }
        },
    }
</script>

<style>
    .login_container {
        width: 320px;
        margin: 20px auto;
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
</style>