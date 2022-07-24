// 项目审核：项目id、队伍id、项目地点、服务领域、服务对象、服务时间段（每周x每天x点到x点）、项目日期、发布日期、招募日期、结束日期、目前状态（招募待启动、招募中、招募已结束、已结项）、审核状态、项目logo、项目联系人、联系人手机号
export const ProjectCheck_tableConfig = [
<<<<<<< HEAD
    {
        label: 'id',
        prop: 'project.id',
    },
    {
        label: '联系人',
        prop: 'project.leaderName'
    },
    {
        label: '联系人邮箱',
        prop: 'project.leaderEmail'
    },
    {
        label: '联系人电话',
        prop: 'project.leaderTelephone'
    },
    {
        label: '服务地点',
        prop: 'project.projectLocation'
    },
=======
    // {
    //     label: 'id',
    //     prop: 'project.id',
    // },
>>>>>>> b0876186c0cc78d6bc041fa87a94c11eaaab1737
    {
        label: '项目名称',
        prop: 'project.projectName'
    },
    {
        label: '服务领域',
        prop: 'project.serviceArea'
    },
    {
        label: '服务对象',
        prop: 'project.serviceTarget'
    },
    {
<<<<<<< HEAD
        label: '审核状态',
        prop: 'project.status'
=======
        label: '服务地点',
        prop: 'project.projectLocation'
>>>>>>> b0876186c0cc78d6bc041fa87a94c11eaaab1737
    },
    // {
    //     label: '队伍ID',
    //     prop: 'project.teamId'
    // },
    // {
    //     label: '队伍名称',
    //     prop: 'project.teamName'
    // },
    // {
    //     label: '联系人',
    //     prop: 'project.leaderName'
    // },
    // // {
    //     label: '联系人邮箱',
    //     prop: 'project.leaderEmail'
    // },
    // {
    //     label: '联系人电话',
    //     prop: 'project.leaderTelephone'
    // },
    {
        label: '开始时间',
        prop: 'project.serviceStartDate'
    },
    {
        label: '结束时间',
        prop: 'project.serviceEndDate'
    },

    // {
    //     label: '目前状态',
    //     prop: 'project.status'
    // },

    // {
    //     label: '',
    //     prop: 'project.uidCenter'
    // },
    // {
    //     label: '',
    //     prop: 'project.uidTeamMaster'
    // }
]
export const MyProject_tableConfig = [
    {
        label: '项目名称',
        prop: 'projectName'
    },
    {
        label: '服务领域',
        prop: 'serviceArea'
    },
    
    {
        label: '服务对象',
        prop: 'serviceTarget'
    },
    {
        label: '服务地点',
        prop: 'projectLocation'
    },
    {
        label: '开始时间',
        prop: 'serviceStartDate'
    },
   
    {
        label: '结束时间',
        prop: 'serviceEndDate'
    },
    {
        label: '审核状态',
        prop: 'status'
    },
]