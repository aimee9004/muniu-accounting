<template>
    <div class="main-page">
        <div class="title">代理商管理</div>
        <div class="top-btn">
            <el-button class="base-solid-btn">新代理商加盟</el-button>
        </div>
        <ul class="filter-block clearfix">
            <li>
                <span>名下财务公司数量：</span>
                <el-select v-model="filterData.underFinanceCompNumVal" placeholder="全部">
                    <el-option v-for="item in underFinanceCompNumArr" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </li>
            <li>
                <span>入驻时长：</span>
                <el-select v-model="filterData.checkInTime" placeholder="全部">
                    <el-option v-for="item in underFinanceCompNumArr" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </li>
            <li>
                <span>状态：</span>
                <el-select v-model="filterData.status" placeholder="正常">
                    <el-option v-for="item in underFinanceCompNumArr" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </li>
            <li>
                <span>搜索：</span>
                <el-input v-model="filterData.searchInfo" placeholder="请输入关键字快速查找公司"></el-input>
            </li>
        </ul>
        <list-view></list-view>
    </div>
</template>

<script>
    import ListView from '@/views/main-page/components/list-view'
    export default {
        data() {
            return {
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

        },
        components: {
            ListView
        }   
    }
</script>

<style lang="scss" scoped>
    .main-page {

    }
</style>
