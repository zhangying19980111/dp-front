// 队伍审核：
// 队伍id、队伍名称、负责人、负责人手机号、联系人、联系人手机号、负责人邮箱、主管单位、人数、服务领域、详细地址（哪个班、处）、队伍区域（哪个地区）、用户名、密码、审核状态、队伍logo
export const teamCheck_tableConfig = [
    // {
    //   label: 'id',
    //   prop: 'id',
    // },
    {
        label: '队伍ID',
        prop: 'teamId'
    },
    {
        label: '队伍名称',
        prop: 'teamName'
    },
    {
        label: '主管单位',
        prop: 'organizer'
    },
    {
        label: '服务领域',
        prop: 'serverDomain'
    },
    {
        label: '队伍区域',
        prop: 'teamArea'
    },
    {
        label: '详细地址',
        prop: 'addressDetail'
    },
    {
        label: '人数',
        prop: 'personNumber'
    },
    {
        label: '负责人',
        prop: 'principal'
    },
    {
        label: '负责人手机号',
        prop: 'principalPhone'
    },
    {
        label: '联系人',
        prop: 'linkman'
    },
    {
        label: '联系人手机号',
        prop: 'linkmanPhone'
    },
    // {
    //     label: '负责人邮箱',
    //     prop: 'principalEmail'
    // },

    {
        label: '审核状态',
        prop: 'checkStatus'
    },

]

// 项目审核：项目id、队伍id、项目地点、服务领域、服务对象、服务时间段（每周x每天x点到x点）、项目日期、发布日期、招募日期、结束日期、目前状态（招募待启动、招募中、招募已结束、已结项）、审核状态、项目logo、项目联系人、联系人手机号
export const ProjectCheck_tableConfig = [
    // {
    //   label: 'id',
    //   prop: 'id',
    // },
    {
        label: '项目ID',
        prop: 'projectId'
    },
    {
        label: '项目地点',
        prop: 'location'
    },
    {
        label: '服务领域',
        prop: 'serverDomain'
    },
    {
        label: '服务对象',
        prop: 'serverObject'
    },
    {
        label: '项目日期',
        prop: 'projectDate'
    },
    {
        label: '服务时段',
        prop: 'serverTime'
    },
    {
        label: '发布日期',
        prop: 'publishDate'
    },
    {
        label: '招募日期',
        prop: 'recruitDate'
    },
    {
        label: '结束日期',
        prop: 'expiryDate'
    },
    // {
    //     label: '目前状态',
    //     prop: 'status'
    // },
    {
        label: '审核状态',
        prop: 'checkStatus'
    },
    {
        label: '联系人',
        prop: 'linkman'
    }
    ,
    {
        label: '联系人手机号',
        prop: 'linkmanPhone'
    }
]