//代码总结类

// 前端将文件转为base64并上传文件

/**
 * 将file转为base64
 * fileReader() 是JS自带文件类
 * reader.result 返回就是base64 (字符串)
 * @param {*} file 组件返回的file对象文件
 * @returns 
 */ 
function getBase64(file){
    return new Promise((resolve,reject)=>{
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error)=>reject(error)
    })
}

// 前端以formDate对象上传文件
/**
 * formData.append(name, value, filename);
 * multipartFile 为约定传入参数
 * @param {*} file 
 * @returns 
 */
function getFormData(file){
    const FormData = new FormData()
    formData.append('multipartFile', file.file)
    return FormData
}

// 前端上传txt、Excel文件

// vue双向绑定中，如果要拓展数组的属性，需要使用 this.$set() 或者使用object.assgin
let data = [{name:'panpan',age:18},{name:'kkv',age:17}]
// data绑定类表组件，如果直接添加属性或者添加children属性，数据不会动态更新（vue能监听数组、对象变化） 
// 添加属性拓展可以使用 this.$set() 和 object.assgin() 函数
// 数组添加可以使用数组的原生方法：push()、 pop()、shitf() 、unshitf、slice()//替换等函数
this.$set(this.data[1], 'children', {name:"smallvv",age:2})  //在第二个数组添加children对象
// 或者
Object.assign(this.data[1],{chailden:{name:"smallvv",age:2}}) //Objcet.assign(obj,obj1)  等于拓展符用法: {...obj,...obj1}

// Array.prototype.find() 用法
// constantRouterMap  为静态路由
// 动态路由：需要将数据填充到 ：state.permission.addRouters
// addRouters 为路由数据，需要从后台返回数据，然后整合，需要添加按钮权限标签 
// 修改 路由数据：


// 移动端核心
// vue核心
// webpack核心

// yarn 和 npm区别

// 就是能收集全部记录
// 列表插入替换 修改默认的数据展示如：编辑按钮  开关之类的
// slot 为插入项
// slot-scope 为插入数据
<template slot="action" slot-scope="row">
          <a-button type="primary" size="small" class="mr-16" @click="edite(row)"> 编辑 </a-button>
          <a-button type="danger" size="small" class="mr-16" @click="delMenuComfirm(row)"> 删除 </a-button>
 </template>


// 修改弹框数据传输：
// 通过 ref 进行父子事件传递（单向）

//进行页面跳转
this.$router.push({ path: '/boxEdit', query: { id: item.id } })

// 树形表单实现：只需要当前item项加入children 并插入同样的数据结构，就可以实现二级列表、三级列表
//展开图标修改
// 

    expandIcon(props) {
      if (props.record.children) {
        // 有数据-展开时候图标
        if (props.expanded) {
          return (
            <a
              style="color: 'black',margin-right:0px"
              onClick={(e) => {
                props.onExpand(props.record, e)
              }}
            >
              <a-icon type="down" style="color:#3881FF;padding-right:4px" />{' '}
            </a>
          )
        } else {
          return (
            <a
              style="color: 'black',margin-right:0px"
              onClick={(e) => {
                props.onExpand(props.record, e)
              }}
            >
              <a-icon type="right" style="color:#3881FF;padding-right:4px" />
            </a>
          )
        }
      } else {
        return <span style="margin-left:4px"></span>
      }
    },



  <a-button type="primary" size="small" class="mr-16" v-action:edit @click="edite(row)"> 编辑 </a-button>
 <a-button type="danger" size="small" class="mr-16" v-action:del @click="delMenuComfirm(row)"> 删除 </a-button>
 <a-button type="primary" icon="plus" v-action:add @click="addMenuFn">新增菜单</a-button>

// 使用popover 实现图片悬停展出
<a-popover placement="right">
<template slot="content">
  <img :src="row.img" v-if="row.img" alt="" class="big-img">
</template>
<img :src="row.img" v-if="row.img" alt="" class="small-img">
</a-popover>



export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '首页' },
    redirect: '/dailyMenu',
    children: [
      {
        path: '/cookbookMng',
        name: 'CookbookMng',
        redirect: '/box',
        component: RouteView,
        meta: { title: '菜谱管理', icon: bxAnaalyse, keepAlive: false },
        children: [
          {
            path: '/box',
            name: 'Box',
            component: () => import('@/views/cookbookMng/Box'),
            meta: { title: '盒子', keepAlive: false, permission: [ 'edite' ] }
          },
          {
            path: '/menuList',
            name: 'MenuList',
            component: () => import('@/views/cookbookMng/MenuList'),
            meta: { title: '菜谱', keepAlive: false, permission: [ 'edite' ] }
          },
          {
            path: '/dishExamine',
            name: 'DishExamine',
            component: () => import('@/views/cookbookMng/DishExamine'),
            meta: { title: '菜盒/菜谱审核', keepAlive: false, permission: [ 'edite' ] }
          },
          {
            path: '/labelManage',
            name: 'LabelManage',
            component: () => import('@/views/cookbookMng/LabelManage'),
            meta: { title: '分类管理', keepAlive: false, permission: [ 'edite' ] }
          },
          {
            path: '/basicContent',
            name: 'BasicContent',
            component: () => import('@/views/cookbookMng/components/basicContent'),
            hidden: true,
            meta: { title: '菜盒基础内容', keepAlive: true }
          },
          {
            path: '/boxAdd',
            name: 'BoxAdd',
            component: () => import('@/views/cookbookMng/components/add'),
            hidden: true,
            meta: { title: '新增菜盒', keepAlive: true }
          },
          {
            path: '/boxEdit',
            name: 'BoxEdit',
            component: () => import('@/views/cookbookMng/components/edit'),
            hidden: true,
            meta: { title: '编辑菜盒', keepAlive: true }
          },
          {
            path: '/menComponentsContent',
            name: 'MenComponentsContent',
            component: () => import('@/views/cookbookMng/MenComponents/basicIndex'),
            hidden: true,
            meta: { title: '菜谱基础内容', keepAlive: true }
          },
          {
            path: '/addMenu',
            name: 'AddMenu',
            component: () => import('@/views/cookbookMng/MenComponents/addIndex'),
            hidden: true,
            meta: { title: '新增菜谱', keepAlive: true }
          },
          {
            path: '/editMenu',
            name: 'EditMenu',
            component: () => import('@/views/cookbookMng/MenComponents/editIndex'),
            hidden: true,
            meta: { title: '修改菜谱', keepAlive: true }
          }
        ]
      },
      {
        path: '/common/userResetPasswords',
        name: 'userResetPasswords',
        hidden: true,
        component: () => import('@/views/common/UserResetPasswords')
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  },
]