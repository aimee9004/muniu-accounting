<template>
    <div class="main-page">        
        <el-breadcrumb separator-class="el-icon-minus" class="title">
            <el-breadcrumb-item :to="{ name: 'agentIndex' }">财务管理</el-breadcrumb-item>
            <el-breadcrumb-item>财务总览</el-breadcrumb-item>
        </el-breadcrumb>
        <h2 class="page-title">财务总览</h2>
        <div class="bg-white-block">
            <p class="sub-title">账户信息</p>
            <div class="item-block block-first">
                <p>已使用数量： <strong>2000</strong></p>
                <p>未使用数量： <strong>1400</strong></p>
                <p>总金豆数量： <strong>3400</strong></p>
                <div class="account-info-btn">
                    <el-button type="primary">立即充值</el-button>
                    <el-button>订单查看</el-button>
                </div>
            </div>
            <p class="sub-title">未完成支付订单</p>
            <div class="item-block noborder">
                <el-table :data="tableData" border style="width: 100%" class="list-table">
                    <el-table-column label="订单号" prop="componyName" min-width="200" align="center"></el-table-column>
                    <el-table-column label="发生时间" prop="componyName" min-width="150" align="center"></el-table-column>
                    <el-table-column label="金额" prop="componyName" min-width="80" align="center"></el-table-column>
                    <el-table-column label="订单状态" prop="componyName" min-width="80" align="center"></el-table-column>
                    <el-table-column label="操作" width="120" align="center">
                        <template slot-scope="scope">
                            <el-button size="mini" type="primary">前往支付</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {                
                tableData: [
                    {
                        componyName: '***财税公司1',
                        status: '2016-05-02',
                        name: '王小虎',
                        num: '1',
                        address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                        componyName: '***财税公司2',
                        status: '2016-05-04',
                        name: '王小虎',
                        num: '11',
                        address: '上海市普陀区金沙江路 1517 弄'
                    }, {
                        componyName: '***财税公司3',
                        status: '2016-05-01',
                        name: '王小虎',
                        num: '111',
                        address: '上海市普陀区金沙江路 1519 弄'
                    }, {
                        componyName: '***财税公司4',
                        status: '2016-05-03',
                        name: '王小虎',
                        num: '1111',
                        address: '上海市普陀区金沙江路 1516 弄'
                    }
                ],
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
        .item-block.block-first {
            padding-left: 15px;
            position: relative;
            >p {
                font-size: 14px;
                color: #5B5B5B;
                // line-height: 20px;
                margin-bottom: 20px;
            }
            .account-info-btn {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                left: 200px;
                margin-top: -10px;
            }
        }
    }
</style>

