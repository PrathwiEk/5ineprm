import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)



export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    
    {
      path: '/',
      name: 'register',
      // beforeEnter: guard,
      component: () => import('./views/auth/Register.vue')
    },
    {
      path: '/signin',
      name: 'login',
      // beforeEnter: guard,
      component: () => import('./views/auth/login.vue')
    },
    {
      path: '/reset-password',
      name: 'rest_password',
      beforeEnter: guard,
      component: () => import('./views/auth/reset-password.vue')
    },
    {
      path: '/update-reg',
      name: 'update_reg',
      beforeEnter: guard,
      component: () => import('./views/auth/reg-update.vue')
    },

    // after login

    {
      path: '/dashboard',
      name: 'dashboard',
      beforeEnter: guard,
      component: () => import('./views/dashboard/dashboard.vue')
    },

    //  projects
    {
      path: '/projects',
      name: 'Projects',
      beforeEnter: guard,
      component: () => import('./views/project/List.vue')
    },
    {
      path: '/project-create',
      name: 'ProjectCreate',
      beforeEnter: guard,
      component: () => import('./views/project/Create.vue')
    },
    {
      path: '/project/:id',
      name: 'Project Detail',
      beforeEnter: guard,
      component: () => import('./views/project/Detail.vue')
    },
      // project inside
      {
        path: '/project/:id/tasks',
        name: 'Tasks',
        beforeEnter: guard,
        component: () => import('@/views/project/tasks/list.vue')
      },
      {
        path: '/project/:id/milstones',
        name: 'Milstones',
        beforeEnter: guard,
        component: () => import('@/views/project/milestone/list.vue')
      },
      {
        path: '/project/:id/work-board',
        name: 'Work-Board',
        beforeEnter: guard,
        component: () => import('@/views/project/tasks/work.vue')
      },

    // organization
    // Department
    {
      path: '/organization/department',
      name: 'department list',
      beforeEnter: guard,
      component: () => import('./views/org/department.vue'),
    },
    {
      path: '/organization/department/create',
      name: 'department create new',
      beforeEnter: guard,
      component: () => import('./views/org/departmentAdd.vue')
    },

    {
      path: '/organization/department/edit/:id',
      name: 'department edit',
      beforeEnter: guard,
      component: () => import('./views/org/departmentEdit.vue')
    },

    // designation
    {
      path: '/organization/designation',
      name: 'designation list',
      beforeEnter: guard,
      component: () => import('./views/org/designation.vue'),
    },
    {
      path: '/organization/designation/create',
      name: 'designation create new',
      beforeEnter: guard,
      component: () => import('./views/org/designationAdd.vue')
    },

    {
      path: '/organization/designation/edit/:id',
      name: 'designation edit',
      beforeEnter: guard,
      component: () => import('./views/org/designationEdit.vue')
    },

    // GROUP
    {
      path: '/organization/group',
      name: 'Group',
      beforeEnter: guard,
      component: () => import('./views/org/group.vue')
    },
    {
      path: '/organization/group/create',
      name: 'Group Add ',
      beforeEnter: guard,
      component: () => import('./views/org/groupAdd.vue')
    },
    {
      path: '/organization/group/edit/:id',
      name: 'Group edit detail',
      beforeEnter: guard,
      component: () => import('./views/org/groupEdit.vue')
    },


    // EMPLOYEE
    {
      path: '/organization/employee',
      name: 'employee',
      beforeEnter: guard,
      component: () => import('./views/org/employee.vue')
    },
    {
      path: '/organization/employee/create',
      name: 'employee Add ',
      beforeEnter: guard,
      component: () => import('./views/org/employeeAdd.vue')
    },
    {
      path: '/organization/employee/edit/:id',
      name: 'employee edit detail',
      beforeEnter: guard,
      component: () => import('./views/org/employeeEdit.vue')
    },

    
    
  ]
})


function guard(to, from, next){
  
  if(store.state.user !=""){
    var t = JSON.parse(store.state.user);
  }else{
    t = {status : 'inactive'}
  }  
  if(t.status == 'active') {
      next(); 
  } else{
      next('/signin'); 
  }
}

// department router
