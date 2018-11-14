<template>
    <div class="list-table">        
        <el-table
            border
            key="agent-index"
            :data="tableData"
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width: 100%">
            <el-table-column v-for="(item, index) in tableColumns[currMenuName]" 
                :key="index" :label="item.label" :type="item.type" :property="item.property"
                :min-width="item.width" :align="item.align || 'center'">
            </el-table-column>

            <!-- 代理商管理 -->
            <el-table-column v-if="currMenuName==='agent-index'" key="agent-index" label="操作" fixed="right" width="300" align="center">
                <template slot-scope="scope">
                    <el-button size="mini" type="primary">客户详情</el-button>
                    <el-button size="mini" type="primary">停用</el-button>
                    <el-button size="mini" type="primary">查看账单明细</el-button>
                </template>
            </el-table-column>

            <!-- 财务公司管理 -->
            <el-table-column v-if="currMenuName==='finance_company-index'" key="finance_company-index" label="操作" fixed="right" width="300" align="center">
                <template slot-scope="scope">
                    <el-button size="mini" type="primary">查看详情</el-button>
                    <el-button size="mini" type="primary">终止</el-button>
                    <el-button size="mini" type="primary">查看账单明细</el-button>
                </template>
            </el-table-column>            
                             
            <!-- 企业账簿管理 -->
            <el-table-column v-if="currMenuName==='busi_books-index'" key="busi_books-index" label="操作" fixed="right" width="100" align="center">
                <template slot-scope="scope">
                    <el-button size="mini" type="primary">账簿详情</el-button>
                </template>
            </el-table-column>            
            
            <!-- 充值订单管理 -->
            <el-table-column v-if="currMenuName==='recharge_order-index'" key="recharge_order-index" label="操作" fixed="right" width="100" align="center">
                <template slot-scope="scope">
                    <el-button size="mini" type="primary">确认收款</el-button>
                </template>
            </el-table-column>            
        </el-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                currMenuName: '',
                tableColumns: {
                    // 代理商管理
                    'agent-index': [
                        { label: '序号', width: '50', type: 'index' },
                        { label: '公司名称', property: 'componyName', width: '150' },
                        { label: '所在地', property: 'address', width: '200' },
                        { label: '财务公司数量', property: 'num', width: '120' },
                        { label: '平台余额(金豆)', property: 'num', width: '120' },
                        { label: '合作状态', property: 'status', width: '100' },
                    ],
                    // 财务公司管理
                    'finance_company-index': [
                        { label: '序号', width: '50', type: 'index' },
                        { label: '公司名称', property: 'componyName', width: '150' },
                        { label: '来源', property: 'componyName', width: '150' },
                        { label: '所在地', property: 'address', width: '200' },
                        { label: '企业账簿数量', property: 'num', width: '120' },
                        { label: '平台余额(金豆)', property: 'num', width: '120' },
                        { label: '入住时间', property: 'status', width: '100' },
                        { label: '合作状态', property: 'status', width: '100' },
                    ],
                    // 企业账簿管理
                    'busi_books-index': [
                        { label: '序号', width: '50', type: 'index' },
                        { label: '企业名称', property: 'componyName', width: '150' },
                        { label: '所在地', property: 'address', width: '200' },
                        { label: '法人姓名', property: 'num', width: '120' },
                        { label: '纳税人性质', property: 'num', width: '120' },
                        { label: '企业准则', property: 'status', width: '120' },
                        { label: '账簿来源', property: 'status', width: '220' },
                        { label: '建账时间', property: 'status', width: '100' },
                    ],
                    // 充值订单管理
                    'recharge_order-index': [
                        { label: '序号', width: '50', type: 'index' },
                        { label: '订单号', property: 'componyName', width: '150' },
                        { label: '来源', property: 'address', width: '150' },
                        { label: '充值金额', property: 'num', width: '120' },
                        { label: '充值方式', property: 'num', width: '120' },
                        { label: '发起时间', property: 'status', width: '100' },
                        { label: '联系人姓名', property: 'status', width: '100' },
                        { label: '联系人电话', property: 'status', width: '100' },
                    ]
                },
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
                currentRow: null
            }
        },
        created() {
            this.currMenuName = this.$route.name 
            console.log('list-view created: ', this.currMenuName)
        }, 
        methods: {     
            handleCurrentChange(val, old) {
                this.currentRow = val;
                console.log('currentRow: ', this.currentRow, old)
            }
        },
        watch: {
            $route(val) {
                this.currMenuName = val.name 
                console.log('list-view watch: ', this.currMenuName)
            }
        }
    }
</script>

<style lang="scss">
    .list-table {
        th {
            background-color: #f5f5f5;
            border-right: 0;
            font-size: 14px;
            color: #404040;
        }
        td {
            font-size: 12px;
            color: #404040
        }
    }
</style>

