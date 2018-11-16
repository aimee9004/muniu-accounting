<template>
    <div class="main-page add-info">
        <el-breadcrumb separator-class="el-icon-minus" class="title">
            <el-breadcrumb-item :to="{ name: 'agentIndex' }">代理商管理</el-breadcrumb-item>
            <el-breadcrumb-item>新代理商入驻</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="top-btn">
            <el-button @click="$router.go(-1)" class="base-solid-btn">返回代理商管理</el-button>
        </div>
        <el-form :model="formData" :rules="rules" label-width="130px" ref="formData" class="bg-white-block">
            <p class="sub-title">公司信息</p>
            <div class="item-block">
                <el-form-item label="公司名称：">
                    <el-input v-model="formData.componyName" placeholder="请输入公司名称"></el-input>
                </el-form-item>
                <br>
                <el-form-item class="address-item" label="公司地址：">
                    <el-select v-model="formData.region" placeholder="请选择省份">
                        <el-option label="西安" value="xian"></el-option>
                        <el-option label="成都" value="chegndu"></el-option>
                    </el-select>
                    <!-- <el-select placeholder="请选择省份">
                        <el-option label="西安" value="xian"></el-option>
                        <el-option label="成都" value="chegndu"></el-option>
                    </el-select>
                    <el-select placeholder="请选择省份">
                        <el-option label="西安" value="xian"></el-option>
                        <el-option label="成都" value="chegndu"></el-option>
                    </el-select> -->
                    <el-input placeholder="请输入详址(如旺座现代城B栋1709)"></el-input>
                </el-form-item>
                <br />
                <el-form-item label="入驻身份：">
                    代理商
                </el-form-item>
            </div>
            <p class="sub-title">人员信息</p>
            <div class="item-block">
                <el-form-item label="法人姓名：">
                    <el-input v-model="formData.legalPersonName" placeholder="请输入法人姓名"></el-input>
                </el-form-item>
                <el-form-item label="法人联系电话：">
                    <el-input v-model="formData.legalPersonTel" placeholder="请输入法人联系电话"></el-input>
                </el-form-item>
                <br />
                <el-form-item label="联系人姓名：">
                    <el-input v-model="formData.contactPersonName" placeholder="请输入联系人姓名"></el-input>
                </el-form-item>
                <el-form-item label="联系人电话：">
                    <el-input v-model="formData.contactPersonTel" placeholder="请输入联系人电话"></el-input>
                </el-form-item>
            </div>
            <p class="sub-title">登录账号</p>
            <div class="item-block">
                <el-form-item label="账号：">
                    <el-input placeholder="请输入账号"></el-input>
                </el-form-item>
                <el-form-item label="密码：">
                    <el-input placeholder="请输入密码"></el-input>
                </el-form-item>
            </div>
            <p class="sub-title">平台初始金豆数量</p>
            <div class="item-block">
                <el-form-item label="数量：">
                    <el-input v-model="formData.initialDouNum" placeholder="请输入数量"></el-input>
                </el-form-item>
            </div>
            <p class="sub-title">充值设置</p>
            <div class="item-block">
                <el-form-item label="兑换比例：">
                    ￥10.00元 = 
                    <el-input v-model="formData.setsDouNum" class="small-input"></el-input> 金豆
                </el-form-item>
            </div>
            <p class="sub-title">银行充值账号</p>
            <div class="item-block">
                <el-form-item label="选择银行：">
                    <el-select v-model="formData.selBank" placeholder="请选择银行">
                        <el-option label="西安银行" value="xianBank"></el-option>
                        <el-option label="招商银行" value="zhaoshangBank"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="输入账号：">
                    <el-input v-model="formData.bankAccount" placeholder="请输入账号"></el-input>
                </el-form-item>
            </div>
            <div class="submit-btn">
                <el-button @click="goSubmit" type="primary">确认</el-button>
                <el-button>取消</el-button>
            </div>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formData: {
                    componyName: '',    // 公司名称
                    region: '',         // 区域
                    legalPersonName: '',    // 法人姓名
                    legalPersonTel: '',     // 法人电话
                    contactPersonName: '',  // 联系人姓名
                    contactPersonTel: '',   // 联系人电话
                    initialDouNum: '',      // 平台初始金豆数量
                    setsDouNum: '',         // 充值设置金豆数量
                    selBank: '',            // 银行充值账号
                    bankAccount: '',        // 银行账号
                },
                rules: {

                }
            }
        },
        methods: {
            goSubmit() {
                this.$refs['formData'].validate(valid => {
                    if(valid) {
                        console.log('success')
                    }else {
                        console.log('validate err')
                    }
                })
            }
        }
    }
</script>


<style lang="scss" scoped>
    .main-page {        
        .bg-white-block {
            background-color: white;
            overflow: hidden;
            padding: 15px 10px;
        }
        br {
            clear: both;
        }
    }
</style>
<style lang="scss">
    .add-info {        
        .address-item {            
            .el-form-item__content {                
                width: 610px;
            }
        }        
        .el-form-item__content {
            width: 230px;
        }
    }
</style>


