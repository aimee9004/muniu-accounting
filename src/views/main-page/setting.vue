<template>
    <div class="main-page setting-page">        
        <el-breadcrumb separator-class="el-icon-minus" class="title">
            <el-breadcrumb-item :to="{ name: 'setting-index' }">设置</el-breadcrumb-item>
            <el-breadcrumb-item>费用设置</el-breadcrumb-item>
        </el-breadcrumb>
        <h2 class="page-title">费用设置</h2>
        
        <el-form :model="formData" :rules="rules" label-width="130px" ref="formData" class="bg-white-block">
            <p class="sub-title">公司信息</p>
            <div class="item-block">
                <p class="setting-title">企业记账</p>
                <p class="setting-sub-title">扣费金额：</p>
                <el-form-item label=" " prop="douOne" class="special-one">
                    <div><span>一般纳税人性质账簿每月 </span><el-input class="small-input" v-model="formData.douOne"></el-input> 金豆</div>
                </el-form-item>
                <br>
                <el-form-item label=" " prop="douTwo" class="special-one">
                    <div><span>小规模纳税性质人账簿每月 </span><el-input class="small-input" v-model="formData.douTwo"></el-input> 金豆</div>
                </el-form-item>
            </div>
            <div class="item-block">
                <p class="setting-title">咨询费用</p>
                <el-form-item label="扣费金额："><span>0.5金豆/条</span></el-form-item>
                <el-form-item label="精准客户："><span>200金豆/条</span></el-form-item>
            </div>
            <p class="sub-title">充值设置</p>
            <div class="item-block noborder">
                <div class="clearfix">
                    <p class="setting-title">直营财务公司</p>
                    <el-form-item label="充值比例：" prop="douThree">￥10.00 = <el-input class="small-input" v-model="formData.douThree"></el-input> 金豆</el-form-item>
                </div>
                <div class="clearfix">
                    <p class="setting-title">代理软件客户</p>
                    <el-form-item label="兑换比例：" prop="douFour">￥10.00 = <el-input class="small-input" v-model="formData.douFour"></el-input> 金豆</el-form-item>
                </div>
            </div>
            <div class="submit-btn">
                <el-button @click="goEdit" type="primary">编辑</el-button>
            </div>
        </el-form>
    </div>
</template>

<script>
    import validate from '@/utils/validate'
    export default {
        data() {
            return {
                formData: {
                    douOne: '',
                    douTwo: '',
                    douThree: '',
                    douFour: ''
                },
                rules: {
                    douOne: [
                        { required: true, validator: validate.vNotNull('金豆'), trigger: 'blur' },
                        { validator: validate.vDouNum, trigger: 'blur' }
                    ],
                    douTwo: [
                        { required: true, validator: validate.vNotNull('金豆'), trigger: 'blur' },
                        { validator: validate.vDouNum, trigger: 'blur' }
                    ],
                    douThree: [
                        { required: true, validator: validate.vNotNull('金豆'), trigger: 'blur' },
                        { validator: validate.vDouNum, trigger: 'blur' }
                    ],
                    douFour: [
                        { required: true, validator: validate.vNotNull('金豆'), trigger: 'blur' },
                        { validator: validate.vDouNum, trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            goEdit() {
                this.$refs['formData'].validate(valid => {
                    if(valid) {
                        console.log('success valid')
                    }else {
                        console.log('error valid')
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
        .setting-title {
            font-size: 14px;
            color: #5B5B5B;
            padding-left: 15px;
            margin-bottom: 5px;
        }
        .setting-sub-title {
            font-size: 14px;
            color: #5B5B5B;
            padding-left: 45px;
            margin-bottom: 5px;
            margin-top: 20px;
        }
        .marginB10 {
            margin-bottom: 10px;
        }
        .submit-btn {
            text-align: center;
        }
    }
</style>
<style lang="scss">
    .setting-page {
        .special-one {
            .el-form-item__label {
                width: 45px !important;
                padding-right: 0;
            }
            .el-form-item__content {
                margin-left: 45px !important;
            }
        }
    }
</style>


