import Counter from './ex.1-1025/Counter'
import JSXValue from './ex.2-1026-1/JSXValue'
import StudentList from './ex.3-1026-2/StudentList'
import Menu from './ex.4-1026-3-Menu/Menu'
import Demo from './ex.5-1026-4-array/Demo'
import Parent from './ex.6-1027-1/Parent'

//預設導出的話可以再導入時直接給改名)
import ParentPropTypes from './ex.7-1027-2/Parent'
import ParentDataFlow from './ex.8-1027-3/Parent'

export const examples = [
  {
    name: '1-計數器',
    path: './ex.1-1025/Counter',
    component: Counter,
  },
  {
    name: '2-JSX資料的值',
    path: './ex.2-1026-1/JSXValue',
    component: JSXValue,
  },
  {
    name: '3-學生資料清單',
    path: './ex.3-1026-2/StudentList',
    component: StudentList,
  },
  {
    name: '4-點亮選單',
    path: './ex.4/Menu',
    component: Menu,
  },
  {
    name: '5-陣列增刪',
    path: './ex.5-1026-4-array/Demo',
    component: Demo,
  },
  {
    name: '6-props屬性',
    path: './ex.6-1027-1/Parent',
    component: Parent,
  },
  {
    name: '7-PropTypes',
    path: './ex.7-1027-2/Parent',
    component: ParentPropTypes,
  },
  {
    name: '8-三種資料流',
    path: './ex.8-1027-3/Parent',
    component: ParentDataFlow,
  },
]
