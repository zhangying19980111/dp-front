// 队伍审核：
// 队伍id、队伍名称、负责人、负责人手机号、联系人、联系人手机号、负责人邮箱、主管单位、人数、服务领域、详细地址（哪个班、处）、队伍区域（哪个地区）、用户名、密码、审核状态、队伍logo
export const teamCheck_tableConfig = [
    {
      label: 'id',
      prop: 'team.id',
    },
    {
        label: '详细地址',
        prop: 'team.address'
    },
    {
        label: '队伍区域',
        prop: 'team.area'
    },
    {
        label: '联系人',
        prop: 'team.contact'
    },
    {
        label: '联系人手机号',
        prop: 'team.contactTelephone'
    },
    {
        label: '负责人',
        prop: 'team.leader'
    },
    {
        label: '负责人手机号',
        prop: 'team.leaderTelephone'
    },
    {
        label: '队伍名称',
        prop: 'team.name'
    },
    {
        label: '主管单位',
        prop: 'team.organizer'
    },
    {
        label: '服务领域',
        prop: 'team.serveField'
    },
    {
        label: '状态',
        prop: 'team.status'
    },
    // {
    //     label: '',
    //     prop: 'team.teamStatus'
    // },
    // {
    //     label: '审核人id',
    //     prop: 'team.uid'
    // },

]

// 项目审核：项目id、队伍id、项目地点、服务领域、服务对象、服务时间段（每周x每天x点到x点）、项目日期、发布日期、招募日期、结束日期、目前状态（招募待启动、招募中、招募已结束、已结项）、审核状态、项目logo、项目联系人、联系人手机号
export const ProjectCheck_tableConfig = [
    // {
    //   label: 'id',
    //   prop: 'id',
    // },
    {
        label: '项目名称',
        prop: 'projectName'
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
        label: '项目开始日期',
        prop: 'projectStartDate'
    },
    {
        label: '项目结束日期',
        prop: 'projectEndDate'
    },
    {
        label: '审核状态',
        prop: 'status'
    }
]