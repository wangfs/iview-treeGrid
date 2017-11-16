<template>
  <div id='app'>
      <tree-grid 
        :items='data' 
        :columns='columns'
        @on-row-click='rowClick'
        @on-selection-change='selectionClick'
        @on-sort-change='sortClick'
      ></tree-grid>
  </div>
</template>

<script>
import TreeGrid from './components/treeGrid.vue'
export default {
  data: function () {
    return {
      columns: [
        {
          title: '名称',
          key: 'name'
        },
        {
          title: '操作',
          type: 'action',
          actions: [
            {
              type: 'text',
              text: '查看'
            },
            {
              type: 'text',
              text: '修改'
            },
            {
              type: 'text',
              text: '删除'
            }
          ]
        }
      ],
      data: [
        {
          id: 1,
          name: '贷款管理',
          tag: 'loan_manager',
          route: 'test/test',
          url: '',
          parent_id: 0,
          sort: 0,
          options: [
            {
              id: 2,
              name: '风控审核',
              tag: 'risk_control',
              route: '',
              url: '',
              parent_id: 1,
              sort: 0
            },
            {
              id: 3,
              name: '菜单管理',
              tag: 'menu',
              route: '',
              url: '',
              parent_id: 1,
              sort: 0,
              options: [
                {
                  id: 9,
                  name: '菜单列表',
                  tag: 'sysmenu.index',
                  route: '/sysmenu/index',
                  url: '/sysmenu/index',
                  parent_id: 3,
                  sort: 0
                },
                {
                  id: 10,
                  name: '添加菜单',
                  tag: 'menu.add',
                  route: '/sysmenu/add',
                  url: '/sysmenu/add',
                  parent_id: 3,
                  sort: 0
                }
              ]
            },
            {
              id: 5,
              name: '业务查询',
              tag: 'business_search',
              route: '',
              url: '',
              parent_id: 1,
              sort: 0
            }
          ]
        },
        {
          id: 13,
          name: '贷中管理',
          tag: 'process_manager',
          route: '',
          url: '',
          parent_id: 0,
          sort: 0,
          options: [
            {
              id: 54,
              name: '放款处理',
              tag: 'loan_processing',
              route: '',
              url: null,
              parent_id: 13,
              sort: 0
            }
          ]
        },
        {
          id: 27,
          name: '贷后管理',
          tag: 'after_loan_manager',
          route: '',
          url: '',
          parent_id: 0,
          sort: 0,
          options: [
            {
              id: 55,
              name: '还款情况',
              tag: 'repayment_status',
              route: '',
              url: null,
              parent_id: 27,
              sort: 0
            },
            {
              id: 56,
              name: '划拨扣款',
              tag: 'charge',
              route: '',
              url: null,
              parent_id: 27,
              sort: 0
            },
            {
              id: 57,
              name: '对公还款',
              tag: 'public_repayment',
              route: '',
              url: null,
              parent_id: 27,
              sort: 0
            },
            {
              id: 58,
              name: '京东对账',
              tag: 'JD_account_check',
              route: '',
              url: null,
              parent_id: 27,
              sort: 0
            },
            {
              id: 59,
              name: '费用减免',
              tag: 'cost_reduce',
              route: '',
              url: null,
              parent_id: 27,
              sort: 0
            },
            {
              id: 60,
              name: '休假管理',
              tag: 'vacation_manager',
              route: '',
              url: null,
              parent_id: 27,
              sort: 0
            },
            {
              id: 61,
              name: '消息推送',
              tag: 'message_push',
              route: '',
              url: null,
              parent_id: 27,
              sort: 0
            },
            {
              id: 63,
              name: '短信模板管理',
              tag: 'SMS_tpl_manager',
              route: '',
              url: null,
              parent_id: 27,
              sort: 0
            }
          ]
        },
        {
          id: 34,
          name: '名单管理',
          tag: 'list_manager',
          route: '',
          url: '',
          parent_id: 0,
          sort: 0,
          options: [
            {
              id: 35,
              name: '客户信息管理',
              tag: 'user',
              route: null,
              url: '',
              parent_id: 34,
              sort: 0,
              options: [
                {
                  id: 36,
                  name: '客户列表',
                  tag: 'user.index',
                  route: '/user/index',
                  url: '/user/index',
                  parent_id: 35,
                  sort: 0
                }
              ]
            },
            {
              id: 37,
              name: '合同信息管理',
              tag: 'contract',
              route: null,
              url: '',
              parent_id: 34,
              sort: 0,
              options: [
                {
                  id: 38,
                  name: '合同列表',
                  tag: 'contract.index',
                  route: '/contrace/index',
                  url: '/contrace/index',
                  parent_id: 37,
                  sort: 0
                }
              ]
            },
            {
              id: 39,
              name: '第三方服务管理',
              tag: 'services',
              route: null,
              url: '',
              parent_id: 34,
              sort: 0,
              options: [
                {
                  id: 40,
                  name: '第三方服务列表',
                  tag: 'services.index',
                  route: '/services/index',
                  url: '/services/index',
                  parent_id: 39,
                  sort: 0
                },
                {
                  id: 41,
                  name: '添加第三方服务',
                  tag: 'services.add',
                  route: '/services/add',
                  url: '/services/add',
                  parent_id: 39,
                  sort: 0
                }
              ]
            },
            {
              id: 42,
              name: '日志管理',
              tag: 'log',
              route: null,
              url: '',
              parent_id: 34,
              sort: 0,
              options: [
                {
                  id: 43,
                  name: '登录日志',
                  tag: 'log.login.index',
                  route: '/log/login/index',
                  url: '/log/login/index',
                  parent_id: 42,
                  sort: 0
                },
                {
                  id: 44,
                  name: '系统操作日志',
                  tag: 'log.sys.index',
                  route: '/log/sys/index',
                  url: '/log/sys/index',
                  parent_id: 42,
                  sort: 0
                }
              ]
            },
            {
              id: 64,
              name: '黑名单管理',
              tag: 'black_list_manager',
              route: '',
              url: null,
              parent_id: 34,
              sort: 0
            }
          ]
        },
        {
          id: 52,
          name: '产品管理',
          tag: 'product_manager',
          route: '',
          url: null,
          parent_id: 0,
          sort: 0,
          options: [
            {
              id: 65,
              name: '产品管理',
              tag: 'product_manage',
              route: '',
              url: null,
              parent_id: 52,
              sort: 0,
              options: [
                {
                  id: 69,
                  name: '产品管理',
                  tag: 'product_manager',
                  route: '/product/manage',
                  url: null,
                  parent_id: 65,
                  sort: 0
                },
                {
                  id: 70,
                  name: '产品配置',
                  tag: 'product_cfg',
                  route: '/product/config',
                  url: null,
                  parent_id: 65,
                  sort: 0
                }
              ]
            }
          ]
        },
        {
          id: 53,
          name: '系统管理',
          tag: 'sys_manage',
          route: '',
          url: null,
          parent_id: 0,
          sort: 0,
          options: [
            {
              id: 28,
              name: 'APP端配置',
              tag: 'app',
              route: '',
              url: '',
              parent_id: 53,
              sort: 0,
              options: [
                {
                  id: 30,
                  name: '版本管理√',
                  tag: 'app.add',
                  route: '/app/add',
                  url: '/app/add',
                  parent_id: 28,
                  sort: 0
                },
                {
                  id: 31,
                  name: '轮播图配置',
                  tag: 'adphoto',
                  route: '',
                  url: '',
                  parent_id: 28,
                  sort: 0
                }
              ]
            },
            {
              id: 62,
              name: '数据管理',
              tag: 'datamanager',
              route: ' ',
              url: null,
              parent_id: 53,
              sort: 0,
              options: [
                {
                  id: 6,
                  name: '常量列表√',
                  tag: 'const.index',
                  route: '/const/index',
                  url: '/const/index',
                  parent_id: 62,
                  sort: 0
                },
                {
                  id: 7,
                  name: '添加常量',
                  tag: 'const.add',
                  route: '/const/add',
                  url: '/const/add',
                  parent_id: 62,
                  sort: 0
                }
              ]
            },
            {
              id: 67,
              name: '系统管理',
              tag: 'release_version',
              route: '',
              url: null,
              parent_id: 53,
              sort: 0
            },
            {
              id: 68,
              name: '用户管理',
              tag: 'user_manager',
              route: '',
              url: null,
              parent_id: 53,
              sort: 0,
              options: [
                {
                  id: 17,
                  name: '职位管理',
                  tag: 'role',
                  route: '/customer_manager/position_manager',
                  url: '',
                  parent_id: 68,
                  sort: 0
                },
                {
                  id: 18,
                  name: '权限管理',
                  tag: 'permission',
                  route: '/customer_manager/authorty_manager',
                  url: '',
                  parent_id: 68,
                  sort: 2
                },
                {
                  id: 19,
                  name: '部门管理√',
                  tag: 'department',
                  route: '/customer_manager/department_manager',
                  url: '',
                  parent_id: 68,
                  sort: 3
                },
                {
                  id: 71,
                  name: '员工管理√',
                  tag: '/employee/index',
                  route: '/employee/index',
                  url: null,
                  parent_id: 68,
                  sort: 1
                }
              ]
            }
          ]
        }
      ]
    }
  },
  components: {
    TreeGrid
  },
  methods: {
    rowClick (data, index, event, text) {
      if (text === '查看') {
        console.log(0)
      }
      if (text === '修改') {
        console.log(2)
      }
      if (text === '删除') {
        console.log(3)
      }
    },
    selectionClick (arr) {
      console.log('选中数据id数组:' + arr)
    },
    sortClick (key, type) {
      console.log('排序字段:' + key)
      console.log('排序规则:' + type)
    }
  }
}
</script>

<style scoped>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px;
}
</style>