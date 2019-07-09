import { lazy } from 'react'
import Layout from 'containers/Main/Layout'

const PageOne = lazy(() => import('containers/Pages/pageOne'))
const PageTwo = lazy(() => import('containers/Pages/pageTwo'))
const PageThree = lazy(() => import('containers/Pages/pageThree'))
const PageFour = lazy(() => import('containers/Pages/pageFour'))

const route = [
  {
    path: '/',
    component: PageOne,
    exact: true,
    title: 'Page1',
    layout: Layout
  },
  {
    path: '/p2',
    component: PageTwo,
    exact: true,
    title: 'Page2',
    layout: Layout
  },
  {
    path: '/p3',
    component: PageThree,
    exact: true,
    title: 'Page3',
    layout: Layout
  },
  {
    path: '/p4',
    component: PageFour,
    exact: true,
    title: 'Page4',
    layout: Layout
  }
]

export default route
