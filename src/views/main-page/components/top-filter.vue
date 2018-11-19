<template>
    <ul class="filter-block clearfix">
        <li v-for="(group, idx) in currFilterList" :key="idx">            
            <span class="filter-label">{{group.name}}：</span>
            <el-select v-model="filterData[group.key]" :placeholder="group.placeholderInfo">
                <el-option v-for="(item, index) in group.list" :key="index" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </li>
    </ul>
</template>

<script>
    import { listConfig, allFilters } from '@/utils/default-config'
    export default {
        props: {
            filterData: {
                type: Object,
                default: {}
            },
            currMenuName: {
                type: String,
                defaullt: ''
            },
            currFilterList: {
                type: Array,
                defaullt: []
            }
        },
        data() {
            return {
                options: [],
            }
        },
        created() {
            
        }
    }
</script>

<style lang="scss" scoped>
    .filter-block {
        .filter-label {
            font-size: 14px;
            color: #5B5B5B;
        }
    }
</style>

