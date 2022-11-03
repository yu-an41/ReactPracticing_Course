import Counter from './ex.1-1025/Counter'
import JSXValue from './ex.2-1026-1/JSXValue'
import StudentList from './ex.3-1026-2/StudentList'
// import Menu from './ex.4-1026-3-Menu/Menu'
import Demo from './ex.5-1026-4-array/Demo'
import Parent from './ex.6-1027-1/Parent'

//預設導出的話可以在導入時直接給改名)
import ParentPropTypes from './ex.7-1027-2/Parent'
import ParentDataFlow from './ex.8-1027-3/Parent'
import InputDemo from './ex.9-1028-1/InputDemo'
import HTML5Form from './ex.10-1028-2/HTML5Form'

import BMI from './ex.11-1031-1/BMI'
import BirthSelect from './ex.12-1031-2/BirthSelect'
import TodoApp from './ex.13-1031-3/TodoApp'

import MultipleInput from './ex.14-1101-1/MultipleInput'
import HTML5ValidForm from './ex.15-1102-1/HTML5ValidForm'
import Lifecycle from './ex.16-1102-2/Lifecycle'
import User from './ex.17-1102-3/User'

import ImageDemo from './ex.18-1103-1/ImageDemo'

export const examples = [
  {
    name: '18-圖片使用說明',
    path: './ex.1103-1/ImageDemo',
    component: ImageDemo,
  },
  {
    name: '17-從遠端伺服器載入會員資料',
    path: './ex.17-1102-3/User',
    component: User,
  },
  {
    name: '16-生命週期',
    path: './ex.16-1102-2/Lifecycle',
    component: Lifecycle,
  },
  {
    name: '15-表單驗證',
    path: './ex.15-1102-1/HTML5ValidForm',
    component: HTML5ValidForm,
  },
  {
    name: '14-多個表單元素共用單一state',
    path: './ex.14-1101-1/MultipleInput',
    component: MultipleInput,
  },
  {
    name: '13-To Do List',
    path: './ex.13-1031-3/TodoApp',
    component: TodoApp,
  },
  {
    name: '12-下拉式生日選單',
    path: './ex.12-1031-2/BirthSelect',
    component: BirthSelect,
  },
  {
    name: '11-BMI線上計算表單',
    path: './ex.11-1031-1/BMI',
    component: BMI,
  },
  {
    name: '10-各種可控表單元素',
    path: './ex.10-1028-2/HTML5Form',
    component: HTML5Form,
  },
  {
    name: '9-可控vs不可控表單元素',
    path: './ex.9-1028-1/InputDemo',
    component: InputDemo,
  },
  {
    name: '8-三種資料流',
    path: './ex.8-1027-3/Parent',
    component: ParentDataFlow,
  },
  {
    name: '7-PropTypes',
    path: './ex.7-1027-2/Parent',
    component: ParentPropTypes,
  },
  {
    name: '6-props屬性',
    path: './ex.6-1027-1/Parent',
    component: Parent,
  },
  {
    name: '5-陣列增刪',
    path: './ex.5-1026-4-array/Demo',
    component: Demo,
  },
  // {
  //   name: '4-點亮選單',
  //   path: './ex.4/Menu',
  //   component: Menu,
  // },
  {
    name: '3-學生資料清單',
    path: './ex.3-1026-2/StudentList',
    component: StudentList,
  },
  {
    name: '2-JSX資料的值',
    path: './ex.2-1026-1/JSXValue',
    component: JSXValue,
  },
  {
    name: '1-計數器',
    path: './ex.1-1025/Counter',
    component: Counter,
  },
]
