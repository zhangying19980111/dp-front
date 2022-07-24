// 队伍审核志愿者入队：志愿者id、用户名、姓名、性别、出生日期、手机号、学历、专业特长
export const VolToTeam_tableConfig = [
    // {
    //   label: 'id',
    //   prop: 'id',
    // },
    {
        label: '姓名',
        prop: 'volunteer.name'
    },
    {
        label: '性别',
        prop: 'volunteer.sex'
    },
    {
        label: '学历',
        prop: 'volunteer.education'
    },
    {
        label: '专业特长',
        prop: 'volunteer.specialty'
    },
    {
        label:'审核状态',
        prop:'status'
    }
]

export const VolToProject_tableConfig = [
    // {
    //   label: 'id',
    //   prop: 'id',
    // },
    {
        label: '姓名',
        prop: 'volunteer.name'
    },
    {
        label: '性别',
        prop: 'volunteer.sex'
    },
    {
        label: '学历',
        prop: 'volunteer.education'
    },
    {
        label: '专业特长',
        prop: 'volunteer.specialty'
    },
    {
        label: '参与项目',
        prop: 'project.projectName'
    },
    {
        label:'审核状态',
        prop:'status'
    }
]

export const MyVol_tableConfig = [
    // {
    //   label: 'id',
    //   prop: 'id',
    // },
    {
        label: '姓名',
        prop: 'volunteer.name'
    },
    {
        label: '性别',
        prop: 'volunteer.sex'
    },
    {
        label: '学历',
        prop: 'volunteer.education'
    },
    {
        label: '专业特长',
        prop: 'volunteer.specialty'
    },
]