export const tableConfig = [
    {
        label: '姓名',
        prop: 'name'
    },
    {
        label: '性别',
        prop: 'gender'
    },
    {
        label: '教育',
        prop: 'education'
    },
    {
        label: '专业特长',
        prop: 'processional'
    }
]
// 队伍审核志愿者入队：志愿者id、用户名、姓名、性别、出生日期、手机号、学历、专业特长
export const VolToTeam_tableConfig = [
    // {
    //   label: 'id',
    //   prop: 'id',
    // },
    {
        label: '志愿者id',
        prop: 'volunteerId'
    },
    {
        label: '用户名',
        prop: 'nickname'
    },
    {
        label: '姓名',
        prop: 'name'
    },
    {
        label: '性别',
        prop: 'sex'
    },
    {
        label: '出生日期',
        prop: 'birthday'
    },
    {
        label: '手机号',
        prop: 'phone'
    }
    ,
    {
        label: '学历',
        prop: 'education'
    },
    {
        label: '专业特长',
        prop: 'processional'
    }
]

// 队伍审核志愿者入项：志愿者id、队伍id（可空）、志愿时长、项目id、加入队伍状态、加入项目状态
export const VolToProject_tableConfig = [
    // {
    //   label: 'id',
    //   prop: 'id',
    // },
    {
        label: '志愿者ID',
        prop: 'volunteerId'
    },
    {
        label: '队伍ID',
        prop: 'teamId'
    },
    {
        label: '志愿时长',
        prop: 'volunteerTime'
    },
    {
        label: '申请项目ID',
        prop: 'projectId'
    },
    {
        label: '加入队伍状态',
        prop: 'toTeamStatus'
    },
    {
        label: '加入项目状态',
        prop: 'toProjectStatus'
    }
]