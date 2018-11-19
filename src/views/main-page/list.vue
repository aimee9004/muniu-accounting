<template>
    <div class="main-page">
        <div class="title">{{title}}</div>
        <div class="top-btn" v-if="currMenuName==='agentIndex' || currMenuName==='financeCompanyIndex'">
            <el-button @click="goAddInfo" class="base-solid-btn">{{currMenuName==='agentIndex'?'新代理商加盟':'新财务公司加盟'}}</el-button>
        </div>
        <div class="bg-white-block">

            <!-- top filter -->
            <top-filter :filterData="filterData" :currFilterList="currFilterList"></top-filter>

            <!-- list view -->
            <list-view :currMenuName="currMenuName"></list-view>

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
    import TopFilter from '@/views/main-page/components/top-filter'
    import { listConfig, allFilters } from '@/utils/default-config.js'
    export default {
        data() {
            return {
                currMenuName: '',
                title: '',
                currentPage: 1,
                totalNumber: 100,
                pageSizes: [20, 50],    // 数据区间
                pageSize: 20,           // 每页多少条数据
                filterData: {
                    underFinanceCompNum: '', // 名下财务公司数量
                    checkInTime: '',            // 入住时长
                    status: '',                 // 状态
                    searchInfo: '',             // 搜索

                    origin: '',                 // 来源
                    enterpriseAccountBookNum: '',   // 企业账簿数量
                },
                currFilterList: [],             // 当前列表 filters 内容
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
        created() {
            this.currMenuName = this.$route.name 
            this.title = listConfig[this.currMenuName].title
            // console.log('list-view created: ', this.currMenuName)
            // console.log('11111=======', listConfig[this.currMenuName].filters)
            // console.log('2222222=======', allFilters)
            this.getCurrFilterList(listConfig[this.currMenuName].filters)
        },
        methods: {
            goAddInfo() {
                this.$router.push({
                    name: 'newAgent'
                })
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            getCurrFilterList(currKeysArr) {
                // 清数据
                this.currFilterList = []
                if(currKeysArr.length > 0) {
                    for(let i = 0; i < currKeysArr.length; i++) {
                        let info = allFilters.filter(v => v.key === currKeysArr[i])
                        this.currFilterList = this.currFilterList.concat(info)
                    }
                    console.log('this.currFilterList: ', this.currFilterList)
                    this.setList()
                }
            },
            setList(key, list) {
                for(let i = 0; i < this.currFilterList.length; i++) {
                    // if(this.currFilterList[i].key === key) {
                        this.currFilterList[i].list = this.underFinanceCompNumArr
                    // }
                }
            }
        },
        components: {
            ListView, TopFilter
        },
        watch: {
            $route(val) {
                this.currMenuName = val.name 
                this.title = listConfig[this.currMenuName].title
                // console.log('list-view watch: ', this.currMenuName)
                // console.log('watch 11111', listConfig[this.currMenuName].filters)
                // console.log('watch 2222222', allFilters)
                this.getCurrFilterList(listConfig[this.currMenuName].filters)                
            }
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
        .pagination-block {
            margin: 40px auto;
            text-align: center;
        }
    }
</style>
