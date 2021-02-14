import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router';
import Home from '@/view/home';
import Help from '@/view/help';
import History from '@/view/history';
import Game from '@/view/game';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/help',
    name: 'help',
    component: Help,
  },
  {
    path: '/history',
    name: 'history',
    component: History,
  },
  {
    path: '/game',
    name: 'game',
    component: Game,
  },
];

const router = createRouter({
  history: process.env.NODE_ENV === 'production'
    ? createWebHistory()
    : createWebHashHistory(),
  routes,
});

export default router;
