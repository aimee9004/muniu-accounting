<template>
    <div class="main-page">            
        <el-breadcrumb separator-class="el-icon-minus" class="title">
            <el-breadcrumb-item :to="{ name: 'agentIndex' }">财务管理</el-breadcrumb-item>
            <el-breadcrumb-item>生成订单</el-breadcrumb-item>
        </el-breadcrumb>
        <h2 class="page-title">生成订单</h2>
        <div class="bg-white-block">
            <p class="sub-title">金额信息</p>
            <el-form :model="formData" >
                <div class="item-block">
                    <el-form-item label="充值金额：" prop="price">
                        ￥ <el-input class="small-input" v-model="formData.price"></el-input> 元
                        <span class="inner-span">充值比例（比例1:1）</span>
                    </el-form-item>
                </div>
            </el-form>
            <p class="sub-title">支付方式</p>
            <div class="item-block noborder">
                <el-radio-group v-model="formData.payType">
                    <el-radio label="wechart"><img src="@/assets/wechart.png" alt=""></el-radio>
                    <el-radio label="alipay"><img src="@/assets/alipay.png" alt=""></el-radio>
                    <el-radio label="bank"><img src="@/assets/bank.png" alt=""></el-radio>
                </el-radio-group>
            </div>
            <el-button type="primary">生成订单</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formData: {
                    price: '',
                    payType: ''
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .main-page {
        .bg-white-block  {
            padding-bottom: 100px;
        }
        .item-block {
            padding-left: 15px;
            .el-form-item {
                float: none;
                display: block;
                .inner-span {
                    margin-left: 30px;
                }
            }
            .el-radio+.el-radio {
                margin-left: 70px;
            }
        }
        .el-button {
            margin-left: 15px;
            padding: 10px 35px;
        }
    }
</style>

