export const listConfig = {    
    'agentIndex': {
        title: '代理商管理',
        filters: ['underFinanceCompNum', 'checkInTime', 'status']
    },
    // 财务公司管理
    'financeCompanyIndex': {
        title: '财务公司管理',
        filters: ['origin', 'enterpriseAccountBookNum', 'checkInTime']
    },
    // 企业账簿管理
    'busiBooksIndex': {
        title: '企业账簿管理',
        filters: ['createAccountBookScope', 'createOrigin']
    },
    // 充值订单管理
    'rechargeOrderIndex': {
        title: '充值订单列表',
        filters: []
    }
}

export const allFilters = [
    {
        key: 'underFinanceCompNum',
        name: '名下财务公司数量',
        apiPath: '',
        list: [],
        placeholder: '全部'
    },{
        key: 'checkInTime',
        name: '入住时长',
        apiPath: '',
        list: [],
        placeholder: '全部'
    },{
        key: 'status',
        name: '状态',
        apiPath: '',
        list: [],
        placeholder: '正常'
    },{
        key: 'origin',
        name: '来源',
        apiPath: '',
        list: [],
        placeholder: '全部'
    },{
        key: 'enterpriseAccountBookNum',
        name: '企业账簿数量',
        apiPath: '',
        list: [],
        placeholder: '全部'
    }, {
        key: 'createAccountBookScope',
        name: '建账时长',
        apiPath: '',
        list: [],
        placeholder: '全部'
    }, {
        key: 'createOrigin',
        name: '创建来源',
        apiPath: '',
        list: [],
        placeholder: '全部'
    }
]