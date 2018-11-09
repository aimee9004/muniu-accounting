<template>
    <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu
            :show-timeout="200"
            :default-active="$route.path"
            :collapse="isCollapse"
            mode="vertical"
            background-color="#4f6293"
            text-color="#FAFAFA"
            active-text-color="#4F6394"
        >
            <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path"/>
        </el-menu>
    </el-scrollbar>
</template>

<script>
    import { mapGetters } from 'vuex'
    import SidebarItem from './SidebarItem'

    export default {
        components: { SidebarItem },
        computed: {
            ...mapGetters([
                'sidebar'
            ]),
            routes() {
                return this.$router.options.routes
            },
            isCollapse() {
                return !this.sidebar.opened
            }
        }
    }
</script>

<style lang="scss">
    .scrollbar-wrapper {
        .el-menu-item {
            font-size: 14px;
            height: 50px;
            line-height: 50px;
            // &.is-active {
            //     background-color: white !important;
            // }
        }
    }
</style>

