<template>
    <div class="main-page">
        <div class="title">代理商管理</div>
        <div class="top-btn">
            <el-button @click="goAddInfo" class="base-solid-btn">新代理商加盟</el-button>
        </div>
        <div class="bg-white-block">
            <ul class="filter-block clearfix">
                <li>
                    <span class="filter-label">名下财务公司数量：</span>
                    <el-select v-model="filterData.underFinanceCompNumVal" placeholder="全部">
                        <el-option v-for="item in underFinanceCompNumArr" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </li>
                <li>
                    <span class="filter-label">入驻时长：</span>
                    <el-select v-model="filterData.checkInTime" placeholder="全部">
                        <el-option v-for="item in underFinanceCompNumArr" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </li>
                <li>
                    <span class="filter-label">状态：</span>
                    <el-select v-model="filterData.status" placeholder="正常">
                        <el-option v-for="item in underFinanceCompNumArr" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </li>
                <li>
                    <span class="filter-label">搜索：</span>
                    <el-input v-model="filterData.searchInfo" placeholder="请输入关键字快速查找公司"></el-input>
                </li>
            </ul>
            <list-view></list-view>
            <div class="pagination-block">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
                </el-pagination>

            </div>
        </div>
    </div>
</template>

<script>
    import ListView from '@/views/main-page/components/list-view'
    export default {
        data() {
            return {
                currentPage: 1,
                totalNumber: 100,
                pageSizes: [20, 50],    // 数据区间
                pageSize: 20,           // 每页多少条数据
                filterData: {
                    underFinanceCompNumVal: '', // 名下财务公司数量
                    checkInTime: '',            // 入住时长
                    status: '',                 // 状态
                    searchInfo: '',             // 搜索
                },
                underFinanceCompNumArr: [{
                        value: '选项1',
                        label: '黄金糕'
                    }, {
                        value: '选项2',
                        label: '双皮奶'
                    }, {
                        value: '选项3',
                        label: '蚵仔煎'
                    }, {
                        value: '选项4',
                        label: '龙须面'
                    }, {
                        value: '选项5',
                        label: '北京烤鸭'
                }],
            }
        },
        methods: {
            goAddInfo() {
                this.$router.push({
                    name: 'new-agent'
                })
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        },
        components: {
            ListView
        }   
    }
</script>

<style lang="scss" scoped>
    .main-page {
        .bg-white-block {
            background-color: white;
            overflow: hidden;
            padding: 20px;
        }
        .filter-block {
            .filter-label {
                font-size: 14px;
                color: #5B5B5B;
            }
        }
        .pagination-block {
            margin: 40px auto;
            text-align: center;
        }
    }
</style>
