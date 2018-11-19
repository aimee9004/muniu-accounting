<template>
    <div class="login-container">
        <img class="logo" src="../../assets/login/logo.png" alt="">
        <div class="login-box">
            <h3 class="title">欢迎登录木牛盒子计费后台</h3>
            <p class="sub-title"><span>智能·高效·精准</span></p>
            <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
                <el-form-item prop="username">
                    <span class="svg-container">
                        <svg-icon icon-class="user" />
                    </span>
                    <el-input v-model="loginForm.username" name="username" type="text" auto-complete="on" placeholder="username" />
                </el-form-item>
                <el-form-item prop="password">
                    <span class="svg-container">
                        <svg-icon icon-class="password" />
                    </span>
                    <el-input
                        :type="pwdType"
                        v-model="loginForm.password"
                        name="password"
                        auto-complete="on"
                        placeholder="password"
                        @keyup.enter.native="handleLogin" />
                    <span class="show-pwd" @click="showPwd">
                        <svg-icon icon-class="eye" />
                    </span>
                </el-form-item>
                <el-button :loading="loading" type="primary" style="width:100%;" @click.native.prevent="handleLogin">
                    登录
                </el-button>
                <div class="tips clearfix">
                    <a class="fl" href="javascript:;">合作咨询</a>
                    <a class="fr" href="javascript:;">需要帮助</a>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
    import { isvalidUsername } from '@/utils/validate'

    export default {
        name: 'Login',
        data() {
            const validateUsername = (rule, value, callback) => {
                if (!value) {
                    callback(new Error('用户名不能为空'))
                } else {
                    callback()
                }
            }
            const validatePass = (rule, value, callback) => {
                if (value.length < 5) {
                    callback(new Error('密码不能小于5位'))
                } else {
                    callback()
                }
            }
            return {
                loginForm: {
                    username: 'admin',
                    password: 'admin'
                },
                loginRules: {
                    username: [{ required: true, trigger: 'blur', validator: validateUsername }],
                    password: [{ required: true, trigger: 'blur', validator: validatePass }]
                },
                loading: false,
                pwdType: 'password',
                redirect: undefined
            }
        },
        watch: {
            $route: {
                handler: function(route) {
                    this.redirect = route.query && route.query.redirect
                },
                immediate: true
            }
        },
        methods: {
            showPwd() {
                if (this.pwdType === 'password') {
                    this.pwdType = ''
                } else {
                    this.pwdType = 'password'
                }
            },
            handleLogin() {
                // console.log('-------', this.redirect)
                this.$router.push({ path: '/' })

                // this.$refs.loginForm.validate(valid => {
                //     if (valid) {
                //         this.loading = true
                //         this.$store.dispatch('Login', this.loginForm).then(() => {
                //             this.loading = false
                //             this.$router.push({ path: this.redirect || '/' })
                //         }).catch(() => {
                //             this.loading = false
                //         })
                //     } else {
                //         console.log('error submit!!')
                //         return false
                //     }
                // })
            }
        }
    }
</script>

<style lang="scss">
    $bg:#2d3a4b;
    $light_gray:#eee;

    /* reset element-ui css */
    .login-container {
        .el-input {
            display: inline-block;
            // height: 47px;
            width: 85%;
            input {
                background: transparent;
                border: 0px;
                -webkit-appearance: none;
                border-radius: 0px;
                padding: 12px 5px 12px 15px;
                color: #010101;
                font-size: 16px;
                // height: 47px;
                &:-webkit-autofill {
                    -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
                    -webkit-text-fill-color: #fff !important;
                }
            }
        }
        .el-form-item {
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: white;
            border-radius: 5px;
            color: #454545;
            margin-bottom: 24px;
        }
        .el-form-item__content {
            border: 1px solid #919191;
            border-radius: 4px;
            &:hover {
                border: 1px solid #359DFF;
            }
        }
        .el-button {
            height: 68px;
            font-size: 20px;
            border: none;
        }
    }

</style>

<style lang="scss" scoped>
    $dark_gray:#889aa4;
    $light_gray:#eee;
    .login-container {
        position: fixed;
        height: 100%;
        width: 100%;
        background: url('../../assets/login/bg.png') no-repeat center center;
        background-size: cover;
        .logo {
            position: absolute;
            top: 33px;
            left: 44px;
            @media(max-width: 1366px) {
                width: 180px;
                left: 15px;
                top: 15px;
            }
        }
        .login-box {
            top: 50%;
            position: relative;
            margin-top: -300px; 
            @media(max-width: 1366px) {
                margin-top: -280px;
            }
        }
        .login-form {
            position: absolute;
            left: 0;
            right: 0;
            width: 424px;
            max-width: 100%;
            margin: auto;
            padding: 70px 30px 60px;
            background-color: white;
            border-radius: 5px;
        }
        .tips {
            font-size: 14px;
            color: #359DFF;
            margin-top: 38px;
            span {
                &:first-of-type {
                    margin-right: 16px;
                }
            }
        }
        .svg-container {
            padding: 6px 5px 6px 15px;
            color: $dark_gray;
            vertical-align: middle;
            width: 30px;
            display: inline-block;
        }
        .title {
            font-size: 72px;
            font-weight: bold;
            color: $light_gray;
            // padding: 220px 0 50px;
            padding-bottom: 50px;
            text-align: center;
            font-weight: bold;
            text-shadow:0px 2px 6px rgba(0, 0, 0, 0.3);
            @media(max-width: 1366px) {
                font-size: 50px;
                padding-bottom: 40px;
            }
        }
        .sub-title {
            font-size: 36px;
            color: #eee;
            text-align: center;
            text-shadow:0px 2px 6px rgba(0, 0, 0, 0.3);
            margin: 0 auto 35px;
            position: relative;
            &::before {
                content: "";
                position: absolute;
                width: 880px;
                height: 0;
                border-bottom: 2px solid white;
                left: 50%;
                transform: translateX(-50%);
            }
            >span {
                background-color: #019cd4;
                padding: 0px 40px;
                position: relative;
                border-radius: 50%;
                bottom: 20px;
            }
            @media(max-width: 1366px) {
                font-size: 26px;
                &::before {
                    width: 600px;
                }
                >span {
                    border-radius: 10px;
                    background-color: #00a1d5;
                    bottom: 17px;
                }
            }
        }
        .show-pwd {
            position: absolute;
            right: 10px;
            top: 7px;
            font-size: 16px;
            color: $dark_gray;
            cursor: pointer;
            user-select: none;
        }
    }
</style>
