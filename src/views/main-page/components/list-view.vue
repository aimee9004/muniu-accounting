<template>
    <div>        
        <el-table
            border class="list-table"
            :data="tableData"
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width: 100%">
            <el-table-column v-for="(item, index) in tableColumns[currMenuName]" 
                :key="index" :label="item.label" :type="item.type" :property="item.property"
                :min-width="item.width" :align="item.align || 'center'">
            </el-table-column>

            <!-- 代理商管理 -->
            <el-table-column v-if="currMenuName==='agentIndex'" key="agentIndex" label="操作" fixed="right" width="300" align="center">
                <template slot-scope="scope">
                    <el-button size="mini" type="primary">客户详情</el-button>
                    <el-button size="mini" type="primary">停用</el-button>
                    <el-button size="mini" type="primary">查看账单明细</el-button>
                </template>
            </el-table-column>

            <!-- 财务公司管理 -->
            <el-table-column v-if="currMenuName==='financeCompanyIndex'" key="financeCompanyIndex" label="操作" fixed="right" width="300" align="center">
                <template slot-scope="scope">
                    <el-button size="mini" type="primary">查看详情</el-button>
                    <el-button size="mini" type="primary">终止</el-button>
                    <el-button size="mini" type="primary">查看账单明细</el-button>
                </template>
            </el-table-column>            
                             
            <!-- 企业账簿管理 -->
            <el-table-column v-if="currMenuName==='busiBooksIndex'" key="busiBooksIndex" label="操作" fixed="right" width="100" align="center">
                <template slot-scope="scope">
                    <el-button size="mini" type="primary">账簿详情</el-button>
                </template>
            </el-table-column>            
            
            <!-- 充值订单管理 -->
            <el-table-column v-if="currMenuName==='rechargeOrderIndex'" key="rechargeOrderIndex" label="操作" fixed="right" width="100" align="center">
                <template slot-scope="scope">
                    <el-button size="mini" type="primary">确认收款</el-button>
                </template>
            </el-table-column>            
        </el-table>
    </div>
</template>

<script>
    export default {
        props: {
            currMenuName: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                tableColumns: {
                    // 代理商管理
                    'agentIndex': [
                        { label: '序号', width: '50', type: 'index' },
                        { label: '公司名称', property: 'componyName', width: '150' },
                        { label: '所在地', property: 'address', width: '200' },
                        { label: '财务公司数量', property: 'num', width: '120' },
                        { label: '平台余额(金豆)', property: 'num', width: '120' },
                        { label: '合作状态', property: 'status', width: '100' },
                    ],
                    // 财务公司管理
                    'financeCompanyIndex': [
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
                    'busiBooksIndex': [
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
                    'rechargeOrderIndex': [
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
            
        }, 
        methods: {     
            handleCurrentChange(val, old) {
                this.currentRow = val;
                console.log('currentRow: ', this.currentRow, old)
            }
        }
    }
</script>

<style lang="scss">
</style>

